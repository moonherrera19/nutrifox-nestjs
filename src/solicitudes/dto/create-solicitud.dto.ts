import { IsNotEmpty, IsEnum, IsNumber } from 'class-validator';
import { MemoryStoredFile } from 'nestjs-form-data';

export class RespuestaDto {
    @IsNumber()
    idPregunta: number;

    @IsNotEmpty()
    respuesta: string;
}

export class CreateSolicitudDto {
    @IsNotEmpty()
    idConvocatoria: number;

    @IsNotEmpty()
    idEstudiante: number;

    @IsNotEmpty()
    numeroControl: string;

    @IsNotEmpty()
    @IsEnum(['Pendiente', 'Aceptada', 'Rechazada'])
    estatus: 'Pendiente' | 'Aceptada' | 'Rechazada';

    @IsNotEmpty()
    kardex: MemoryStoredFile;

    @IsNotEmpty()
    cartaMotivos: MemoryStoredFile;

    @IsNotEmpty({ each: true }) // Validar cada elemento del array
    respuestas: RespuestaDto[];
}