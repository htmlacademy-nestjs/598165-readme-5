import { IsNumber, IsOptional, IsString, Max, Min, validateOrReject } from 'class-validator';
import { DEFAULT_MONGO_PORT, MAX_PORT, MIN_PORT } from './mongo.const';
import { MongoEnvValidation } from './mongo.messages';

export class MongoValidation {

  @IsString(
    {
      message: MongoEnvValidation.DBNameRequired,
    }
  )
  public name: string;

  @IsString({
    message: MongoEnvValidation.DBHostRequired,
  })
  public host: string;

  @IsNumber({},{
    message: MongoEnvValidation.DBPortRequired,
  })
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  @IsOptional()
  public port?: number = DEFAULT_MONGO_PORT;

  @IsString({
    message: MongoEnvValidation.DBUserRequired,
  })
  public user: string;

  @IsString({
    message: MongoEnvValidation.DBPasswordRequired,
  })
  public password: string;

  @IsString({
    message: MongoEnvValidation.DBAuthBaseRequired,
  })
  public authBase: string;

  public async validate(): Promise<void> {
    await validateOrReject(this);
  }
}
