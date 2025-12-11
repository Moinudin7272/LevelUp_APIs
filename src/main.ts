// main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,        // removes fields not in DTO
      forbidNonWhitelisted: false,
      transform: true,        // converts payloads into DTO instances
    }),
  );

  await app.listen(3000);
}
bootstrap();
