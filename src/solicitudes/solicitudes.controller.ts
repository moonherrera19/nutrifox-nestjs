import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';

@Controller('solicitudes')
export class SolicitudesController {
    constructor(private readonly solicitudesService: SolicitudesService) { }

    @Post()
    create(@Body() createSolicitudDto: CreateSolicitudDto) {
        return this.solicitudesService.create(createSolicitudDto);
    }

    @Get()
    findAll() {
        return this.solicitudesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.solicitudesService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSolicitudDto: UpdateSolicitudDto) {
        return this.solicitudesService.update(+id, updateSolicitudDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.solicitudesService.remove(+id);
    }
}