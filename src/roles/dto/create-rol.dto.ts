import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateRolDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  nombreRol: string;

  @IsString()
  @MaxLength(255)
  descripcionRol: string;
}
