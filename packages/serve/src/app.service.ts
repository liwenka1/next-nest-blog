import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello() {
    return {
      code: 200,
      message: '我懂了 好像不能用 src 当路径 必须用 ../ 来当路径 我真的人傻了 还有这样的问题居然'
    }
  }
}
