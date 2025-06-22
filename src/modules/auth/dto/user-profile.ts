import { ApiProperty } from '@nestjs/swagger';

export class UserProfileDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' })
  accessToken: string;

  @ApiProperty({ example: 'admin' })
  role: string;

  constructor(accessToken: string, role: string) {
    this.accessToken = accessToken;
    this.role = role;
  }
}
