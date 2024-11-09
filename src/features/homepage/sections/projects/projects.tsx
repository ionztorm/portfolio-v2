import { SectionHeader } from '@/components/ui/section-heading';
import { Container } from '@/components/utility/container';
import { Project } from '@/features/homepage/sections/projects/components/project';

export const Projects = () => {
	return (
		<Container shouldAnimate={true} as='article' className='grid w-full max-w-7xl p-4 text-center'>
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
