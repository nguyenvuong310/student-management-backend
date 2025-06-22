import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { StudentsService } from './students.services';
import { AuthorRole } from 'src/decorator/author-role.decorator';
import { Role } from 'src/enums/role';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Get()
  @AuthorRole(Role.ADMIN)
  @ApiOperation({ summary: 'Get all students' })
  async findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  @AuthorRole(Role.USER)
  @ApiOperation({ summary: 'Get student by registration number' })
  async findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }
}
