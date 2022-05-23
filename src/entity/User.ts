import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Todo } from "./Todo";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ unique: true, nullable: false })
  password: string;

  @Column()
  verificationToken: string;

  @Column()
  verificationTokenExpiredAt: Date;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];

  @Column()
  createdAt: Date;

  @Column()
  updateAt: Date;
}
