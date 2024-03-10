import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoderController } from './coder/coder.controller';

@Module({
  imports: [],
  controllers: [AppController, CoderController],
  providers: [AppService],
})
export class AppModule {}
