import { IsNotEmpty, IsEnum } from 'class-validator';

export class CreateSolicitudDto {
    @IsNotEmpty()
    idConvocatoria: number;

    @IsNotEmpty()
    numeroControl: string;

    @IsNotEmpty()
    @IsEnum(['Pendiente', 'Aceptada', 'Rechazada'])
    estatus: 'Pendiente' | 'Aceptada' | 'Rechazada';
}