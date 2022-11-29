import { Injectable } from '@nestjs/common';
import { Player } from '../models/player.model';
import { PlayerService } from './player.service';

//MongoDB
import { PlayerEntity } from '../entities/player.entity';
import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlayerServiceImpl implements PlayerService {

  /*private player: Player[] = [{
    name: 'Leo',
    lastName: 'Messi',
    age: 35,
    team: 'Argentina'
  }]*/

  constructor(
    @InjectRepository(PlayerEntity)
    private readonly repository: MongoRepository<PlayerEntity>,
  ) {}

  public async list(): Promise<PlayerEntity[]> {
    return await this.repository.find();
  }

  public async create(playerData: PlayerEntity): Promise<InsertResult> {
    const newPlayer = await this.repository.insert(playerData);
    return newPlayer;
  }

  public async update(
    id: number,
    playerData: PlayerEntity,
  ): Promise<UpdateResult> {
    const updatedPlayer = await this.repository.update(id, playerData);
    return updatedPlayer;
  }

  public async delete(id: number): Promise<boolean> {
    const deleteResult = await this.repository.delete(id);
    return deleteResult.affected > 0;
  }

  public async updateAge(id: number, edad: number): Promise<UpdateResult> {
    const updatedPlayer = await this.repository.update(id, { age: edad });
    return updatedPlayer;
  }

}