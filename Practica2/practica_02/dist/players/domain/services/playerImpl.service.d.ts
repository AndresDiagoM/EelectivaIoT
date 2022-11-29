import { PlayerService } from './player.service';
import { PlayerEntity } from '../entities/player.entity';
import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';
export declare class PlayerServiceImpl implements PlayerService {
    private readonly repository;
    constructor(repository: MongoRepository<PlayerEntity>);
    list(): Promise<PlayerEntity[]>;
    create(playerData: PlayerEntity): Promise<InsertResult>;
    update(id: number, playerData: PlayerEntity): Promise<UpdateResult>;
    delete(id: number): Promise<boolean>;
    updateAge(id: number, edad: number): Promise<UpdateResult>;
}
