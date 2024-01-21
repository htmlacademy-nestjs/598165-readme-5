import { IsIn, IsNumber, IsString, Max, Min, validateOrReject } from 'class-validator';
import { ENVIRONMENTS, MAX_PORT, MIN_PORT } from './application.const';
import { ApplicationEnvValidation } from './application.messages';

export class ApplicationValidation {
  @IsString({
    message: ApplicationEnvValidation.EnvRequired
  })
  @IsIn(ENVIRONMENTS, {message: ApplicationEnvValidation.EnvMismatch})
  environment: string;

  @IsNumber({}, {message: ApplicationEnvValidation.PortRequired})
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  port: number;

  public async validate(): Promise<void> {
    await validateOrReject(this);
  }
}
