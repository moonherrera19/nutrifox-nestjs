import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from '../entities/rol.entity'; // Importa la entidad

@Module({
  imports: [TypeOrmModule.forFeature([Rol])], // Registra la entidad
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
