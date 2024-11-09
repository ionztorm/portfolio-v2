'use client';

import { Container } from '@/components/utility/container';
import { CopyEmailButton } from '@/features/homepage/sections/contact/components/copy-email-button';
import { SocialLink } from '@/features/homepage/sections/contact/components/social-links';
import { SocialLinks } from '@/features/homepage/sections/contact/lib/data';

export const Contact = () => {
	const email = 'hello@leonlonsdale.dev';

	const SocialList = Object.entries(SocialLinks).map(([key, { url, icon }]) => (
		<SocialLink key={key} url={url} icon={icon} />
	));

	return (
		<Container
			shouldAnimate={true}
			className='relative grid w-full max-w-6xl gap-3 py-10 text-center'
		>
			<p className='text-xl font-medium text-hero-subtext md:text-2xl lg:text-3xl'>
				Drop me a message...
			</p>
			<CopyEmailButton email={email} />
			<p className='text-xl font-medium text-hero-subtext md:text-2xl lg:text-3xl'>
				or give me a follow
			</p>
			<div className='flex w-full items-center justify-center gap-2'>{SocialList}</div>
		</Container>
	);
};
