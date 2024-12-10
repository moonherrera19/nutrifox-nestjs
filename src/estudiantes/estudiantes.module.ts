import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from '../entities/estudiante.entity';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { UsuariosModule } from '../usuarios/usuarios.module'; // Importar UsuariosModule

@Module({
    imports: [
        TypeOrmModule.forFeature([Estudiante]),
        NestjsFormDataModule,
        UsuariosModule,
    ],
    controllers: [EstudiantesController],
    providers: [EstudiantesService],
    exports: [EstudiantesService],
})
export class EstudiantesModule { }