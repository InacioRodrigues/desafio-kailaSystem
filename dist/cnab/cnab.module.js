"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CnabModule = void 0;
const common_1 = require("@nestjs/common");
const cnab_service_1 = require("./cnab.service");
const cnab_controller_1 = require("./cnab.controller");
const prisma_service_1 = require("../database/prisma.service");
let CnabModule = class CnabModule {
};
exports.CnabModule = CnabModule;
exports.CnabModule = CnabModule = __decorate([
    (0, common_1.Module)({
        controllers: [cnab_controller_1.CnabController],
        providers: [cnab_service_1.CnabService, prisma_service_1.PrismaService],
    })
], CnabModule);
//# sourceMappingURL=cnab.module.js.map