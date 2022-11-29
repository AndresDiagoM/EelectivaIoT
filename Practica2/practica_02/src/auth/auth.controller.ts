import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
   constructor(private authService: AuthService) {}

   @UseGuards(AuthGuard('local'))
   @Post('login')
   async login(@Request() req) {
      return this.authService.login(req.user);
   }
}
//Para permitirle a los usuarios iniciar sesión se implementará un endpoint que convierta las credenciales de usuario en un token JWT. 
//Para esto se crea un controlador auth.controller.ts