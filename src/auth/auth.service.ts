import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/entities/usuario.entity';

@Injectable()
export class AuthService {
    constructor(
        private usuariosService: UsuariosService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usuariosService.findOneByEmail(email);
        if (user && user.password === pass) {
            // omitimos la contraseña del objeto devuelto
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: Usuario) {
        const payload = { idUsuario: user.idUsuario, email: user.email, rol: user.idRol };
        return {
            message: 'Inicio de sesión exitoso',
            accessToken: this.jwtService.sign(payload),
            refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }), // Token de refresco con expiración de 7 días
        };
    }
}