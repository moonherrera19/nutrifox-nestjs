import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cobro } from './cobro.entity';
import { Beneficiario } from './beneficiario.entity';
import { Solicitud } from './solicitud.entity';
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

  @Column({ type: 'mediumblob', nullable: false })
  imagen: Buffer;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nombre: string;

  @OneToMany(() => Cobro, (cobro) => cobro.convocatoria) // Agregar esta línea
  cobros: Cobro[];

  @OneToMany(() => Beneficiario, (beneficiario) => beneficiario.convocatoria)
  beneficiarios: Beneficiario[];

  @OneToMany(() => Solicitud, (solicitud) => solicitud.convocatoria)
  solicitudes: Solicitud[];
}
