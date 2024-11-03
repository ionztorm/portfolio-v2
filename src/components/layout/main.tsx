import { Section } from '@/components/utility/section';
import { About } from '@/features/homepage/sections/about/about';
import { Hero } from '@/features/homepage/sections/hero/hero';
import { Skills } from '@/features/homepage/sections/skills/skills';

export const Main = () => {
	return (
		<main>
			<Section id='hero' className='grid h-[calc(100dvh-40px)] place-content-center'>
				<Hero />
			</Section>
			<Section id='about' className='grid place-content-center bg-gray-50 pb-72 pt-36'>
				<About />
			</Section>
			<Section id='skills' className='-mt-72 grid place-content-center py-36'>
				<Skills />
			</Section>
		</main>
	);
};
