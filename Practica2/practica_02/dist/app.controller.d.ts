import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    private persona;
    getHello(): string;
    modificar(nombre: string): string;
}
