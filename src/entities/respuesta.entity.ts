import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cuestionario } from './cuestionario.entity';
import { Pregunta } from './pregunta.entity';

@Entity()
export class Respuesta {
    @PrimaryGeneratedColumn()
    idRespuesta: number;

    @ManyToOne(() => Cuestionario, (cuestionario) => cuestionario.respuestas)
    @JoinColumn({ name: 'idCuestionario' })
    cuestionario: Cuestionario;

    @ManyToOne(() => Pregunta, (pregunta) => pregunta.respuestas)
    @JoinColumn({ name: 'idPregunta' })
    pregunta: Pregunta;

    @Column({ length: 255 })
    respuesta: string;
}