import { IsNotEmpty, IsDateString, IsEnum } from 'class-validator';

export class CreateBeneficiarioDto {
    @IsNotEmpty()
    idEstudiante: number;

    @IsNotEmpty()
    idConvocatoria: number;

    @IsNotEmpty()
    @IsDateString()
    fechaAceptacion: Date;

    @IsNotEmpty()
    @IsEnum(['Activo', 'Inactivo'])
    estatus: 'Activo' | 'Inactivo';
}