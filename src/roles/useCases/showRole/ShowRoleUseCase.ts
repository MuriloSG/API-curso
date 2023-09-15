/* eslint-disable prettier/prettier */
import { Role } from '@roles/entities/Role'
import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/errors/AppError'
import { injectable, inject } from 'tsyringe'
type ShowRoleParams = {
  id: string
}

@injectable()
export class ShowRoleUseCase {
  constructor(@inject('RolesRepository') private rolesRepository: IRolesRepository) { }

  async execute({ id }: ShowRoleParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id)
    if (!role) {
      throw new AppError('Role already exist', 404)
    }
    return role
  }
}
