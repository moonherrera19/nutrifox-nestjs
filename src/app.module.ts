import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../ormconfig';
import { AuthModule } from './auth/auth.module';

import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { ConvocatoriasModule } from './convocatorias/convocatorias.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { CobrosModule } from './cobros/cobros.module';
import { BeneficiariosModule } from './beneficiarios/beneficiarios.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { CuestionariosModule } from './cuestionarios/cuestionarios.module';
import { PreguntasModule } from './preguntas/preguntas.module';
import { RespuestasModule } from './respuestas/respuestas.module';
import { ProgramacionesModule } from './programaciones/programaciones.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    UsuariosModule,
    RolesModule,
    ConvocatoriasModule,
    EstudiantesModule,
    CobrosModule,
    BeneficiariosModule,
    AuthModule,
    SolicitudesModule,
    CuestionariosModule,
    PreguntasModule,
    RespuestasModule,
    ProgramacionesModule,
  ],
})
export class AppModule { }
