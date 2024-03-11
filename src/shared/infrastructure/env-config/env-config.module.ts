import { DynamicModule, Module } from '@nestjs/common'
import {
  ConfigModule,
  ConfigModuleOptions,
  ConfigService,
} from '@nestjs/config'
import { EnvConfigService } from './env-config.service'
import { join } from 'node:path'

@Module({
  providers: [ConfigService, EnvConfigService],
  exports: [],
})
export class EnvConfigModule extends ConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    return super.forRoot({
      ...options,
      envFilePath: [
        join(__dirname, `../../../../.env.${process.env.NODE_ENV}`),
      ],
    })
  }
}
