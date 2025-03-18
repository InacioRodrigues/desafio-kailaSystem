import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CnabService } from './cnab.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('cnab')
export class CnabController {
  constructor(private readonly cnabService: CnabService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', 
        filename: (req, file, callback) => {
          const filename = `${Date.now()}-${file.originalname}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('Arquivo recebido:', file); 
    if (!file) {
      throw new Error('Nenhum arquivo foi enviado.');
    }
    await this.cnabService.processCnabFile(file.path); 
    return { message: 'File uploaded and processed successfully' };
  }
}