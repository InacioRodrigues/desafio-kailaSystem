import { PrismaService } from 'src/database/prisma.service';
export declare class StoreController {
    private prisma;
    constructor(prisma: PrismaService);
    getStores(): Promise<{
        storeName: string;
        totalAmount: number | null;
    }[]>;
}
