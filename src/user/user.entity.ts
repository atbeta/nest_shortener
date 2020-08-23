import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({type: 'text', unique: true})
  username: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  toResponseObject() {
    const { id, created, username, email } = this
    return { id, created, username, email }
  }
}
