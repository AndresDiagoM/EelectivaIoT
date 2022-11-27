import { Player } from '../domain/models/player.model';
export declare class PlayerService {
    private player;
    listar(): Player[];
    crear(jugador: Player): Player;
    modificar(id: number, jugador: Player): Player;
    eliminar(id: number): boolean;
    cambiarEdad(id: number, edad: number): Player;
}
