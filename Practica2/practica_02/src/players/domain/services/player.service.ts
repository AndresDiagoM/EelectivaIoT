import { Injectable } from '@nestjs/common';
// Importamos el modelo de jugador
import { Player } from '../models/player.model';

@Injectable()
export class PlayerService {

   // Como no hay base de datos aun empleamos una variable en memoria:
   private player: Player[] = [{
      name: 'Leo',
      lastName: 'Messi',
      age: 35,
      team: 'Argentina'
   }]

   /**
    * Método para obtener todos los jugadores
    */
   public listar() : Player[] {
      return this.player
   }

   /**
    * Método para crear un jugador
    */
   public crear(jugador: Player): Player {
      this.player.push(jugador);
      return jugador;
   }

   /**
    * Método para modificar un jugador
    */
   public modificar(id: number, jugador: Player): Player {
         this.player[id] = jugador
         return this.player[id];
   }

   /**
    * Método para eliminar un jugador
    * Debido a que usamos un filtro, para validar si se elimina el jugador, 
    * primero se determina cuantos elementos hay en el arreglo y luego se hace una comparación.
    */
   public eliminar(id: number): boolean {
      const totalJugadoresAntes = this.player.length;
      this.player = this.player.filter((val, index) => index != id);
      if(totalJugadoresAntes == this.player.length){
         return false;
      }
      else{
         return true;
      }
   }

   /**
    * Método para modificar la edad de un jugador
    */
   public cambiarEdad(id: number, edad: number): Player {
      this.player[id].age = edad;
      return this.player[id];
   }

}
