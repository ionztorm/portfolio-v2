import Link from 'next/link';
import { SocialLinkProps } from '@/features/homepage/sections/contact/types/types';

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
