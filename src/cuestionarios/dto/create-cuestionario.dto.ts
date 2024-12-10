import { IsNotEmpty } from 'class-validator';
import { MemoryStoredFile } from 'nestjs-form-data';

export class CreateCuestionarioDto {
    @IsNotEmpty()
    idSolicitud: number;

    @IsNotEmpty()
    kardex: MemoryStoredFile;

    @IsNotEmpty()
    cartaMotivos: MemoryStoredFile;
}