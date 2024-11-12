import { z } from 'zod';

export const envSchema = z.object({
	NEXT_PUBLIC_CONTACT_EMAIL: z.string().email().min(5),
});
