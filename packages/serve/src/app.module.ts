import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { PostModule } from './post/post.module'
import { TransformInterceptor } from './config/transform.interceptor'
import { ErrorsInterceptor } from './config/errors.interceptor'
import { PrismaService } from './prisma/prisma.service'

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor
    },
    AppService,
    PrismaService
  ]
})
export class AppModule {}
