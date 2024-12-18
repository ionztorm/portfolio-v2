import type { SectionProps } from '@/lib/types';
import { cn } from '@/utils/cn';

export const Section = ({ children, className, id }: SectionProps) => {
	return (
		<section className={cn('overflow-hidden px-4', className)} id={id}>
			{children}
		</section>
	);
};
