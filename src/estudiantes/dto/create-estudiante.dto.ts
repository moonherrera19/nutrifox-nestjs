import { IsNotEmpty, IsString, IsNumber, MaxLength, IsPositive } from 'class-validator';
import { HasMimeType, MaxFileSize, MemoryStoredFile } from 'nestjs-form-data';

export class CreateEstudianteDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    numeroControl: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(256)
    nombre: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(256)
    apellidos: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    grado: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    grupo: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(512)
    domicilio: string;

    @IsNotEmpty()
    @MaxFileSize(1e6)
    @HasMimeType(['application/pdf'])
    curp: MemoryStoredFile;

    @IsNotEmpty()
    @MaxFileSize(1e6)
    @HasMimeType(['application/pdf'])
    credencial: MemoryStoredFile;

    @IsNotEmpty()
    idUsuario: number;
}