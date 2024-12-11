import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitud } from '../entities/solicitud.entity';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
import { Cuestionario } from '../entities/cuestionario.entity';
import { Respuesta } from '../entities/respuesta.entity';

@Injectable()
export class SolicitudesService {
    constructor(
        @InjectRepository(Solicitud)
        private readonly solicitudRepository: Repository<Solicitud>,
        @InjectRepository(Cuestionario)
        private readonly cuestionarioRepository: Repository<Cuestionario>,
        @InjectRepository(Respuesta)
        private readonly respuestaRepository: Repository<Respuesta>,
    ) { }

    async create(createSolicitudDto: CreateSolicitudDto): Promise<Solicitud> {
        const {
            kardex,
            cartaMotivos,
            respuestas,
            idConvocatoria,
            idEstudiante,
            ...solicitudData
        } = createSolicitudDto;

        console.log(kardex, cartaMotivos, respuestas, solicitudData);

        const nuevaSolicitud = this.solicitudRepository.create({
            ...solicitudData,
            convocatoria: { idConvocatoria },
            estudiante: { idEstudiante },
        });
        const solicitudGuardada = await this.solicitudRepository.save(nuevaSolicitud);

        // Guardar el cuestionario (Corrected)
        const nuevoCuestionario = this.cuestionarioRepository.create({
            kardex: kardex.buffer,
            cartaMotivos: cartaMotivos.buffer,
            solicitud: { idSolicitud: solicitudGuardada.idSolicitud }  // Assign to solicitud.idSolicitud
        });
        await this.cuestionarioRepository.save(nuevoCuestionario);

        // Guardar las respuestas
        await Promise.all(
            respuestas.map((respuestaDto) => {
                const nuevaRespuesta = this.respuestaRepository.create({
                    respuesta: respuestaDto.respuesta,
                    pregunta: { idPregunta: respuestaDto.idPregunta },
                    cuestionario: { idCuestionario: nuevoCuestionario.idCuestionario }  // Assign to cuestionario.idCuestionario,
                });
                return this.respuestaRepository.save(nuevaRespuesta);
            }),
        );

        return solicitudGuardada;
    }

    findAll() {
        return this.solicitudRepository.find();
    }

    findOne(id: number) {
        return this.solicitudRepository.findOneBy({ idSolicitud: id });
    }

    async findByUsuario(idUsuario: number): Promise<Solicitud[]> {
        return this.solicitudRepository.find({
            where: { estudiante: { usuario: { idUsuario } } },
            relations: ['cuestionarios', 'cuestionarios.respuestas', 'cuestionarios.respuestas.pregunta'],
        });
    }

    update(id: number, updateSolicitudDto: UpdateSolicitudDto) {
        return this.solicitudRepository.update(id, updateSolicitudDto);
    }

    remove(id: number) {
        return this.solicitudRepository.delete(id);
    }
}