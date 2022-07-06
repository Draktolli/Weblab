import { Controller, Get, Session, UseGuards } from "@nestjs/common";
import { AppService } from './app.service';
import { Render } from '@nestjs/common';
import { SessionContainer } from "supertokens-node/lib/build/recipe/session/faunadb";
import ThirdParty from "supertokens-node/recipe/thirdparty";
import { optionalAuthGuard } from "./auth/optionalAuth.guard";

@Controller()
export class AppController {
  @Get()
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
  async asda(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Arcanas')
  @Render('Arcanas') // <= Название вашего представления
  async login2(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Comments')
  @Render('Comments') // <= Название вашего представления
  async login3(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Garant')
  @Render('Garant') // <= Название вашего представления
  async login4(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Immortals')
  @Render('Immortals') // <= Название вашего представления
  async login5(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Legendaries')
  @Render('Legendaries') // <= Название вашего представления
  async login6(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Questions_and_Answers')
  @Render('Questions_and_Answers') // <= Название вашего представления
  async login7(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Sets')
  @Render('Sets') // <= Название вашего представления
  async login8(@Session() session: SessionContainer) {
    if (session != undefined) {
      const userId = session.getUserId();
      const userInfo = await ThirdParty.getUserById(userId);
      return { user: userInfo.email };
    } else return { user: '' };
  }
  @Get('/Suggestions')
  @Render('Suggestions') // <= Название вашего представления
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
  }
}
