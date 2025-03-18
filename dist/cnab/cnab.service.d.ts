import { PrismaService } from 'src/database/prisma.service';
export declare class CnabService {
    private prisma;
    constructor(prisma: PrismaService);
    processCnabFile(filePath: string): Promise<void>;
}
