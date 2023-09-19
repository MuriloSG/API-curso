/* eslint-disable prettier/prettier */
import { inject, injectable } from 'tsyringe'
import { compare } from 'bcryptjs'
import jwtConfig from '@config/auth'
import { AppError } from '@shared/errors/AppError'
import { User } from '@user/entities/User'
import { IUsersRepository } from '@user/repositories/IUsersRepository'
import { sign } from 'jsonwebtoken'

export type CreateULoginDTO = {
  email: string
  password: string
}

type IResonse = {
  user: User
  token: string
}

@injectable()
export class CreateLoginUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) { }

  async execute({ email, password }: CreateULoginDTO): Promise<IResonse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) {
      throw new AppError('Incorrect email/password combination', 401)
    }
    const passwordConfirmed = await compare(password, user.password)
    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password combination', 401)
    }
    const token = sign({}, jwtConfig.jwt.secret, {
      subject: user.id,
      expiresIn: jwtConfig.jwt.expiresIn,
    })
    return {
      user,
      token,
    }
  }
}
