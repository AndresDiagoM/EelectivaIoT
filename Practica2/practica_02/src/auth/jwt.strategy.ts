//Posteriormente se adiciona una estrategia para permitirle Passport identificar 
//donde se encontrará el token en una petición y cual es el secreto que permite validarlo. 
//Se crea el archivo jwt-auth.strategy.ts

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtSecret } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
   constructor() {
      super({
         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
         ignoreExpiration: false,
         secretOrKey: jwtSecret,
      });
   }

   async validate(payload: any) {
      return { userId: payload.sub, username: payload.username };
   }
}