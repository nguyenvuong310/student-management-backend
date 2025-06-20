import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { StudentsService } from './students.services';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all students' })
  async findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get student by registration number' })
  async findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }
}
