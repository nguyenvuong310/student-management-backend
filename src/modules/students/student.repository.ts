import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';

import { Student } from './entities/student.entity';

@Injectable()
export class StudentsRepository {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async findOne(id: string): Promise<Student> {
    return this.studentRepository.findOne({
      where: { id },
    });
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }
}
