import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConvocatoriasService } from './convocatorias.service';
import { CreateConvocatoriaDto } from './dto/create-convocatoria.dto';
import { UpdateConvocatoriaDto } from './dto/update-convocatoria.dto';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('convocatorias')
export class ConvocatoriasController {
  constructor(private readonly convocatoriasService: ConvocatoriasService) { }

  @Post()
  @FormDataRequest()
  create(@Body() createConvocatoriaDto: CreateConvocatoriaDto) {
    console.log(createConvocatoriaDto); // Imprime el DTO
    return this.convocatoriasService.create(createConvocatoriaDto);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.convocatoriasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.convocatoriasService.findOne(+id);
  }

  @FormDataRequest()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConvocatoriaDto: UpdateConvocatoriaDto,
  ) {
    return this.convocatoriasService.update(+id, updateConvocatoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.convocatoriasService.remove(+id);
  }
}
