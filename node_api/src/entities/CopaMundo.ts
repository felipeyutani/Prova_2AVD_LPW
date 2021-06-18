import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from 'typeorm'

import { v4 as uuid } from 'uuid' // identificador universal unico

@Entity('copamundo')
class CopaMundo {

  @PrimaryColumn()
  id: string;

  @Column()
  ano: string;

  @Column()
  sede: string;

  @Column()
  campeao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { CopaMundo }

