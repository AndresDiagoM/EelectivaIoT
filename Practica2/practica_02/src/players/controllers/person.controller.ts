import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { PersonService } from '../domain/services/persona.service';

interface Persona {
  nombre: string,
  apellido: string,
  edad: number
}

@Controller()
export class PersonController {
  constructor(private readonly appService: PersonService) {}

  
  /*private persona = "Mundo";

  @Get()
  getHello(): string {
    return `Hola: ${this.persona}`
    //return `Hola: ${this.persona}`
  }

  @Post(':nombre')
  modificar(@Param('nombre') nombre: string): string {
      this.persona = nombre;
      return `Mensaje modificado: ${this.persona}`
  }*/

  //Experimente con las anotaciones @Put(), @Delete() y @Patch()


  private personas : Persona[] = [{
    nombre: "Leo",
    apellido: "Messi",
    edad: 35
  }]

  private personas2 : Persona[] = [{
    nombre: "Andres",
    apellido: "Diago",
    edad: 22
  }]

  @Get(':id/:size')
  getHello(@Param() params): Persona[] {
    if(params.id==""){
      return this.personas;
    }else{
      return this.personas2;
    }
  }

  @Post() //enviar datos como un JSON
  crear(@Body() datos: Persona): Persona {
    this.personas.push(datos);
    return datos;
  }
  /*@Post()
  createPerson(
    @Body('nombre') nombre: string, 
    @Body('edad') edad: string
  ) {
    return `Creo la persona ${nombre} con edad ${edad}.`;
  }*/

  @Put(":id")
  modificar(@Body() datos: Persona, @Param('id') id: number): Persona | string {
    try{
    this.personas[id] = datos
    return this.personas[id];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${id}`
    }
  }

  @Delete(":id")
  //@HttpCode(HttpStatus.NO_CONTENT) //n código 204 que indica éxito pero que el servidor no entrega contenido en la respuesta
  eliminar(@Param('id') id: number){
    try{
      this.personas = this.personas.filter((val, index) => index != id);
      return true;
    }
    catch{
      return false;
    }
  }

  /*@Patch(":id/:edad")
  cambiarEdad(@Param('id') id: number, @Param('edad') edad: number): Persona | string{
    try{
      this.personas[id].edad = edad;
      return this.personas[id];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${id}`
    }
  }*/
  @Patch(':id/:edad')
  partialUpdate(@Param() params, @Body() body) {
    return `Actualización parcial del ítem ${params.id}, edad: ${params.edad}`;
  }

}