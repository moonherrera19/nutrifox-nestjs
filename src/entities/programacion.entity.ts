import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { Estudiante } from './estudiante.entity';

@Entity()
export class Programacion {
    @PrimaryGeneratedColumn()
    idProgramacion: number;

    @ManyToOne(() => Estudiante, (estudiante) => estudiante.programaciones)
    @JoinColumn({ name: 'idEstudiante' })
    estudiante: Estudiante;

    @Column({ type: 'date' })
    fechaVisita: Date;

    @Column({ type: 'boolean' })
    completado: boolean;

    @Column({ length: 1024 })
    comentario: string;
}