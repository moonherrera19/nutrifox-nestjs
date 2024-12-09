import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../ormconfig';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { ConvocatoriasModule } from './convocatorias/convocatorias.module';
import { AuthModule } from './auth/auth.module';
// import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    AuthModule,
    UsuariosModule,
    RolesModule,
    ConvocatoriasModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
