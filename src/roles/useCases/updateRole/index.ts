import { RolesRepository } from '@roles/repositories/RolesRepository'
import { UpdateRoleUseCase } from './updateRoleUseCase'
import { UpdateRoleController } from './updateRoleController'

const rolesRepository = RolesRepository.getInstance()
const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository)
export const updateRolesController = new UpdateRoleController(updateRoleUseCase)
