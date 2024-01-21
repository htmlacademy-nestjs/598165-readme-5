import { ConfigType, registerAs } from '@nestjs/config';
import { DEFAULT_APPLICATION_PORT, Environment } from './application/application.const';
import { ApplicationValidation } from './application/application.validation';
import { plainToClass } from 'class-transformer';

async function getAppConfig():Promise<ApplicationValidation> {
  const config = plainToClass(ApplicationValidation, {
    environment: process.env.NODE_ENV as Environment,
    port: parseInt(process.env.PORT || `${DEFAULT_APPLICATION_PORT}`, 10)
  });
  await config.validate();

  return config;
}

export default registerAs('app', async (): Promise<ConfigType<typeof getAppConfig>> => {return getAppConfig()})
