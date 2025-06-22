import { Inject, Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { ConfigService } from '@nestjs/config';

import { UserProfileDto } from './dto/user-profile';

@Injectable()
export class AuthService {
  constructor(
    @Inject(JwtService)
    private jwtService: JwtService,
    @Inject(ConfigService)
    private configService: ConfigService,
  ) {}

  async validateUser(username: string, pass: string) {
    if (username === 'admin' && pass === 'admin') {
      return {
        role: 'admin',
      };
    } else if (username === 'user' && pass === 'user') {
      return {
        role: 'user',
      };
    }

    return null;
  }

  async login(user: any): Promise<UserProfileDto> {
    const { role } = user;
    const payload = {
      sub: 'token login',
      iss: 'from server',
      role,
    };

    return new UserProfileDto(this.jwtService.sign(payload), role);
  }
}
