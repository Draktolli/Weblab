import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index') // <= Название вашего представления
  getIndexPage() {
    return { user: 'Hello!' }; // Модель представления
  }
  @Get('/login')
  @Render('login')
  Login() {
    return {
      user: 'Ку молодой',
    };
  }
  @Get('/signin')
  @Render('signin') // <= Название вашего представления
  asda() {
    return { user: 'Ку молодой' }; // Модель представления
  }
}
