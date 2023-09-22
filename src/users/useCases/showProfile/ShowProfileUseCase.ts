/* eslint-disable prettier/prettier */
import { inject, injectable } from 'tsyringe'
import { AppError } from '@shared/errors/AppError'
import { IUsersRepository } from '@user/repositories/IUsersRepository'
import { User } from '@user/entities/User'

export type ShowProfileParams = {
  userId: string
}

@injectable()
export class ShowProfileUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) { }

  async execute({ userId }: ShowProfileParams): Promise<User> {
    const user = await this.usersRepository.findById(userId)
    if (!user) {
      throw new AppError('Email address already used')
    }
    return user
  }
}
