import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Rol } from './rol.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column({ unique: true, length: 256 })
  email: string;

  @Column({ length: 256 })
  password: string;

  @ManyToOne(() => Rol, (rol) => rol.usuarios)
  @JoinColumn({ name: 'idRol' })
  rol: Rol;
}
