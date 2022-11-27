"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerController = void 0;
const common_1 = require("@nestjs/common");
const player_service_1 = require("../domain/services/player.service");
const player_model_1 = require("../domain/models/player.model");
const errReturn = (e, message) => {
    return {
        message: message,
        error: e
    };
};
let PlayerController = class PlayerController {
    constructor(jugadorService) {
        this.jugadorService = jugadorService;
    }
    getHello() {
        try {
            return this.jugadorService.listar();
        }
        catch (e) {
            return errReturn(e, "Error al listar jugadores");
        }
    }
    crear(datos) {
        try {
            return this.jugadorService.crear(datos);
        }
        catch (e) {
            return errReturn(e, "Error al crear jugador");
        }
    }
    modificar(datos, id) {
        try {
            return this.jugadorService.modificar(id, datos);
        }
        catch (e) {
            return errReturn(e, "Error al modificar jugador");
        }
    }
    eliminar(id) {
        try {
            return this.jugadorService.eliminar(id);
        }
        catch (e) {
            return errReturn(e, "Error al eliminar jugador");
        }
    }
    cambiarEdad(id, edad) {
        try {
            return this.jugadorService.cambiarEdad(id, edad);
        }
        catch (e) {
            return errReturn(e, "Error al modificar edad del jugador");
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [player_model_1.Player]),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [player_model_1.Player, Number]),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "modificar", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Patch)(":id/edad/:edad"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('edad')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "cambiarEdad", null);
PlayerController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [player_service_1.PlayerService])
], PlayerController);
exports.PlayerController = PlayerController;
//# sourceMappingURL=player.controller.js.map