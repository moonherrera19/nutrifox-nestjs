import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { Convocatoria } from './convocatoria.entity';

@Entity()
export class Cobro {
    @PrimaryGeneratedColumn()
    idCobro: number;

    @ManyToOne(() => Estudiante, (estudiante) => estudiante.cobros)
    @JoinColumn({ name: 'idEstudiante' })
    estudiante: Estudiante;

    @ManyToOne(() => Convocatoria, (convocatoria) => convocatoria.cobros)
    @JoinColumn({ name: 'idConvocatoria' })
    convocatoria: Convocatoria;

    @Column({ type: 'date' })
    fecha: Date;

    @Column({ type: 'time' })
    hora: string;
}