import { Module } from '@nestjs/common'
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { PostModule } from './post/post.module'
import { TransformInterceptor } from './config/transform.interceptor'
import { ErrorsInterceptor } from './config/errors.interceptor'
import { PrismaService } from './prisma/prisma.service'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { JwtAuthGuard } from './auth/jwt-auth.guard'

@Module({
  imports: [UserModule, PostModule, AuthModule, UsersModule],
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
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
    AppService,
    PrismaService
  ]
})
export class AppModule {}
