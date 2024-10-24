import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { admin } from '../Entity/adminEntity';
import { employee } from '../Entity/employee'

@Injectable()
export class adminService {
  constructor(
    @InjectRepository(employee) private readonly employeeRepository: Repository<employee>
  ) { }


  async getAllEmp(): Promise<any> {
    const emp = await this.employeeRepository.find();
    return { emp }
  }
}


