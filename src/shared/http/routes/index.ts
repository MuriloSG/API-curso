import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  response.json({ messge: 'Olá dev' })
})

export { routes }
