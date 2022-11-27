import { Player } from '../domain/models/player.model';
export interface PlayerController {
    listPlayers(): any;
    create(datos: Player): any;
    update(datos: Player, id: number): any;
    delete(id: number): any;
    updateAge(id: number, edad: number): any;
}
