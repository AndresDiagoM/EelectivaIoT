import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

   async validateUser(username: string, pass: string): Promise<any> {
      const user = await this.usersService.findOne(username);
      if (user && user.password === pass) {
         const { password, ...result } = user;
         return result;
      }
      return null;
   }

   //método login para la autenticación con JWT
   async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
       access_token: this.jwtService.sign(payload),
    };
   }
}
//Ese servicio se encarga de validar que el usuario y la contraseña sean correctos, 
//para eso se utiliza el servicio de usuarios.

//Posteriormente hay que habilitar el servicio de gestión de usuarios en el módulo 
//de autenticación, para eso se modifica el archivo auth.module.ts