"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CepService = void 0;
const common_1 = require("@nestjs/common");
let CepService = class CepService {
    async buscarCep(cep) {
        const cepLimpo = cep.replace(/\D/g, '');
        if (cepLimpo.length !== 8) {
            throw new common_1.HttpException('CEP inválido', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            if (!response.ok) {
                throw new common_1.HttpException('Erro ao buscar CEP', common_1.HttpStatus.BAD_REQUEST);
            }
            const data = await response.json();
            if (data.erro) {
                throw new common_1.HttpException('CEP não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            return data;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Erro ao consultar ViaCEP', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.CepService = CepService;
exports.CepService = CepService = __decorate([
    (0, common_1.Injectable)()
], CepService);
//# sourceMappingURL=cep.service.js.map