export const SALT_ROUNDS = 10;

export enum AuthError {
  USER_EXISTS = 'User already exists',
  WRONG_PASSWORD = 'Wrong password',
  NOT_FOUND = 'User not found',
}
