import { Request, Response, Router } from 'express'
import { rolesRouter } from '@roles/http/routes/roles.route'
import { usersRouter } from '@user/http/routes/user.route'
const routes = Router()

routes.get('/', (request: Request, response: Response) => {
  response.json({ messge: 'Olá dev' })
})

routes.use('/roles', rolesRouter)
routes.use('/users', usersRouter)
export { routes }
