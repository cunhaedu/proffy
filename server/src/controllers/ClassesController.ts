import { Request, Response } from 'express'

import { db } from '../database/connection'
import { convertHoursToMinutes } from '../utils/convertHoursToMinutes'

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
}

export class ClassesController {
  async index (req: Request, res: Response) {
    const filters = req.query

    if (!filters.week_day || !filters.subject || !filters.time) {
      return res.status(400).json({ error: 'Missing filters to search classes' })
    }

    const time = filters.time as string
    const subject = filters.subject as string
    const week_day = filters.week_day as string

    const timeInMinutes = convertHoursToMinutes(time)

    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
        .from('class_schedule')
        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
        .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
        .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
        .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select('classes.*', 'users.*')

    const serializedClasses = classes.map(user => {
      user.password = undefined
      user.password_reset_token = undefined
      user.password_reset_expires = undefined
    })

    return res.json(classes)
  }

  async create (req: Request, res: Response) {
    const {
      user_id,
      subject,
      cost,
      schedule
    } = req.body

    const trx = await db.transaction()

    try {

      const InsertedClassesIds = await trx('classes').insert({
        subject: String(subject),
        cost,
        user_id
      })

      const class_id = InsertedClassesIds[0]

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHoursToMinutes(scheduleItem.from),
          to: convertHoursToMinutes(scheduleItem.to)
        }
      })

      await trx('class_schedule').insert(classSchedule)

      await trx.commit()

      return res.status(201).send()
    } catch (error) {
      await trx.rollback()
      return res.status(400).json({ message: 'Unexpected error while creating new class' })
    }
  }
}
