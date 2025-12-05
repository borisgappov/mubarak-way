import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('user_metadata')
@Index(['userId', 'goalId'])
@Index(['userId', 'duaId'])
@Index(['userId', 'allahNameId'])
export class UserMetadata {
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

  @Column({ type: 'datetime', nullable: true })
  lastVisitedAt: Date | null;

  @Column({ type: 'integer', default: 0 })
  viewCount: number;

  @Column({ type: 'text', nullable: true })
  notes: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

