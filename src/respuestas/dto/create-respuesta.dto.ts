import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateRespuestaDto {
    @IsNotEmpty()
    idCuestionario: number;

    @IsNotEmpty()
    idPregunta: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    respuesta: string;
}