import { envSchema } from './schema-env-variables';

export const clientEnv = envSchema.parse({
	NEXT_PUBLIC_CONTACT_EMAIL: process.env['NEXT_PUBLIC_CONTACT_EMAIL'],
});
