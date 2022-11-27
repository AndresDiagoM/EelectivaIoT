import { PlayerServiceImpl } from '../domain/services/playerImpl.service';
import { Player } from '../domain/models/player.model';
export declare class PlayerControllerImpl {
    private readonly jugadorService;
    constructor(jugadorService: PlayerServiceImpl);
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
export interface PlayerController {
    listPlayers(): any;
    create(datos: Player): any;
    update(datos: Player, id: number): any;
    delete(id: number): any;
    updateAge(id: number, edad: number): any;
}
