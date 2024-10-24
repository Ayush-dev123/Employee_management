import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { employee } from '../Entity/employee'
import { admin } from '../Entity/adminEntity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HelpersService } from '../Helpers/helpers.service'
import { createToken } from '../Helpers/Token.service'
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../Auth/constant';
import {super_admin_table} from '../Entity/superadminEntity'

@Module({
    imports: [
        TypeOrmModule.forFeature([admin, employee,super_admin_table]),
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, HelpersService, createToken],

})

export class AuthModule { }
