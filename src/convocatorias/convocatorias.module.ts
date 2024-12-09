import { Module } from '@nestjs/common';
import { ConvocatoriasService } from './convocatorias.service';
import { ConvocatoriasController } from './convocatorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { Convocatoria } from '../entities/convocatoria.entity'; // Importa la entidad

@Module({
  imports: [TypeOrmModule.forFeature([Convocatoria]), NestjsFormDataModule], // Registra la entidad
  controllers: [ConvocatoriasController],
  providers: [ConvocatoriasService],
})
export class ConvocatoriasModule {}
