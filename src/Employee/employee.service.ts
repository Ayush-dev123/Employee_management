import { Injectable, Controller } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { admin } from '../Entity/adminEntity';
import { employee } from '../Entity/employee'

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(employee) private readonly employeeRepository: Repository<employee>,
        @InjectRepository(admin) private readonly adminRepository: Repository<admin>
    ) { }

    async resetPass(body:any,email:string){
        if(!body.old_password || !body.new_password || !body.confirm_password){
            return{
                code:400,
                message:'Please fill all fields',
            }
        }
        
    }
}
