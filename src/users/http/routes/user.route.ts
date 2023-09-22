import { Request, Response, Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { container } from 'tsyringe'
import multer from 'multer'
import { CreateUserController } from '@user/useCases/createUser/CreateUserController'
import { ListUsersController } from '@user/useCases/listUsers/ListUsersController'
import { CreateLoginController } from '@user/useCases/createLogin/CreateLoginController'
import { UpdateAvatarController } from '@user/useCases/updateAvatar/UpdateAvatarController'
import { ShowProfileController } from '@user/useCases/showProfile/ShowProfileController'
import { isAuthenticate } from '@shared/http/middlewares/isAuthenticate'
import uploadConfig from '@config/upload'

const usersRouter = Router()
const createUserController = container.resolve(CreateUserController)
const listUsersController = container.resolve(ListUsersController)
const createLoginController = container.resolve(CreateLoginController)
const updateAvatarController = container.resolve(UpdateAvatarController)
const showProfileController = container.resolve(ShowProfileController)
const upload = multer(uploadConfig)

usersRouter.post(
  '/',
  isAuthenticate,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      roleId: Joi.string().uuid().required(),
    },
  }),
  (request, response) => {
    return createUserController.handle(request, response)
  },
)

usersRouter.get(
  '/',
  isAuthenticate,
  celebrate({
    [Segments.QUERY]: {
      page: Joi.number(),
      limit: Joi.number(),
    },
  }),
  (request: Request, response: Response) => {
    return listUsersController.handle(request, response)
  },
)

usersRouter.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  (request, response) => {
    return createLoginController.handle(request, response)
  },
)

usersRouter.patch(
  '/avatar',
  isAuthenticate,
  upload.single('avatar'),
  (request: Request, response: Response) => {
    return updateAvatarController.handle(request, response)
  },
)

usersRouter.get(
  '/profile',
  isAuthenticate,
  (request: Request, response: Response) => {
    return showProfileController.handle(request, response)
  },
)

export { usersRouter }
