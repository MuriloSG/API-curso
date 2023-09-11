import { Request, Response, Router } from 'express'
import { rolesRouter } from '@roles/http/routes/roles.route'
const routes = Router()

routes.get('/', (request: Request, response: Response) => {
  response.json({ messge: 'Olá dev' })
})

routes.use('/roles', rolesRouter)

export { routes }
