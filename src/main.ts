import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const swaggerOptions = new DocumentBuilder()
    .setTitle('SOVRUN TOKEN API')
    .addServer(`${process.env.HOSTNAME}/api`)
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions, {});
  SwaggerModule.setup('api/docs', app, document);
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
