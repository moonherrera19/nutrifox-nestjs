// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const usuario = await this.usuariosService.findOneByEmail(email); // Implementa este método en UsuariosService
    console.log(usuario);
    if (usuario && (await bcrypt.compare(pass, usuario.password))) {
      const { ...result } = usuario;
      return result;
    }
    return null;
  }

  async login(usuario: any) {
    const payload = {
      idUsuario: usuario.idUsuario,
      email: usuario.email,
      rol: usuario.rol,
    };
    return {
      message: 'Inicio de sesión exitoso',
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }), // Token de refresco con expiración de 7 días
    };
  }
}
