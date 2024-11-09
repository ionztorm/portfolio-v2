'use client';

import { SectionHeader } from '@/components/ui/section-heading';
import { Container } from '@/components/utility/container';
import { Project } from '@/features/homepage/sections/projects/components/project';
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll';
import { DEFAULT_ANIMATION_TIME } from '@/lib/constants';
import { cn } from '@/utils/cn';

export const Projects = () => {
	const { ref, animationClasses } = useAnimateOnScroll('left', DEFAULT_ANIMATION_TIME);
	return (
		<Container
			ref={ref}
			as='article'
			className={cn('grid w-full max-w-7xl p-4 text-center', animationClasses)}
		>
			<SectionHeader variant='main' className='mb-10'>
				Projects
			</SectionHeader>
			<div className='grid gap-2 sm:grid-cols-2'>
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</Container>
	);
};
