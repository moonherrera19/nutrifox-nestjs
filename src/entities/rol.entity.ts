import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  idRol: number;

  @Column({ unique: true, length: 50 })
  nombreRol: string;

  @Column({ length: 255, nullable: true })
  descripcionRol: string;

  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  usuarios: Usuario[];
}
