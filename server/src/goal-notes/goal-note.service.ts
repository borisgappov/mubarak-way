import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoalNote } from '../entities/goal-note.entity';

@Injectable()
export class GoalNoteService {
  constructor(
    @InjectRepository(GoalNote)
    private goalNoteRepository: Repository<GoalNote>,
  ) {}

  async create(
    userId: number,
    goalId: string,
    content: string,
  ): Promise<GoalNote> {
    const note = this.goalNoteRepository.create({
      userId,
      goalId,
      content,
    });
    return this.goalNoteRepository.save(note);
  }

  async findAll(userId: number, goalId?: string): Promise<GoalNote[]> {
    const where: any = { userId };
    if (goalId) {
      where.goalId = goalId;
    }
    return this.goalNoteRepository.find({
      where,
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number, userId: number): Promise<GoalNote> {
    const note = await this.goalNoteRepository.findOne({
      where: { id, userId },
    });

    if (!note) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }

    return note;
  }

  async update(
    id: number,
    userId: number,
    content: string,
  ): Promise<GoalNote> {
    const note = await this.findOne(id, userId);
    note.content = content;
    return this.goalNoteRepository.save(note);
  }

  async remove(id: number, userId: number): Promise<void> {
    const note = await this.findOne(id, userId);
    await this.goalNoteRepository.remove(note);
  }
}

