import { CnabService } from './cnab.service';
export declare class CnabController {
    private readonly cnabService;
    constructor(cnabService: CnabService);
    uploadFile(file: Express.Multer.File): Promise<{
        message: string;
    }>;
}
