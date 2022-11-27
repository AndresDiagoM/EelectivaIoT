import { Module } from '@nestjs/common';
import { PlayerControllerImpl } from './players/controllers/playerImpl.controller';
import { PlayerServiceImpl } from './players/domain/services/playerImpl.service';

@Module({
  imports: [],
  controllers: [PlayerControllerImpl],
  providers: [
    {
      provide: 'PlayerService',
      useClass: PlayerServiceImpl
    }
  ],
})
export class AppModule {}
