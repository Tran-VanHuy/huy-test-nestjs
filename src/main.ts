import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  if (process.env.NODE_ENV === "development") {

    const config = new DocumentBuilder()
      .setTitle('SEIKATSUDO')
      .setDescription('The SEIKATSUDO API description')
      .setVersion('1.0')
      .addTag('cats')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }


  await app.listen(process.env.PORT || 3000, () => {

    console.log(`Server is running on PORT: http://localhost:${process.env.PORT}/api`);
    
  });
}
bootstrap();
