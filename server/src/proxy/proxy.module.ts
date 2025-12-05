import { Module } from '@nestjs/common';
import { ProxyService } from './proxy.service';
import { ProxyController } from './proxy.controller';
import { UserMetadataModule } from '../user-metadata/user-metadata.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [UserMetadataModule, AuthModule],
  controllers: [ProxyController],
  providers: [ProxyService],
  exports: [ProxyService],
})
export class ProxyModule {}

