'use client';

import { SectionHeader } from '@/components/ui/section-heading';
import { Container } from '@/components/utility/container';
import { SkillList } from '@/features/homepage/sections/skills/components/skill-list';
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll';
import { DEFAULT_ANIMATION_TIME } from '@/lib/constants';
import { cn } from '@/utils/cn';

export const Skills = () => {
	const { ref, animationClasses } = useAnimateOnScroll('right', DEFAULT_ANIMATION_TIME);
	return (
		<Container
			ref={ref}
			as='article'
			className={cn(
				'w-full max-w-3xl rounded-md border border-skills-border bg-skills-background p-10 text-center shadow-md',
				animationClasses,
			)}
		>
			<SectionHeader variant='main'>Skills</SectionHeader>
			<SectionHeader variant='sub'>Languages</SectionHeader>
			<SkillList filter='language' />
			<SectionHeader variant='sub'>Frameworks</SectionHeader>
			<SkillList filter='lib/framework' />
			<SectionHeader variant='sub'>Backend</SectionHeader>
			<SkillList filter='database/services' />
			<SectionHeader variant='sub'>Runtimes</SectionHeader>
			<SkillList filter='runtime' />
		</Container>
	);
};
