import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Respuesta } from './respuesta.entity';

@Entity()
export class Pregunta {
    @PrimaryGeneratedColumn()
    idPregunta: number;

    @Column({ length: 512 })
    titulo: string;

    @OneToMany(() => Respuesta, (respuesta) => respuesta.pregunta)
    respuestas: Respuesta[];
}