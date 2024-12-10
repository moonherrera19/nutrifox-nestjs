import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToMany
} from 'typeorm';
import { Solicitud } from './solicitud.entity';
import { Respuesta } from './respuesta.entity'; // Asumiendo que tienes una entidad Respuesta

@Entity()
export class Cuestionario {
    @PrimaryGeneratedColumn()
    idCuestionario: number;

    @ManyToOne(() => Solicitud, (solicitud) => solicitud.cuestionarios)
    @JoinColumn({ name: 'idSolicitud' })
    solicitud: Solicitud;

    @Column({ type: 'mediumblob' })
    kardex: Buffer;

    @Column({ type: 'mediumblob' })
    cartaMotivos: Buffer;

    @OneToMany(() => Respuesta, (respuesta) => respuesta.cuestionario)
    respuestas: Respuesta[];
}