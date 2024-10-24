import { Body, Controller, Get, Inject, UseGuards, Param, Post, Put, Res, Req } from '@nestjs/common';
import { createEmpDto } from '../DTO/employeeDto'
import { Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express'
import {adminService} from './admin.service'


@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: adminService) { }

    @UseGuards(AuthGuard)
    @Get('get_all')
    async getAllUsers(@Res() res: Response, @Req() request: Request) {
        const payload = request['user']
        if (payload.role != 'admin') {
            return res.status(400).json({
                code: 400,
                message: "Only admin can get all employees !"
            })
        }

        const result = await this.adminService.getAllEmp();
        if (result.length == 0) {
            return res.status(400).json({
                code: 400,
                message: 'No users found',
            })
        }

        return res.status(200).json({
            code: 200,
            message: "All users ------> ",
            data: result
        })

    }
}


