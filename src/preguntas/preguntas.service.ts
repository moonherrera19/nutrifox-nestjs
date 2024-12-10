import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pregunta } from '../entities/pregunta.entity';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';

@Injectable()
export class PreguntasService {
    constructor(
        @InjectRepository(Pregunta)
        private readonly preguntaRepository: Repository<Pregunta>,
    ) { }

    create(createPreguntaDto: CreatePreguntaDto) {
        const pregunta = this.preguntaRepository.create(createPreguntaDto);
        return this.preguntaRepository.save(pregunta);
    }

    findAll() {
        return this.preguntaRepository.find();
    }

    findOne(id: number) {
        return this.preguntaRepository.findOneBy({ idPregunta: id });
    }

    update(id: number, updatePreguntaDto: UpdatePreguntaDto) {
        return this.preguntaRepository.update(id, updatePreguntaDto);
    }

    remove(id: number) {
        return this.preguntaRepository.delete(id);
    }
}