import { INestApplication } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { knife4jSetup } from 'nestjs-knife4j'

export const generateDocmment = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('server example')
    .setDescription('The API description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  knife4jSetup(app, {
    urls: [
      {
        name: '1.X版本',
        url: `/api-json`,
        swaggerVersion: '3.0',
        location: `/api-json`
      }
    ]
  })
}
