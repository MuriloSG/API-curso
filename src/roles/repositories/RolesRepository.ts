import { Role } from '@roles/entities/Role'

type CreateRoleDTO = {
  name: string
}
export class RolesRepository {
  private roles: Role[]
  private static INSTACE: RolesRepository

  private constructor() {
    this.roles = []
  }

  public static getInstance(): RolesRepository {
    if (!RolesRepository.INSTACE) {
      RolesRepository.INSTACE = new RolesRepository()
    }
    return RolesRepository.INSTACE
  }
  create({ name }: CreateRoleDTO) {
    const role = new Role()
    Object.assign(role, {
      name,
      created_at: new Date(),
    })

    this.roles.push(role)
    return role
  }

  findAll(): Role[] {
    return this.roles
  }

  findByName(name: string): Role | undefined {
    return this.roles.find(role => role.name == name)
  }
}
