import{ Router} from 'express'

import { auth } from './middlewares/auth'

import { ClassesController } from './controllers/ClassesController'
import { ConnectionsController } from './controllers/ConnectionsController'
import { UsersController } from './controllers/UsersController'

const classesController = new ClassesController()
const connectionsController = new ConnectionsController()
const usersController = new UsersController()

const routes = Router()

routes.post('/auth', usersController.auth)
routes.post('/users', usersController.create)

routes.get('/classes', classesController.index)

routes.get('/connections', connectionsController.index)

routes.use(auth)

routes.post('/classes', classesController.create)
routes.post('/connections', connectionsController.create)


export { routes }
