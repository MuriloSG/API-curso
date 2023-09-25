import { DataSource } from 'typeorm'
import { CreateRolesTable1694538345489 } from './migrations/1694538345489-CreateRolesTable'
import { Role } from '@roles/entities/Role'
import { CreateUsersTable1694817477694 } from './migrations/1694817477694-CreateUsersTable'
import { AddRoleIdToUsersTable1695035247663 } from './migrations/1695035247663-AddRoleIdToUsersTable'
import { User } from '@user/entities/User'
import { CreateRefreshTokenTable1695684654486 } from './migrations/1695684654486-CreateRefreshTokenTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1694538345489,
    CreateUsersTable1694817477694,
    AddRoleIdToUsersTable1695035247663,
    CreateRefreshTokenTable1695684654486,
  ],
})
