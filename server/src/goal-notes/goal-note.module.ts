import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoalNote } from '../entities/goal-note.entity';
import { GoalNoteService } from './goal-note.service';
import { GoalNoteController } from './goal-note.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([GoalNote]), AuthModule],
  controllers: [GoalNoteController],
  providers: [GoalNoteService],
  exports: [GoalNoteService],
})
export class GoalNoteModule {}

