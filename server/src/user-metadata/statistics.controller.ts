import {
  Controller,
  Get,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserMetadataService } from './user-metadata.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../decorators/user.decorator';

@Controller('api/v1/statistics')
@UseGuards(JwtAuthGuard)
export class StatisticsController {
  constructor(private readonly userMetadataService: UserMetadataService) {}

  @Get()
  async getStatistics(
    @CurrentUser() user: any,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    // Если endDate не задан, используем текущую дату
    let end: Date;
    if (endDate) {
      end = new Date(endDate);
      // Устанавливаем время на конец дня (23:59:59.999)
      end.setHours(23, 59, 59, 999);
    } else {
      end = new Date();
      // Устанавливаем время на конец дня
      end.setHours(23, 59, 59, 999);
    }

    // Если startDate не задан, используем endDate минус 30 дней
    let start: Date;
    if (startDate) {
      start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
    } else {
      start = new Date(end);
      start.setDate(start.getDate() - 30);
      start.setHours(0, 0, 0, 0);
    }

    // Вычисляем количество дней между startDate и endDate
    const daysCount = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    // Получаем все необходимые данные параллельно
    const [totalStudyHours, viewHistory, activityByDay] = await Promise.all([
      this.userMetadataService.getStudyTime(user.userId, start, end),
      this.userMetadataService.getViewHistory(user.userId, start, end),
      this.userMetadataService.getActivityByDays(user.userId, daysCount, start, end),
    ]);

    // Подсчитываем уникальные цели, дуа и имена Аллаха
    const uniqueGoals = new Set<string>();
    const uniqueDuas = new Set<string>();
    const uniqueAllahNames = new Set<string>();

    viewHistory.forEach((item) => {
      if (item.goalId !== null) {
        uniqueGoals.add(item.goalId);
      }
      if (item.duaId !== null) {
        uniqueDuas.add(item.duaId);
      }
      if (item.allahNameId !== null) {
        uniqueAllahNames.add(item.allahNameId);
      }
    });

    // Преобразуем активность по дням в массив объектов
    const activityArray = Object.entries(activityByDay).map(([date, count]) => ({
      date,
      count,
    }));

    return {
      totalStudyHours,
      goalsVisited: uniqueGoals.size,
      duasViewed: uniqueDuas.size,
      allahNamesViewed: uniqueAllahNames.size,
      activityByDay: activityArray,
    };
  }
}

