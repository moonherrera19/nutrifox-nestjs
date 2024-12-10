import { IsNotEmpty, IsDateString, IsBoolean, IsString, MaxLength } from 'class-validator';

export class CreateProgramacionDto {
    @IsNotEmpty()
    numeroControl: string;

    @IsNotEmpty()
    @IsDateString()
    fechaVisita: Date;

    @IsNotEmpty()
    @IsBoolean()
    completado: boolean;

    @IsNotEmpty()
    @IsString()
    @MaxLength(1024)
    comentario: string;
}