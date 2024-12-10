import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Rol } from './rol.entity';
import { Estudiante } from './estudiante.entity'; // Asegúrate de importar la entidad Estudiante

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column({ unique: true, length: 256 })
  email: string;

  @Column({ length: 256 })
  password: string;

  @Column() // Agregar el decorador @Column() aquí
  idRol: number;

  @ManyToOne(() => Rol, (rol) => rol.usuarios)
  @JoinColumn({ name: 'idRol' })
  rol: Rol;

  @OneToMany(() => Estudiante, (estudiante) => estudiante.usuario) // Agregar esta línea
  estudiantes: Estudiante[];
}
