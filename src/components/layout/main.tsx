import { Section } from '@/components/utility/section';
import { About } from '@/features/homepage/sections/about/about';
import { Contact } from '@/features/homepage/sections/contact/contact';
import { Hero } from '@/features/homepage/sections/hero/hero';
import { Projects } from '@/features/homepage/sections/projects/projects';
import { Skills } from '@/features/homepage/sections/skills/skills';

export const Main = () => {
	return (
		<main>
			<Section
				id='hero'
				className='grid h-[calc(100dvh-40px)] place-content-center place-items-center'
			>
				<Hero />
			</Section>
			<Section id='about' className='grid place-items-center bg-background-secondary pb-72 pt-36'>
				<About />
			</Section>
			<Section id='skills' className='-mt-72 grid place-items-center py-36'>
				<Skills />
			</Section>
			<Section
				id='projects'
				className='grid place-items-center bg-background-secondary pb-72 pt-36'
			>
				<Projects />
			</Section>
			<Section
				id='contact'
				className='-mt-[15.5rem] grid place-items-center py-36 md:-mt-64 lg:-mt-[17rem]'
			>
				<Contact />
			</Section>
		</main>
	);
};
