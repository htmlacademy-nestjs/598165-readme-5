import { ConfigType, registerAs } from '@nestjs/config';
import { plainToClass } from 'class-transformer';
import { DEFAULT_MONGO_PORT } from './mongodb/mongo.const';
import { MongoValidation } from './mongodb/mongo.validate';

export interface MongoConfig {
  name: string
  host: string
  port: number
  user: string
  password: string
  authBase: string
}

async function getDbConfig(): Promise<MongoValidation> {
  const config = plainToClass(MongoValidation, {
    name: process.env.MONGO_DB,
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT ? parseInt(process.env.MONGO_PORT, 10) : DEFAULT_MONGO_PORT,
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    authBase: process.env.MONGO_AUTH_BASE
  });
  await config.validate();
  return config;
}

export default registerAs('mongo', async (): Promise<ConfigType<typeof getDbConfig>> => getDbConfig());
