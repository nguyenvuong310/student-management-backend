import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

import { Request } from 'express';

import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

import { UserProfileDto } from './dto/user-profile';
import { Public } from 'src/decorator/public.decorator';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginDto })
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 201, description: 'User login', type: UserProfileDto })
  async hanldeLogin(@Req() req: Request): Promise<UserProfileDto> {
    const user = await this.authService.login(req?.user);
    return user;
  }
}
