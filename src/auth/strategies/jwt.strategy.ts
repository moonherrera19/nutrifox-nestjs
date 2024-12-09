// src/auth/strategies/jwt.strategy.ts

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../../usuarios/usuarios.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usuariosService: UsuariosService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'tu_secreto', // Reemplaza con una clave secreta segura
    });
  }

  async validate(payload: any) {
    const usuario = await this.usuariosService.findOne(payload.idUsuario);
    if (!usuario) {
      throw new UnauthorizedException();
    }
    return usuario; // El usuario se inyecta en la solicitud
  }
}
