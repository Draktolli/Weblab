import { Controller, Get, Session, UseGuards } from "@nestjs/common";
import { AppService } from './app.service';
<<<<<<< Updated upstream
=======
import { Render } from '@nestjs/common';
import { SessionContainer } from "supertokens-node/lib/build/recipe/session/faunadb";
import ThirdParty from "supertokens-node/recipe/thirdparty";
import { optionalAuthGuard } from "./auth/optionalAuth.guard";
>>>>>>> Stashed changes

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
<<<<<<< Updated upstream
  getHello(): string {
    return this.appService.getHello();
=======
  @Render('index') // <= Название вашего представления
  @UseGuards(optionalAuthGuard)
  async index(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/login')
  @Render('login')
  @UseGuards(optionalAuthGuard)
  async Login (@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/signin')
  @Render('signin') // <= Название вашего представления
  @UseGuards(optionalAuthGuard)
  async asda(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Arcanas')
  @Render('Arcanas') // <= Название вашего представления
  @UseGuards(optionalAuthGuard)
  async login2(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Comments')
  @Render('Comments') // <= Название вашего представления
  @UseGuards(optionalAuthGuard)
  async login3(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Garant')
  @Render('Garant') // <= Название вашего представления
  @UseGuards(optionalAuthGuard)
  async login4(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Immortals')
  @Render('Immortals') // <= Название вашего представления
  @UseGuards(optionalAuthGuard)
  async login5(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Legendaries')
  @Render('Legendaries') // <= Название вашего представления
  @UseGuards(optionalAuthGuard)
  async login6(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Questions_and_Answers')
  @Render('Questions_and_Answers') // <= Название вашего представления
  @UseGuards(optionalAuthGuard)
  async login7(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Sets')
  @Render('Sets') // <= Название вашего представления
  @UseGuards(optionalAuthGuard)
  async login8(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Suggestions')
  @Render('Suggestions') // <= Название вашего представления
  @UseGuards(optionalAuthGuard)
  async login9(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/auth/callback/github')
  @Render('callback')
  getCallback() {
    return { user: 'You are logged already' };
>>>>>>> Stashed changes
  }
}
