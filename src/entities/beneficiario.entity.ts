import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { Convocatoria } from './convocatoria.entity';

@Entity()
export class Beneficiario {
    @PrimaryGeneratedColumn()
    idBeneficiario: number;

    @Column({ type: 'date' })
    fechaAceptacion: Date;

    @Column({ type: 'enum', enum: ['Activo', 'Inactivo'] })
    estatus: 'Activo' | 'Inactivo';

    @ManyToOne(() => Estudiante, (estudiante) => estudiante.beneficiarios, {
        nullable: false,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'idEstudiante' })
    estudiante: Estudiante;

    @ManyToOne(() => Convocatoria, (convocatoria) => convocatoria.beneficiarios, {
        nullable: false,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'idConvocatoria' })
    convocatoria: Convocatoria;
}