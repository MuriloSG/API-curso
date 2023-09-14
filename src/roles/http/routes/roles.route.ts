import { createRolesController } from '@roles/useCases/createRole'
import { deleteRolesController } from '@roles/useCases/deleteRole'
import { listRolesController } from '@roles/useCases/listRoles'
import { showRolesController } from '@roles/useCases/showRole'
import { updateRolesController } from '@roles/useCases/updateRole'
import { Request, Response, Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

const rolesRouter = Router()

rolesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (request: Request, response: Response) => {
    return createRolesController.handle(request, response)
  },
)

rolesRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (request: Request, response: Response) => {
    return listRolesController.handle(request, response)
  },
)

rolesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request: Request, response: Response) => {
    return showRolesController.handle(request, response)
  },
)

rolesRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (request: Request, response: Response) => {
    return updateRolesController.handle(request, response)
  },
)

rolesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request: Request, response: Response) => {
    return deleteRolesController.handle(request, response)
  },
)

export { rolesRouter }
