import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToOne,
    OneToMany,
    JoinColumn
} from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { Convocatoria } from './convocatoria.entity';
import { Cuestionario } from './cuestionario.entity';

@Entity()
export class Solicitud {
    @PrimaryGeneratedColumn()
    idSolicitud: number;

    @ManyToOne(() => Convocatoria, (convocatoria) => convocatoria.solicitudes)
    @JoinColumn({ name: 'idConvocatoria' })
    convocatoria: Convocatoria;

    @ManyToOne(() => Estudiante, (estudiante) => estudiante.solicitudes)
    @JoinColumn({ name: 'idEstudiante' })
    estudiante: Estudiante;

    @Column({ type: 'enum', enum: ['Pendiente', 'Aceptada', 'Rechazada'] })
    estatus: 'Pendiente' | 'Aceptada' | 'Rechazada';

    @OneToMany(() => Cuestionario, (cuestionario) => cuestionario.solicitud)
    cuestionarios: Cuestionario[];
}