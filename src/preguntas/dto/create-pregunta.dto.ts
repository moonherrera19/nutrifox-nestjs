import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePreguntaDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(512)
    titulo: string;
}