import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { CreateSolicitudDto, RespuestaDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('solicitudes')
export class SolicitudesController {
    constructor(private readonly solicitudesService: SolicitudesService) { }

    @Post()
    @FormDataRequest()
    create(@Body() createSolicitudDto: CreateSolicitudDto) {
        createSolicitudDto.respuestas = createSolicitudDto.respuestas.map(
            (respuesta: any) => JSON.parse(respuesta),
        );
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

    @Get('/usuario/:idUsuario')
    findByUsuario(@Param('idUsuario') idUsuario: string) {
        return this.solicitudesService.findByUsuario(+idUsuario);
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