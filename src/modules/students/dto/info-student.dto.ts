import { IsString } from 'class-validator';
import { Student } from '../entities/student.entity';

export class InfoStudentDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  birth_date: string;

  @IsString()
  university: string;

  constructor(student: Student) {
    this.id = student.id;
    this.name = student.name;
    const date = new Date(student.birth_date);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    this.birth_date = `${day}/${month}/${year}`;
    this.university = student.university;
  }
}
