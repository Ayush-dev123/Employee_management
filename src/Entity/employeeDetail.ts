import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  department: string;

  @Column()
  salary: string;

  @Column()
  joining_date: string;

}
