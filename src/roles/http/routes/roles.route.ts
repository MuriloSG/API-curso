import { RolesRepository } from '@roles/repositories/RolesRepository'
import { createRolesController } from '@roles/useCases/createRole'

import { Request, Response, Router } from 'express'

const rolesRouter = Router()
const rolesRepository = new RolesRepository()
rolesRouter.post('/', (request: Request, response: Response) => {
  return createRolesController.handle(request, response)
})

rolesRouter.get('/', (request: Request, response: Response) => {
  const roles = rolesRepository.findAll()
  return response.json(roles)
})

export { rolesRouter }
