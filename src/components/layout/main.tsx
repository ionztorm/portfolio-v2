import { Section } from '@/components/utility/section';
import { About } from '@/features/homepage/sections/about/about';
import { Hero } from '@/features/homepage/sections/hero/hero';
import { Projects } from '@/features/homepage/sections/projects/projects';
import { Skills } from '@/features/homepage/sections/skills/skills';

export const Main = () => {
	// TODO: Update bg colours
	return (
		<main>
			<Section id='hero' className='grid h-[calc(100dvh-40px)] place-items-center'>
				<Hero />
			</Section>
			<Section id='about' className='grid place-items-center bg-gray-50 pb-72 pt-36'>
				<About />
			</Section>
			<Section id='skills' className='-mt-72 grid place-items-center py-36'>
				<Skills />
			</Section>
			<Section id='projects' className='grid place-items-center bg-gray-50 pb-36 pt-36'>
				<Projects />
			</Section>
		</main>
	);
};
