import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { CuestionariosService } from './cuestionarios.service';
import { CreateCuestionarioDto } from './dto/create-cuestionario.dto';
import { UpdateCuestionarioDto } from './dto/update-cuestionario.dto';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('cuestionarios')
export class CuestionariosController {
  constructor(private readonly cuestionariosService: CuestionariosService) {}

  @Post()
  @FormDataRequest() // Suponiendo que usas FormData para enviar los archivos
  create(@Body() createCuestionarioDto: CreateCuestionarioDto) {
    return this.cuestionariosService.create(createCuestionarioDto);
  }

  @Get()
  findAll() {
    return this.cuestionariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuestionariosService.findOne(+id);
  }

  @Patch(':id')
  @FormDataRequest() // Suponiendo que usas FormData para enviar los archivos
  update(@Param('id') id: string, @Body() updateCuestionarioDto: UpdateCuestionarioDto) {
    return this.cuestionariosService.update(+id, updateCuestionarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuestionariosService.remove(+id);
  }
}