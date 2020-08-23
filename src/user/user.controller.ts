import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get()
  async showAllUser() {
    return await this.userService.showAll()
  }

  @Post('login')
  login() {
    this.userService.login()
  }

  @Post('register')
  register() {
    return this.userService.register()
  }
}
