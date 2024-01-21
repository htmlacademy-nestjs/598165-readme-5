import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import applicationConfig from './application.config';
import mongoConfig from './mongo.config';

const ENV_FILE_PATH = 'apps/account/account.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [mongoConfig, applicationConfig],
      envFilePath: ENV_FILE_PATH,
    }),
    ]
})
export class ConfigAccountModule {}
