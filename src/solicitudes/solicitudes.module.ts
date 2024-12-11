import { Module } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { SolicitudesController } from './solicitudes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitud } from '../entities/solicitud.entity';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { CuestionariosModule } from 'src/cuestionarios/cuestionarios.module';
import { RespuestasModule } from 'src/respuestas/respuestas.module';

@Module({
    imports: [TypeOrmModule.forFeature([Solicitud]), NestjsFormDataModule, CuestionariosModule, RespuestasModule],
    controllers: [SolicitudesController],
    providers: [SolicitudesService]
})
export class SolicitudesModule { }