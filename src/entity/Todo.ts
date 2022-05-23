import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Todo {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  title: string;

  @Column()
  description: string;

  @Column()
  deadline: string;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;

  @Column()
  createdAt: Date;

  @Column()
  updateAt: Date;
}
