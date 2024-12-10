import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('estudiantes')
export class EstudiantesController {
    constructor(private readonly estudiantesService: EstudiantesService) { }

    @FormDataRequest()
    @Post()
    create(@Body() createEstudianteDto: CreateEstudianteDto) {
        return this.estudiantesService.create(createEstudianteDto);
    }

    @Get()
    findAll() {
        return this.estudiantesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.estudiantesService.findOne(+id);
    }

    @Get('/usuario/:idUsuario')
    findOneByUser(@Param('idUsuario') idUsuario: string) {
        return this.estudiantesService.findByUsuario(+idUsuario);
    }

    @FormDataRequest()
    @Patch('/usuario/:idUsuario')
    updateByUser(@Param('idUsuario') idUsuario: string, @Body() updateEstudianteDto: UpdateEstudianteDto) {
        return this.estudiantesService.updateByUsuario(+idUsuario, updateEstudianteDto);
    }

    @FormDataRequest()
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateEstudianteDto) {
        return this.estudiantesService.update(+id, updateEstudianteDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.estudiantesService.remove(+id);
    }
}