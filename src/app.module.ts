import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvConfigModule } from '@/shared/infrastructure/env-config/env-config.module'
import { UserModule } from '@/modules/user/user.module'
import { AuthService } from './modules/auth/application/services/auth.service'

@Module({
  imports: [EnvConfigModule, UserModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
