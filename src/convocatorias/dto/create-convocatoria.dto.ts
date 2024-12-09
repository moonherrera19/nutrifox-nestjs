import {
  IsNotEmpty,
  IsDate,
  IsBoolean,
  IsString,
  MaxLength,
} from 'class-validator';

import { HasMimeType, MaxFileSize, MemoryStoredFile } from 'nestjs-form-data';

import { Transform } from 'class-transformer';

export class CreateConvocatoriaDto {
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value)) // Convierte el valor a Date
  fechaApertura: Date;

  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value)) // Convierte el valor a Date
  fechaCierre: Date;

  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value)) // Convierte el valor a Date
  fechaInicio: Date;

  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value)) // Convierte el valor a Date
  fechaFin: Date;

  @IsNotEmpty()
  @IsBoolean()
  estatus: boolean;

  @IsNotEmpty()
  @MaxFileSize(1e6)
  @HasMimeType(['image/jpeg', 'image/png'])
  imagen: MemoryStoredFile;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  nombre: string;
}
