import { PlayerService } from '../services/player.service';
import { Player } from '../models/player.model';
export declare class PlayerController {
    private readonly jugadorService;
    constructor(jugadorService: PlayerService);
    getHello(): Player[] | {
        message: string;
        error: Error;
    };
    crear(datos: Player): Player | {
        message: string;
        error: Error;
    };
    modificar(datos: Player, id: number): Player | {
        message: string;
        error: Error;
    };
    eliminar(id: number): boolean | {
        message: string;
        error: Error;
    };
    cambiarEdad(id: number, edad: number): Player | {
        message: string;
        error: Error;
    };
}
