import { AppService } from '../services/app.service';
interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    private personas;
    private personas2;
    getHello(params: any): Persona[];
    crear(datos: Persona): Persona;
    modificar(datos: Persona, id: number): Persona | string;
    eliminar(id: number): boolean;
    partialUpdate(params: any, body: any): string;
}
export {};
