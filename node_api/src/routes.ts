import { Router } from 'express'

import { CopaMundoController } from './controllers/CopaMundoController'

const routes = Router();

const copaMundoController = new CopaMundoController()

routes.post('/worldcup', copaMundoController.create)
routes.get('/worldcup', copaMundoController.index)
routes.get('/worldcup/:id', copaMundoController.show)
routes.delete('/worldcup/:id', copaMundoController.delete)
routes.put('/worldcup/:id', copaMundoController.update)

export { routes }

