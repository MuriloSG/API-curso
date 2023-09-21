import { ListRolesController } from '@roles/useCases/listRoles/ListRolesController'
import { IUsersRepository } from '@user/repositories/IUsersRepository'
import { UsersRepository } from '@user/repositories/UsersRepository'
import { CreateLoginController } from '@user/useCases/createLogin/CreateLoginController'
import { CreateUserController } from '@user/useCases/createUser/CreateUserController'
import { UpdateAvatarController } from '@user/useCases/updateAvatar/UpdateAvatarController'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
container.registerSingleton('CreateUserController', CreateUserController)
container.registerSingleton('ListRolesController', ListRolesController)
container.registerSingleton('CreateLoginController', CreateLoginController)
container.registerSingleton('UpdateAvatarController', UpdateAvatarController)
