import { IUsersRepository } from '@user/repositories/IUsersRepository'
import { UsersRepository } from '@user/repositories/UsersRepository'
import { CreateUserController } from '@user/useCases/createUser/CreateUserController'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
container.registerSingleton('CreateUserController', CreateUserController)
