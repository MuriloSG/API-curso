import { ListRolesController } from '@roles/useCases/listRoles/ListRolesController'
import { IRefreshTokenRepository } from '@user/repositories/IRefreshTokenRepository'
import { IUsersRepository } from '@user/repositories/IUsersRepository'
import { RefreshTokenRepository } from '@user/repositories/RefreshTokenRepository'
import { UsersRepository } from '@user/repositories/UsersRepository'
import { CreateLoginController } from '@user/useCases/createLogin/CreateLoginController'
import { CreateUserController } from '@user/useCases/createUser/CreateUserController'
import { ShowProfileController } from '@user/useCases/showProfile/ShowProfileController'
import { UpdateAvatarController } from '@user/useCases/updateAvatar/UpdateAvatarController'
import { UpdateProfileController } from '@user/useCases/updateProfile/UpdateProfileController'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
container.registerSingleton<IRefreshTokenRepository>(
  'RefreshTokenRepository',
  RefreshTokenRepository,
)
container.registerSingleton('CreateUserController', CreateUserController)
container.registerSingleton('ListRolesController', ListRolesController)
container.registerSingleton('CreateLoginController', CreateLoginController)
container.registerSingleton('UpdateAvatarController', UpdateAvatarController)
container.registerSingleton('ShowProfileController', ShowProfileController)
container.registerSingleton('UpdateProfileController', UpdateProfileController)
