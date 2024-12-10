import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgramacionesService } from './programaciones.service';
import { CreateProgramacionDto } from './dto/create-programacion.dto';
import { UpdateProgramacionDto } from './dto/update-programacion.dto';

@Controller('programaciones')
export class ProgramacionesController {
    constructor(private readonly programacionesService: ProgramacionesService) { }

    @Post()
    create(@Body() createProgramacionDto: CreateProgramacionDto) {
        return this.programacionesService.create(createProgramacionDto);
    }

    @Get()
    findAll() {
        return this.programacionesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.programacionesService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProgramacionDto: UpdateProgramacionDto) {
        return this.programacionesService.update(+id, updateProgramacionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.programacionesService.remove(+id);
    }
}