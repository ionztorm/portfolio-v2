import type { SocialLinkProps } from '@/features/homepage/sections/contact/types/types';
import Link from 'next/link';

export const SocialLink = ({ url, icon }: SocialLinkProps) => {
	const Icon = icon;
	return (
		<Link
			href={url}
			className='sm:transition-colors sm:duration-300 sm:hover:text-gray-700'
			target='_blank'
		>
			<Icon className='size-8 md:size-12' />
		</Link>
	);
};
