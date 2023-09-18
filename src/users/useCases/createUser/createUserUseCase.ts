/* eslint-disable prettier/prettier */
import { inject, injectable } from 'tsyringe'
import { hash } from 'bcryptjs'
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/errors/AppError'
import { IUsersRepository } from '@user/repositories/IUsersRepository'
import { User } from '@user/entities/User'

export type CreateUserDTO = {
  name: string
  email: string
  password: string
  isAdim: boolean
  roleId: string
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('RolesRepository') private rolesRepository: IRolesRepository,
  ) { }

  async execute({
    name,
    email,
    password,
    isAdim,
    roleId,
  }: CreateUserDTO): Promise<User> {
    const emailExists = await this.usersRepository.findByEmail(email)
    if (emailExists) {
      throw new AppError('Email address already used')
    }
    const role = await this.rolesRepository.findById(roleId)
    if (!role) {
      throw new AppError('Role not found', 404)
    }
    const hashedPassword = await hash(password, 10)
    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      isAdim,
      role,
    })
    return user
  }
}
