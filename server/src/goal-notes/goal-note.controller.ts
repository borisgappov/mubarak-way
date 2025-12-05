import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { GoalNoteService } from './goal-note.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../decorators/user.decorator';

@Controller('api/v1/goal-notes')
@UseGuards(JwtAuthGuard)
export class GoalNoteController {
  constructor(private readonly goalNoteService: GoalNoteService) {}

  @Post()
  async create(
    @CurrentUser() user: any,
    @Body('goalId') goalId: string,
    @Body('content') content: string,
  ) {
    return this.goalNoteService.create(user.userId, goalId, content);
  }

  @Get()
  async findAll(
    @CurrentUser() user: any,
    @Query('goalId') goalId?: string,
  ) {
    return this.goalNoteService.findAll(user.userId, goalId);
  }

  @Get(':id')
  async findOne(
    @CurrentUser() user: any,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.goalNoteService.findOne(id, user.userId);
  }

  @Put(':id')
  async update(
    @CurrentUser() user: any,
    @Param('id', ParseIntPipe) id: number,
    @Body('content') content: string,
  ) {
    return this.goalNoteService.update(id, user.userId, content);
  }

  @Delete(':id')
  async remove(
    @CurrentUser() user: any,
    @Param('id', ParseIntPipe) id: number,
  ) {
    await this.goalNoteService.remove(id, user.userId);
    return { message: 'Note deleted successfully' };
  }
}

