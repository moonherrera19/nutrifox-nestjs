import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Cobro } from './cobro.entity';
import { Beneficiario } from './beneficiario.entity';
import { Solicitud } from './solicitud.entity';
import { Programacion } from './programacion.entity';

@Entity()
export class Estudiante {
    @PrimaryGeneratedColumn()
    idEstudiante: number;

    @Column({ unique: true, length: 255 })
    numeroControl: string;

    @Column({ length: 256 })
    nombre: string;

    @Column({ length: 256 })
    apellidos: string;

    @Column()
    grado: number;

    @Column({ length: 10, default: 'NA' }) // Asignar valor por defecto
    grupo: string;

    @Column({ length: 512 })
    domicilio: string;

    @Column({ type: 'mediumblob' })
    curp: Buffer;

    @Column({ type: 'mediumblob' })
    credencial: Buffer;

    @ManyToOne(() => Usuario, (usuario) => usuario.estudiantes)
    @JoinColumn({ name: 'idUsuario' })
    usuario: Usuario;

    @OneToMany(() => Cobro, (cobro) => cobro.estudiante) // Agregar esta línea
    cobros: Cobro[];

    @OneToMany(() => Solicitud, (solicitud) => solicitud.estudiante) // Agregar esta línea
    solicitudes: Solicitud[];

    @OneToMany(() => Programacion, (programacion) => programacion.estudiante)
    programaciones: Programacion[];

    @OneToMany(() => Beneficiario, (beneficiario) => beneficiario.estudiante)
    beneficiarios: Beneficiario[];
}