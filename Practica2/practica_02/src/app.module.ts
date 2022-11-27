import { Module } from '@nestjs/common';
import { PersonController } from './controllers/persona.controller
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [PersonController],
  providers: [AppService],
})
export class AppModule {}
