import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { PlayerService } from '../domain/services/player.service';

import {Player} from '../domain/models/player.model';

const errReturn = (e: Error, message: string) => {
   return {
      message: message,
      error: e
   }
}

@Controller()
export class PlayerController {
constructor(private readonly jugadorService: PlayerService) { }

   @Get()
   getHello() {
      try{
         return this.jugadorService.listar();
      }
      catch(e){
         return errReturn(e, "Error al listar jugadores");
      }
   }

   @Post()
   crear(@Body() datos: Player) {
      try{
         return this.jugadorService.crear(datos);
      }
      catch(e){
         return errReturn(e, "Error al crear jugador");
      }
   }

   @Put(":id")
   modificar(@Body() datos: Player, @Param('id') id: number) {
      try{
         return this.jugadorService.modificar(id, datos);
      }
      catch(e){
         return errReturn(e, "Error al modificar jugador");
      }
   }

   @Delete(":id")
   eliminar(@Param('id') id: number) {
      try{
         return this.jugadorService.eliminar(id);
      }
      catch(e){
         return errReturn(e, "Error al eliminar jugador");
      }
   }

   @Patch(":id/edad/:edad")
   cambiarEdad(@Param('id') id: number, @Param('edad') edad: number) {
      try{
         return this.jugadorService.cambiarEdad(id, edad);
      }
      catch(e){
         return errReturn(e, "Error al modificar edad del jugador");
      }
   }
}
