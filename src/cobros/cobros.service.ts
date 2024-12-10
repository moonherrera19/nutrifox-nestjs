import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cobro } from '../entities/cobro.entity';
import { CreateCobroDto } from './dto/create-cobro.dto';
import { UpdateCobroDto } from './dto/update-cobro.dto';

@Injectable()
export class CobrosService {
    constructor(
        @InjectRepository(Cobro)
        private readonly cobroRepository: Repository<Cobro>,
    ) { }

    create(createCobroDto: CreateCobroDto) {
        const cobro = this.cobroRepository.create(createCobroDto);
        return this.cobroRepository.save(cobro);
    }

    findAll() {
        return this.cobroRepository.find();
    }

    findOne(id: number) {
        return this.cobroRepository.findOneBy({ idCobro: id });
    }

    async findByEstudiante(numeroControl: string): Promise<Cobro[]> {
        return this.cobroRepository.find({
            where: {
                estudiante: { numeroControl }
            }
        });
    }

    async findByConvocatoria(idConvocatoria: number): Promise<Cobro[]> {
        return this.cobroRepository.find({
            where: {
                convocatoria: { idConvocatoria }
            }
        });
    }

    update(id: number, updateCobroDto: UpdateCobroDto) {
        return this.cobroRepository.update(id, updateCobroDto);
    }

    remove(id: number) {
        return this.cobroRepository.delete(id);
    }
}