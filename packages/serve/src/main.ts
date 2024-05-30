import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { generateDocmment } from './config/doc'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })

  generateDocmment(app)

  await app.listen(3000)
}
bootstrap()
