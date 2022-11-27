"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
let PlayerService = class PlayerService {
    constructor() {
        this.player = [{
                name: 'Leo',
                lastName: 'Messi',
                age: 35,
                team: 'Argentina'
            }];
    }
    listar() {
        return this.player;
    }
    crear(jugador) {
        this.player.push(jugador);
        return jugador;
    }
    modificar(id, jugador) {
        this.player[id] = jugador;
        return this.player[id];
    }
    eliminar(id) {
        const totalJugadoresAntes = this.player.length;
        this.player = this.player.filter((val, index) => index != id);
        if (totalJugadoresAntes == this.player.length) {
            return false;
        }
        else {
            return true;
        }
    }
    cambiarEdad(id, edad) {
        this.player[id].age = edad;
        return this.player[id];
    }
};
PlayerService = __decorate([
    (0, common_1.Injectable)()
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map