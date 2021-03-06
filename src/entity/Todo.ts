import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  deadline: string;

  @ManyToOne(() => User, (user) => user.todos, { cascade: true })
  user: User;

  @Column("timestamptz", { default: null })
  completedAt: Date | null = null;

  @Column("timestamptz", { default: null })
  archivedAt: Date | null = null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
