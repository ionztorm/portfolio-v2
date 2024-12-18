import type { z } from 'zod';
import type { envSchema } from './schema-env-variables';

export type Env = z.infer<typeof envSchema>;
