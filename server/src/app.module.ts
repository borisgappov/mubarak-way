import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ProxyModule } from './proxy/proxy.module';
import { UserMetadataModule } from './user-metadata/user-metadata.module';
import { GoalNoteModule } from './goal-notes/goal-note.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    ProxyModule,
    UserMetadataModule,
    GoalNoteModule,
  ],
})
export class AppModule {}

