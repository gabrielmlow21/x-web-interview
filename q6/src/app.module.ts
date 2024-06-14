import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { UtilsService } from './utils/utils.service';

@Module({
  imports: [],
  controllers: [AppController, ApiController],
  providers: [AppService, UtilsService],
})
export class AppModule {}
