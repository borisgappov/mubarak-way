import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Index,
} from 'typeorm';

@Entity('view_history')
@Index(['userId', 'createdAt'])
export class ViewHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  userId: number;

  @Column({ type: 'text', nullable: true })
  goalId: string | null;

  @Column({ type: 'text', nullable: true })
  duaId: string | null;

  @Column({ type: 'integer', nullable: true })
  allahNameId: string | null;

  @CreateDateColumn()
  createdAt: Date;
}

