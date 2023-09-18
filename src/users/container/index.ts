import { IUsersRepository } from '@user/repositories/IUsersRepository'
import { UsersRepository } from '@user/repositories/UsersRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
