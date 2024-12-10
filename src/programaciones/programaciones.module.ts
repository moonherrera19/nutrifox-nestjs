import { Module } from '@nestjs/common';
import { ProgramacionesService } from './programaciones.service';
import { ProgramacionesController } from './programaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programacion } from '../entities/programacion.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Programacion])],
    controllers: [ProgramacionesController],
    providers: [ProgramacionesService]
})
export class ProgramacionesModule { }