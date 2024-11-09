import { SectionProps } from '@/lib/types';
import { cn } from '@/utils/cn';

export const Section = ({ children, className, id }: SectionProps) => {
	return (
		<section
			id={id}
			className={cn(
				'px-4 transition-opacity duration-700', // Base transition
				className,
			)}
		>
			{children}
		</section>
	);
};
