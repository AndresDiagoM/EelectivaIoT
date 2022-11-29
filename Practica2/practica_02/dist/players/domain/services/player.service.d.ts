import { InsertResult, UpdateResult } from 'typeorm';
import { PlayerEntity } from '../entities/player.entity';
export interface PlayerService {
    list(): Promise<PlayerEntity[]>;
    create(player: PlayerEntity): Promise<InsertResult>;
    update(id: number, playerData: PlayerEntity): Promise<UpdateResult>;
    delete(id: number): Promise<boolean>;
    updateAge(id: number, edad: number): Promise<UpdateResult>;
}
