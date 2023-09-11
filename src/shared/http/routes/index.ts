import { AppError } from '@shared/errors/AppError'
import { Request, Response, Router } from 'express'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
  throw new Error('acesso negado')
  response.json({ messge: 'Olá dev' })
})

export { routes }
