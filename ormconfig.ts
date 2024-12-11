import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: 'nutrifox.database.windows.net', // Reemplaza con la dirección de tu servidor
  port: 1433,
  username: 'su', // Reemplaza con tu usuario de la base de datos
  password: 'AVNS_uycO9Kf56CcxocEgdUx', // Reemplaza con tu contraseña
  database: 'nutrifox',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Solo para desarrollo, NO en producción,
  logging: true
});
