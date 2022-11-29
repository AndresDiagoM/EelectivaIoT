import { PlayerService } from '../domain/services/player.service';
import { PlayerEntity } from 'src/players/domain/entities/player.entity';
import { PlayerController } from './player.controller';
export declare class PlayerControllerImpl implements PlayerController {
    private readonly jugadorService;
    constructor(jugadorService: PlayerService);
    listPlayers(): Promise<PlayerEntity[]> | {
        message: string;
        error: Error;
    };
    create(datos: PlayerEntity): {
        message: string;
        error: Error;
    } | Promise<import("typeorm").InsertResult>;
    update(datos: PlayerEntity, id: number): {
        message: string;
        error: Error;
    } | Promise<import("typeorm").UpdateResult>;
    delete(id: number): {
        message: string;
        error: Error;
    } | Promise<boolean>;
    updateAge(id: number, edad: number): {
        message: string;
        error: Error;
    } | Promise<import("typeorm").UpdateResult>;
}
