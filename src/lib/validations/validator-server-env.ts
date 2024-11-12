import { envSchema } from './schema-env-variables';

export const env = envSchema.parse(process.env);
