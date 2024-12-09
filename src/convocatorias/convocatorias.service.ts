import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Convocatoria } from '../entities/convocatoria.entity';
import { CreateConvocatoriaDto } from './dto/create-convocatoria.dto';
import { UpdateConvocatoriaDto } from './dto/update-convocatoria.dto';

@Injectable()
export class ConvocatoriasService {
  constructor(
    @InjectRepository(Convocatoria)
    private readonly convocatoriaRepository: Repository<Convocatoria>,
  ) {}

  async create(createConvocatoriaDto: CreateConvocatoriaDto) {
    const { imagen, ...convocatoriaData } = createConvocatoriaDto;
    const imagenBuffer = await imagen.buffer;

    const convocatoria = this.convocatoriaRepository.create({
      ...convocatoriaData,
      imagen: imagenBuffer,
    } as Convocatoria); // Aserción de tipo para evitar el error de DeepPartial

    return this.convocatoriaRepository.save(convocatoria);
  }

  findAll() {
    return this.convocatoriaRepository.find();
  }

  findOne(id: number) {
    return this.convocatoriaRepository.findOneBy({ idConvocatoria: id });
  }

  async update(id: number, updateConvocatoriaDto: UpdateConvocatoriaDto) {
    const { imagen, ...convocatoriaData } = updateConvocatoriaDto;
    let imagenBuffer: Buffer | undefined;

    if (imagen) {
      imagenBuffer = await imagen.buffer;
    }

    return this.convocatoriaRepository.update(id, {
      ...convocatoriaData,
      imagen: imagenBuffer,
    });
  }

  remove(id: number) {
    return this.convocatoriaRepository.delete(id);
  }
}
