import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< Updated upstream
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
=======
import { LoggingInterceptor } from './app.service';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import supertokens from "supertokens-node";
import { SupertokensExceptionFilter } from "./auth/auth.filter";
>>>>>>> Stashed changes

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
<<<<<<< Updated upstream
  app.setViewEngine('hbs');
  const port = process.env.PORT || 3000;
  await app.listen(port);
=======
  app.setViewEngine('pug');
  app.useGlobalInterceptors(new LoggingInterceptor());
  const config = new DocumentBuilder()
    .setTitle('NestJS Swagger')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: ['http://localhost:1234'],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });

  app.useGlobalFilters(new SupertokensExceptionFilter());

  await app.listen(process.env.PORT || 1234);
>>>>>>> Stashed changes
}
bootstrap();
