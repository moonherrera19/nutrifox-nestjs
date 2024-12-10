// estudiantes.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from '../entities/estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { UsuariosService } from '../usuarios/usuarios.service'; // Importar UsuariosService

@Injectable()
export class EstudiantesService {
    constructor(
        @InjectRepository(Estudiante)
        private readonly estudianteRepository: Repository<Estudiante>,
        private readonly usuariosService: UsuariosService, // Inyectar UsuariosService
    ) { }

    async create(createEstudianteDto: CreateEstudianteDto) {
        console.log(createEstudianteDto)
        const { curp, credencial, idUsuario, ...estudianteData } = createEstudianteDto;
        const curpBuffer = await curp.buffer;
        const credencialBuffer = await credencial.buffer;

        // Obtener el objeto Usuario
        const usuario = await this.usuariosService.findOne(idUsuario);

        const estudiante = this.estudianteRepository.create({
            ...estudianteData,
            curp: curpBuffer,
            credencial: credencialBuffer,
            usuario: usuario, // Asignar el objeto Usuario
        });

        return this.estudianteRepository.save(estudiante);
    }

    findAll() {
        return this.estudianteRepository.find();
    }

    findOne(id: number) {
        return this.estudianteRepository.findOneBy({ idEstudiante: id });
    }

    async findByUsuario(idUsuario: number): Promise<Estudiante | null> {
        return this.estudianteRepository.findOne({
            where: {
                usuario: { idUsuario }
            }
        });
    }

    async updateByUsuario(idUsuario: number, updateEstudianteDto: UpdateEstudianteDto): Promise<Estudiante | null> {
        const estudiante = await this.findByUsuario(idUsuario);
        if (!estudiante) {
            return null; // o lanzar una excepción
        }
        Object.assign(estudiante, updateEstudianteDto);
        return this.estudianteRepository.save(estudiante);
    }

    async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
        const { curp, credencial, ...estudianteData } = updateEstudianteDto;
        let curpBuffer: Buffer | undefined;
        let credencialBuffer: Buffer | undefined;

        if (curp) {
            curpBuffer = await curp.buffer;
        }

        if (credencial) {
            credencialBuffer = await credencial.buffer;
        }

        return this.estudianteRepository.update(id, {
            ...estudianteData,
            curp: curpBuffer,
            credencial: credencialBuffer,
        });
    }

    remove(id: number) {
        return this.estudianteRepository.delete(id);
    }
}