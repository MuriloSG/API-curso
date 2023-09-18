import { DataSource } from 'typeorm'
import { CreateRolesTable1694538345489 } from './migrations/1694538345489-CreateRolesTable'
import { Role } from '@roles/entities/Role'
import { CreateUsersTable1694817477694 } from './migrations/1694817477694-CreateUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1694538345489, CreateUsersTable1694817477694],
})
