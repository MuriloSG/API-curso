/* eslint-disable prettier/prettier */
import { Role } from '@roles/entities/Role'
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/errors/AppError'
import { injectable, inject } from 'tsyringe'

type CreateRoleDTO = {
  name: string
}

@injectable()
export class CreateRoleUseCase {

  constructor(@inject('RolesRepository') private rolesRepository: IRolesRepository) { }

  async execute({ name }: CreateRoleDTO): Promise<Role> {
    const roleAlreadExists = await this.rolesRepository.findByName(name)
    if (roleAlreadExists) {
      throw new AppError('Role already exist')
    }
    return this.rolesRepository.create({ name })
  }
}
