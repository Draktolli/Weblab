import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService, LoggingInterceptor } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { AppGateway } from "./app.gateway";
import { XMLMiddleware } from './xml.middleware';

@Module({
  imports: [ AuthModule.forRoot({
    // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
    connectionURI: "https://try.supertokens.com",
    // apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
    appInfo: {
      // Learn more about this on https://supertokens.com/docs/thirdparty/appinfo
      appName: "webblab",
      apiDomain: "http://localhost:1234",
      websiteDomain: "http://localhost:1234",
      apiBasePath: "/api",
      websiteBasePath: "/auth"
    },
  }),UserModule, ProductModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }, AppGateway
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(XMLMiddleware).forRoutes({
      path: 'wework/*',
      method: RequestMethod.POST,
    });
  }
}
