import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('roles')
export class Role {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
