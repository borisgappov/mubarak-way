import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMetadata } from '../entities/user-metadata.entity';
import { ViewHistory } from '../entities/view-history.entity';

@Injectable()
export class UserMetadataService {
  constructor(
    @InjectRepository(UserMetadata)
    private userMetadataRepository: Repository<UserMetadata>,
    @InjectRepository(ViewHistory)
    private viewHistoryRepository: Repository<ViewHistory>,
  ) {}

  async getMetadata(
    userId: number,
    goalId?: string,
    duaId?: string,
    allahNameId?: string,
  ): Promise<UserMetadata | null> {
    const where: any = { userId };
    if (goalId) where.goalId = goalId;
    if (duaId) where.duaId = duaId;
    if (allahNameId) where.allahNameId = allahNameId;

    return this.userMetadataRepository.findOne({ where });
  }

  async updateLastVisited(
    userId: number,
    goalId?: string,
    duaId?: string,
    allahNameId?: string,
  ): Promise<UserMetadata> {
    let metadata = await this.getMetadata(userId, goalId, duaId, allahNameId);

    if (!metadata) {
      metadata = this.userMetadataRepository.create({
        userId,
        goalId: goalId || null,
        duaId: duaId || null,
        allahNameId: allahNameId || null,
        lastVisitedAt: new Date(),
        viewCount: 1,
      });
    } else {
      metadata.lastVisitedAt = new Date();
      metadata.viewCount += 1;
    }

    // Сохраняем историю просмотров
    await this.viewHistoryRepository.save({
      userId,
      goalId: goalId || null,
      duaId: duaId || null,
      allahNameId: allahNameId || null,
    });

    return this.userMetadataRepository.save(metadata);
  }

  async updateNotes(
    userId: number,
    notes: string,
    goalId?: string,
    duaId?: string,
    allahNameId?: string,
  ): Promise<UserMetadata> {
    let metadata = await this.getMetadata(userId, goalId, duaId, allahNameId);

    if (!metadata) {
      metadata = this.userMetadataRepository.create({
        userId,
        goalId: goalId || null,
        duaId: duaId || null,
        allahNameId: allahNameId || null,
        notes,
      });
    } else {
      metadata.notes = notes;
    }

    return this.userMetadataRepository.save(metadata);
  }

  async getViewHistory(
    userId: number,
    startDate?: Date,
    endDate?: Date,
  ): Promise<ViewHistory[]> {
    const query = this.viewHistoryRepository
      .createQueryBuilder('history')
      .where('history.userId = :userId', { userId })
      .orderBy('history.createdAt', 'DESC');

    if (startDate) {
      query.andWhere('history.createdAt >= :startDate', { startDate });
    }
    if (endDate) {
      query.andWhere('history.createdAt <= :endDate', { endDate });
    }

    return query.getMany();
  }

  async getStudyTime(
    userId: number,
    startDate?: Date,
    endDate?: Date,
  ): Promise<number> {
    const history = await this.getViewHistory(userId, startDate, endDate);
    if (history.length < 2) return 0;

    // Сортируем по времени
    const sorted = history.sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    );

    let totalTime = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
      const timeDiff =
        sorted[i + 1].createdAt.getTime() - sorted[i].createdAt.getTime();
      // Считаем только если разница меньше 2 часов (7200000 мс)
      if (timeDiff > 0 && timeDiff < 7200000) {
        totalTime += timeDiff;
      }
    }

    return Math.floor(totalTime / 1000 / 60 / 60); // Возвращаем в часах
  }

  async getActivityByDays(
    userId: number,
    days: number = 30,
    startDate?: Date,
    endDate?: Date,
  ): Promise<any> {
    let start: Date;
    let end: Date;

    if (startDate && endDate) {
      // Используем переданные даты
      start = new Date(startDate);
      end = new Date(endDate);
    } else {
      // Вычисляем даты на основе количества дней
      end = new Date();
      end.setHours(23, 59, 59, 999);
      start = new Date(end);
      start.setDate(start.getDate() - days);
      start.setHours(0, 0, 0, 0);
    }

    const history = await this.getViewHistory(userId, start, end);

    const activity: { [key: string]: number } = {};
    history.forEach((item) => {
      const date = item.createdAt.toISOString().split('T')[0];
      activity[date] = (activity[date] || 0) + 1;
    });

    return activity;
  }
}

