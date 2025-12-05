import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMetadata } from '../entities/user-metadata.entity';
import { ViewHistory } from '../entities/view-history.entity';
import { UserMetadataService } from './user-metadata.service';
import { StatisticsController } from './statistics.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserMetadata, ViewHistory]),
    AuthModule,
  ],
  controllers: [StatisticsController],
  providers: [UserMetadataService],
  exports: [UserMetadataService],
})
export class UserMetadataModule {}

