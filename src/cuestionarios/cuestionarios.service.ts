import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuestionario } from '../entities/cuestionario.entity';
import { CreateCuestionarioDto } from './dto/create-cuestionario.dto';
import { UpdateCuestionarioDto } from './dto/update-cuestionario.dto';

@Injectable()
export class CuestionariosService {
    constructor(
        @InjectRepository(Cuestionario)
        private readonly cuestionarioRepository: Repository<Cuestionario>,
    ) { }

    async create(createCuestionarioDto: CreateCuestionarioDto) {
        const { kardex, cartaMotivos, ...cuestionarioData } = createCuestionarioDto;
        const kardexBuffer = await kardex.buffer;
        const cartaMotivosBuffer = await cartaMotivos.buffer;

        const cuestionario = this.cuestionarioRepository.create({
            ...cuestionarioData,
            kardex: kardexBuffer,
            cartaMotivos: cartaMotivosBuffer
        });
        return this.cuestionarioRepository.save(cuestionario);
    }

    findAll() {
        return this.cuestionarioRepository.find();
    }

    findOne(id: number) {
        return this.cuestionarioRepository.findOneBy({ idCuestionario: id });
    }

    async update(id: number, updateCuestionarioDto: UpdateCuestionarioDto) {
        const { kardex, cartaMotivos, ...cuestionarioData } = updateCuestionarioDto;
        let kardexBuffer: Buffer | undefined;
        let cartaMotivosBuffer: Buffer | undefined;

        if (kardex) {
            kardexBuffer = await kardex.buffer;
        }

        if (cartaMotivos) {
            cartaMotivosBuffer = await cartaMotivos.buffer;
        }

        return this.cuestionarioRepository.update(id, {
            ...cuestionarioData,
            kardex: kardexBuffer,
            cartaMotivos: cartaMotivosBuffer
        });
    }

    remove(id: number) {
        return this.cuestionarioRepository.delete(id);
    }
}