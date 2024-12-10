import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitud } from '../entities/solicitud.entity';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';

@Injectable()
export class SolicitudesService {
    constructor(
        @InjectRepository(Solicitud)
        private readonly solicitudRepository: Repository<Solicitud>,
    ) { }

    create(createSolicitudDto: CreateSolicitudDto) {
        const solicitud = this.solicitudRepository.create(createSolicitudDto);
        return this.solicitudRepository.save(solicitud);
    }

    findAll() {
        return this.solicitudRepository.find();
    }

    findOne(id: number) {
        return this.solicitudRepository.findOneBy({ idSolicitud: id });
    }

    update(id: number, updateSolicitudDto: UpdateSolicitudDto) {
        return this.solicitudRepository.update(id, updateSolicitudDto);
    }

    remove(id: number) {
        return this.solicitudRepository.delete(id);
    }
}