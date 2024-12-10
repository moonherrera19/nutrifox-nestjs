import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Programacion } from '../entities/programacion.entity';
import { CreateProgramacionDto } from './dto/create-programacion.dto';
import { UpdateProgramacionDto } from './dto/update-programacion.dto';

@Injectable()
export class ProgramacionesService {
    constructor(
        @InjectRepository(Programacion)
        private readonly programacionRepository: Repository<Programacion>,
    ) { }

    create(createProgramacionDto: CreateProgramacionDto) {
        const programacion = this.programacionRepository.create(createProgramacionDto);
        return this.programacionRepository.save(programacion);
    }

    findAll() {
        return this.programacionRepository.find();
    }

    findOne(id: number) {
        return this.programacionRepository.findOneBy({ idProgramacion: id });
    }

    update(id: number, updateProgramacionDto: UpdateProgramacionDto) {
        return this.programacionRepository.update(id, updateProgramacionDto);
    }

    remove(id: number) {
        return this.programacionRepository.delete(id);
    }
}