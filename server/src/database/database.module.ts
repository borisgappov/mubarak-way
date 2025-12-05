import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { UserMetadata } from '../entities/user-metadata.entity';
import { ViewHistory } from '../entities/view-history.entity';
import { GoalNote } from '../entities/goal-note.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'sqlite',
        database: configService.get<string>('DATABASE_PATH', 'mubarakway.db'),
        entities: [UserMetadata, ViewHistory, GoalNote],
        synchronize: configService.get<string>('NODE_ENV') !== 'production',
        logging: configService.get<string>('NODE_ENV') === 'development',
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([UserMetadata, ViewHistory, GoalNote]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

