import { Inject, Injectable } from '@nestjs/common';
import { Student } from './entities/student.entity';
import { StudentsRepository } from './student.repository';
import { InfoStudentDto } from './dto/info-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @Inject(StudentsRepository) private studentRepository: StudentsRepository,
  ) {}

  async findOne(id: string): Promise<Student> {
    return this.studentRepository.findOne(id);
  }

  async findAll(): Promise<InfoStudentDto[]> {
    const students = await this.studentRepository.findAll();
    return students.map((student) => new InfoStudentDto(student));
  }
}
