import { Module } from '@nestjs/common';
import { CuestionariosService } from './cuestionarios.service';
import { CuestionariosController } from './cuestionarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { Cuestionario } from '../entities/cuestionario.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cuestionario]), NestjsFormDataModule],
    controllers: [CuestionariosController],
    providers: [CuestionariosService],
    exports: [TypeOrmModule]
})
export class CuestionariosModule { }