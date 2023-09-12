import { DataSource } from 'typeorm'
import { CreateRolesTable1694538345489 } from './migrations/1694538345489-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1694538345489],
})
