import { Player } from '../models/player.model';
import { PlayerService } from './player.service';
export declare class PlayerServiceImpl implements PlayerService {
    private player;
    list(): Player[];
    create(jugador: Player): Player;
    update(id: number, jugador: Player): Player;
    delete(id: number): boolean;
    updateAge(id: number, edad: number): Player;
}
