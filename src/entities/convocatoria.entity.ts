import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Beneficiario } from './beneficiario.entity';
// import { Solicitud } from './solicitud.entity';

@Entity()
export class Convocatoria {
  @PrimaryGeneratedColumn()
  idConvocatoria: number;

  @Column({ type: 'date' })
  fechaApertura: Date;

  @Column({ type: 'date' })
  fechaCierre: Date;

  @Column({ type: 'date' })
  fechaInicio: Date;

  @Column({ type: 'date' })
  fechaFin: Date;

  @Column({ type: 'boolean' })
  estatus: boolean;

  @Column({ type: 'blob', nullable: true })
  imagen: Buffer;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nombre: string;

  //   @OneToMany(() => Beneficiario, (beneficiario) => beneficiario.convocatoria)
  //   beneficiarios: Beneficiario[];

  //   @OneToMany(() => Solicitud, (solicitud) => solicitud.convocatoria)
  //   solicitudes: Solicitud[];
}
