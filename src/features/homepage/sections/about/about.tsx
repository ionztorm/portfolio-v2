'use client';

import { SectionHeader } from '@/components/ui/section-heading';
import { Container } from '@/components/utility/container';
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll';
import { DEFAULT_ANIMATION_TIME } from '@/lib/constants';
import { cn } from '@/utils/cn';

export const About = () => {
	const { ref, animationClasses } = useAnimateOnScroll('left', DEFAULT_ANIMATION_TIME);
	return (
		<Container
			ref={ref}
			as='article'
			className={cn(
				'grid max-w-3xl gap-3 p-4 text-center text-sm opacity-0 md:text-lg lg:gap-7 lg:text-xl',
				animationClasses,
			)}
		>
			<SectionHeader variant='main'>About me</SectionHeader>
			<p className='leading-relaxed'>
				I&apos;m Leon, a fullstack web developer from Wirral, UK. Following eye surgery back in
				2022, I decided to try my hand at developing basic webpages using HTML and CSS. I bought
				some courses on Udemy to get started and I&apos;m still in the rabbit hole.
			</p>
			<p className='leading-relaxed'>
				Fast forward to today, and I&apos;ve pursued and completed courses in many modern
				technologies that I&apos;ve found interesting, including TypeScript, React, GoLang, NextJS,
				and most recently, Convex.
			</p>
			<p className='leading-relaxed'>
				When I&apos;m not at the computer, you&apos;ll find me watching Formula 1, on eBay buying F1
				collectable models, outdoors walking, or watching Sci-Fi movies.
			</p>
		</Container>
	);
};
