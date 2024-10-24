import { Controller, Get, Inject, Post, Res, Body, Param, Put, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from '../DTO/loginDto'
import { createEmpDto } from '../DTO/employeeDto'
import { AuthGuard } from './auth.guard';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() logindto: loginDto) {

        const login = await this.authService.login(logindto)
        console.log(login)
        if (login.code == 400) {
            return {
                code: login.code,
                message: "credentials not matched"
            }
        }
        return {
            code: login.code,
            message: "login successfull !!",
            token: login.token
        }
    }

    



}
