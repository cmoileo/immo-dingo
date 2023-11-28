import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 8000
  app.setGlobalPrefix('api', {
    exclude: [{path: '/', method: RequestMethod.GET}]
  })
  await app.listen(PORT);
}
bootstrap();
