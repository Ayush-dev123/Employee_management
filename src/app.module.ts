
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';
import { SuperAdminController } from './super_admin/super_admin.controller';
import { SuperAdminService } from './super_admin/super_admin.service';
import { SuperAdminModule } from './super_admin/super_admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { admin } from './Entity/adminEntity';
import { employee } from './Entity/employee';
import { EmployeeDetail } from './Entity/employeeDetail';
import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { HelpersService } from './helpers/helpers.service';
import { super_admin_table } from './Entity/superadminEntity';
import { CommonController } from './common/common.controller';
import { CommonService } from './common/common.service';
import { CommonModule } from './common/common.module';
import { RedisModule } from './Redis/redis.module'


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres', 
    host: 'localhost', 
    port: 5432, 
    username: 'postgres', 
    password: 'Ayush@123', 
    database: 'employee_management', 
    synchronize: true,
    entities: [admin,employee,EmployeeDetail,super_admin_table], 
  }),AdminModule,EmployeeModule,SuperAdminModule, AuthModule, CommonModule,RedisModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
