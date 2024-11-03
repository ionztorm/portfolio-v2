import { SectionHeaderProps } from '@/lib/types';

export const SectionHeader = ({ children, variant }: SectionHeaderProps) => {
	const variants = {
		main: 'text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-5',
		sub: 'text-xl md:text-2xl lg:text-3xl font-medium',
	};

	const Component = variant === 'main' ? 'h2' : 'h3';

	return <Component className={variants[variant]}>{children}</Component>;
};
