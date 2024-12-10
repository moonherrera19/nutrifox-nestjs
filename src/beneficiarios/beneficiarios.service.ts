import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Beneficiario } from '../entities/beneficiario.entity';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { UpdateBeneficiarioDto } from './dto/update-beneficiario.dto';

@Injectable()
export class BeneficiariosService {
    constructor(
        @InjectRepository(Beneficiario)
        private readonly beneficiarioRepository: Repository<Beneficiario>,
    ) { }

    create(createBeneficiarioDto: CreateBeneficiarioDto) {
        const beneficiario = this.beneficiarioRepository.create(createBeneficiarioDto);
        console.log(beneficiario)
        return this.beneficiarioRepository.save(beneficiario);
    }

    findAll() {
        return this.beneficiarioRepository.find();
    }

    findOne(id: number) {
        return this.beneficiarioRepository.findOneBy({ idBeneficiario: id });
    }

    async findByEstudiante(numeroControl: string): Promise<Beneficiario[]> {
        return this.beneficiarioRepository.find({
            where: {
                estudiante: { numeroControl }
            }
        });
    }

    async findByConvocatoria(idConvocatoria: number): Promise<Beneficiario[]> {
        return this.beneficiarioRepository.find({
            where: {
                convocatoria: { idConvocatoria }
            }
        });
    }

    update(id: number, updateBeneficiarioDto: UpdateBeneficiarioDto) {
        return this.beneficiarioRepository.update(id, updateBeneficiarioDto);
    }

    remove(id: number) {
        return this.beneficiarioRepository.delete(id);
    }
}