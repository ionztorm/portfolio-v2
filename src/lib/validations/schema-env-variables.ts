import { z } from 'zod';

export const envSchema = z.object({
	NEXT_PUBLIC_CONTACT_EMAIL: z.string().email().min(5),
});

//export const env = envSchema.parse(process.env);
export const clientEnv = envSchema.parse({
	NEXT_PUBLIC_CONTACT_EMAIL: process.env['NEXT_PUBLIC_CONTACT_EMAIL'],
});
//console.log('env in schema: ', env);
export type Env = z.infer<typeof envSchema>;
