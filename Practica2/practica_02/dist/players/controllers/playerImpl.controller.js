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
exports.PlayerControllerImpl = void 0;
const common_1 = require("@nestjs/common");
const player_model_1 = require("../domain/models/player.model");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const errReturn = (e, message) => {
    return {
        message: message,
        error: e
    };
};
let PlayerControllerImpl = class PlayerControllerImpl {
    constructor(jugadorService) {
        this.jugadorService = jugadorService;
    }
    listPlayers() {
        try {
            return this.jugadorService.list();
        }
        catch (e) {
            return errReturn(e, "Error al listar jugadores");
        }
    }
    create(datos) {
        try {
            return this.jugadorService.create(datos);
        }
        catch (e) {
            return errReturn(e, "Error al crear jugador");
        }
    }
    update(datos, id) {
        try {
            return this.jugadorService.update(id, datos);
        }
        catch (e) {
            return errReturn(e, "Error al modificar jugador");
        }
    }
    delete(id) {
        try {
            return this.jugadorService.delete(id);
        }
        catch (e) {
            return errReturn(e, "Error al eliminar jugador");
        }
    }
    updateAge(id, edad) {
        try {
            return this.jugadorService.updateAge(id, edad);
        }
        catch (e) {
            return errReturn(e, "Error al modificar edad del jugador");
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerControllerImpl.prototype, "listPlayers", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [player_model_1.Player]),
    __metadata("design:returntype", void 0)
], PlayerControllerImpl.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [player_model_1.Player, Number]),
    __metadata("design:returntype", void 0)
], PlayerControllerImpl.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlayerControllerImpl.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)(":id/edad/:edad"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('edad')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PlayerControllerImpl.prototype, "updateAge", null);
PlayerControllerImpl = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('PlayerService')),
    __metadata("design:paramtypes", [Object])
], PlayerControllerImpl);
exports.PlayerControllerImpl = PlayerControllerImpl;
//# sourceMappingURL=playerImpl.controller.js.map