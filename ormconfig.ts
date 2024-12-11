import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'mysql-nutrifox-accitesz-207d.i.aivencloud.com', // Reemplaza con la dirección de tu servidor
  port: 3306,
  username: 'avnadmin', // Reemplaza con tu usuario de la base de datos
  password: 'AVNS_uycO9Kf56CcxocEgdUx', // Reemplaza con tu contraseña
  database: 'nutrifox',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Solo para desarrollo, NO en producción,
  logging: true
});
