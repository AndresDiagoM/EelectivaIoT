import { Player } from "../models/player.model";
export interface PlayerService {
    list(): Player[];
    create(player: Player): Player;
    update(id: number, player: Player): Player;
    delete(id: number): boolean;
    updateAge(id: number, age: number): Player;
}
