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
  @Get('/Arcanas')
  @Render('Arcanas') // <= Название вашего представления
  login2() {
    return { user: 'Ку молодой' }; // Модель представления
  }
  @Get('/Comments')
  @Render('Comments') // <= Название вашего представления
  login3() {
    return { user: 'Ку молодой' }; // Модель представления
  }
  @Get('/Garant')
  @Render('Garant') // <= Название вашего представления
  login4() {
    return { user: 'Ку молодой' }; // Модель представления
  }
  @Get('/Immortals')
  @Render('Immortals') // <= Название вашего представления
  login5() {
    return { user: 'Ку молодой' }; // Модель представления
  }
  @Get('/Legendaries')
  @Render('Legendaries') // <= Название вашего представления
  login6() {
    return { user: 'Ку молодой' }; // Модель представления
  }
  @Get('/Questions_and_Answers')
  @Render('Questions_and_Answers') // <= Название вашего представления
  login7() {
    return { user: 'Ку молодой' }; // Модель представления
  }
  @Get('/Sets')
  @Render('Sets') // <= Название вашего представления
  login8() {
    return { user: 'Ку молодой' }; // Модель представления
  }
  @Get('/Suggestions')
  @Render('Suggestions') // <= Название вашего представления
  login9() {
    return { user: 'Ку молодой' }; // Модель представления
  }
}
