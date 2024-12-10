import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost', // Reemplaza con la dirección de tu servidor
  port: 3306,
  username: 'root', // Reemplaza con tu usuario de la base de datos
  password: '12345', // Reemplaza con tu contraseña
  database: 'nutrifox',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Solo para desarrollo, NO en producción,
  logging: true
});
