import { PlayerService } from '../domain/services/player.service';
import { Player } from '../domain/models/player.model';
import { PlayerController } from './player.controller';
export declare class PlayerControllerImpl implements PlayerController {
    private readonly jugadorService;
    constructor(jugadorService: PlayerService);
    listPlayers(): Player[] | {
        message: string;
        error: Error;
    };
    create(datos: Player): Player | {
        message: string;
        error: Error;
    };
    update(datos: Player, id: number): Player | {
        message: string;
        error: Error;
    };
    delete(id: number): boolean | {
        message: string;
        error: Error;
    };
    updateAge(id: number, edad: number): Player | {
        message: string;
        error: Error;
    };
}
