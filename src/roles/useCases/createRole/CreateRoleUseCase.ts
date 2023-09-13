/* eslint-disable prettier/prettier */
import { Role } from '@roles/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'

type CreateRoleDTO = {
  name: string
}

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) { }

  async execute({ name }: CreateRoleDTO): Promise<Role> {
    const roleAlreadExists = await this.rolesRepository.findByName(name)
    if (roleAlreadExists) {
      throw new AppError('Role already exist')
    }
    return this.rolesRepository.create({ name })
  }
}
