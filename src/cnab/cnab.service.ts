import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { readFileSync } from 'fs';

@Injectable()
export class CnabService {
  constructor(private prisma: PrismaService) {}

  async processCnabFile(filePath: string) {
    if (!filePath) {
      throw new Error('Caminho do arquivo inválido.');
    }

    const fileContent = readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n').filter((line) => line.trim() !== ''); 

    for (const line of lines) {
      const cleanedLine = line.replace('\r', '').replace('\n', '');
      if (cleanedLine.length < 80) {
        console.warn(`Linha inválida (tamanho menor que 80): ${cleanedLine}`);
        continue; 
      }

     
      const type = parseInt(cleanedLine.substring(0, 1), 10); 
      const date = new Date(
        `${cleanedLine.substring(1, 5)}-${cleanedLine.substring(5, 7)}-${cleanedLine.substring(7, 9)}`, 
      );
      const amount = parseFloat(cleanedLine.substring(9, 19)) / 100; 
      const bi= cleanedLine.substring(19, 30); 
      const card = cleanedLine.substring(30, 42); 
      const time = cleanedLine.substring(42, 48); 
      const storeOwner = cleanedLine.substring(48, 62).trim(); 
      const storeName = cleanedLine.substring(62, 81).trim(); 

      try {
        await this.prisma.transaction.create({
          data: {
            type,
            date,
            amount,
            bi,
            card,
            time,
            storeOwner,
            storeName,
          },
        });
        console.log(`Transação salva com sucesso: ${storeName}`);
      } catch (error) {
        console.error(`Erro ao salvar transação: ${error.message}`);
      }
    }
  }
}