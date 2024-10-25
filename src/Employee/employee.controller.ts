import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service'
import { Request, Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('employee')
export class EmployeeController {
    constructor(
        private readonly employeeService: EmployeeService
    ) { }

    @UseGuards(AuthGuard)
    @Post('reset_password')
    async resetPassword(@Body() body: any, @Res() res: Response, @Req() request: Request) {
        const payload = request['user']
        const resetPass = await this.employeeService.resetPass(body,payload.email)
    }



}
