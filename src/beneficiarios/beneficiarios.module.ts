import { Module } from '@nestjs/common';
import { BeneficiariosService } from './beneficiarios.service';
import { BeneficiariosController } from './beneficiarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beneficiario } from '../entities/beneficiario.entity';
import { EstudiantesModule } from '../estudiantes//estudiantes.module';
import { ConvocatoriasModule } from '../convocatorias/convocatorias.module';

@Module({
    imports: [TypeOrmModule.forFeature([Beneficiario]), EstudiantesModule, ConvocatoriasModule],
    controllers: [BeneficiariosController],
    providers: [BeneficiariosService]
})
export class BeneficiariosModule { }