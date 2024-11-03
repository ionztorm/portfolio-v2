import { SectionHeaderProps } from '@/lib/types';
import { cn } from '@/utils/cn';

export const SectionHeader = ({ children, variant, className }: SectionHeaderProps) => {
	const variants = {
		main: 'text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-5',
		sub: 'text-xl md:text-2xl lg:text-3xl font-medium',
	};

	const Component = variant === 'main' ? 'h2' : 'h3';

	return <Component className={cn(variants[variant], className)}>{children}</Component>;
};
