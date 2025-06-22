export class InfoUserDto {
  user: string;

  role: string;

  constructor(user: string, role: string) {
    this.user = user;
    this.role = role;
  }
}
