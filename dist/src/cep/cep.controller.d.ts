import { CepService } from './cep.service';
export declare class CepController {
    private readonly cepService;
    constructor(cepService: CepService);
    buscarCep(cep: string): Promise<any>;
}
