import { IsNotEmpty, IsDateString, IsString } from 'class-validator';

export class CreateCobroDto {
    @IsNotEmpty()
    numeroControl: string;

    @IsNotEmpty()
    idConvocatoria: number;

    @IsNotEmpty()
    @IsDateString()
    fecha: Date;

    @IsNotEmpty()
    @IsString() // Puedes usar un formato específico si es necesario
    hora: string;
}