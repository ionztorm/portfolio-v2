import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi2';

export const Hero = () => {
	return (
		<>
			<h1 className='mb-8 grid max-w-prose gap-2 text-center'>
				<span className='animate-fadeInFromTop font-extrabold text-4xl tracking-tighter md:text-6xl lg:text-7xl'>
					Leon Lonsdale
				</span>
				<span className='animate-fadeIn font-medium text-hero-subtext text-xl md:text-2xl lg:text-3xl'>
					Fullstack Engineer
				</span>
				<span className='animate-fadeInFromBottom text-hero-overview text-sm md:text-lg lg:text-xl'>
					Building clean, acessible user experiences using cutting edge technologies
				</span>
			</h1>
			<Link
				href='#about'
				className='grid place-items-center rounded-md px-4 py-2 font-medium transition-all duration-300 hover:bg-neutral-300 dark:hover:bg-neutral-800'
			>
				<span>Read More</span>
				<HiChevronDown className='animate-bounce' />
			</Link>
		</>
	);
};
