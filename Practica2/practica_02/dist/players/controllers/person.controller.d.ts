import { PersonService } from '../domain/services/persona.service';
interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
}
export declare class PersonController {
    private readonly appService;
    constructor(appService: PersonService);
    private personas;
    private personas2;
    getHello(params: any): Persona[];
    crear(datos: Persona): Persona;
    modificar(datos: Persona, id: number): Persona | string;
    eliminar(id: number): boolean;
    partialUpdate(params: any, body: any): string;
}
export {};
