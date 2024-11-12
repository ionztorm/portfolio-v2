import { z } from 'zod';
import { envSchema } from './schema-env-variables';

export type Env = z.infer<typeof envSchema>;
