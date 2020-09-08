import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import getPasswordHash from '../utils/encryptPassword'

import { db } from '../database/connection'

interface User {
  id?: number
  name?: string
  email?: string
  avatar?: string
  whatsapp?: string
  bio?: string
  password?: string
  password_reset_token?: string
  password_reset_expires?: Date
}

export class UsersController {
  async auth (req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body

      const user: User[] = await db('users').where({ email })

      if (user.length !== 1) {
        return res.status(404).json({ error: 'User not find' })
      }

      if (!(await bcrypt.compare(password, String(user[0].password)))) {
        return res.status(404).json({ error: 'Password Invalid' })
      }

      const token = jwt.sign({ id: user[0].id }, String(process.env.APP_SECRET), {
        expiresIn: '1d'
      })

      const user_data = {
        id: user[0].id,
        name: user[0].name,
        email: user[0].email,
        token
      }

      return res.json(user_data)
    } catch (error) {
      next(error)
    }
  }

  async create (req: Request, res: Response, next: NextFunction) {
    try {
      const {
        name,
        email,
        avatar,
        whatsapp,
        bio,
        password,
      } = req.body

      const password_hash = await getPasswordHash(password)

      await db('users').insert({
        name,
        email,
        avatar,
        whatsapp,
        bio,
        password: password_hash
      })

      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  }
}
