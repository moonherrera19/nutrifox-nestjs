// src/auth/strategies/local.strategy.ts

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // Usar 'email' como campo de nombre de usuario
  }

  async validate(email: string, password: string): Promise<any> {
    const usuario = await this.authService.validateUser(email, password);
    if (!usuario) {
      throw new UnauthorizedException();
    }
    return usuario;
  }
}
