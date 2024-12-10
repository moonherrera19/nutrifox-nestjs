import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Respuesta } from '../entities/respuesta.entity';
import { CreateRespuestaDto } from './dto/create-respuesta.dto';
import { UpdateRespuestaDto } from './dto/update-respuesta.dto';

@Injectable()
export class RespuestasService {
    constructor(
        @InjectRepository(Respuesta)
        private readonly respuestaRepository: Repository<Respuesta>,
    ) { }

    create(createRespuestaDto: CreateRespuestaDto) {
        const respuesta = this.respuestaRepository.create(createRespuestaDto);
        return this.respuestaRepository.save(respuesta);
    }

    findAll() {
        return this.respuestaRepository.find();
    }

    findOne(id: number) {
        return this.respuestaRepository.findOneBy({ idRespuesta: id });
    }

    update(id: number, updateRespuestaDto: UpdateRespuestaDto) {
        return this.respuestaRepository.update(id, updateRespuestaDto);
    }

    remove(id: number) {
        return this.respuestaRepository.delete(id);
    }
}