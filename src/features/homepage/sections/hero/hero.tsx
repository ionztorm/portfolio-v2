import Link from 'next/link';

export const Hero = () => {
	return (
		<>
			<h1 className='mb-8 grid max-w-prose gap-2 text-center'>
				<span className='animate-fadeInFromTop text-4xl font-extrabold tracking-tighter md:text-6xl lg:text-7xl'>
					Leon Lonsdale
				</span>
				<span className='animate-fadeIn text-xl font-medium text-hero-subtext md:text-2xl lg:text-3xl'>
					Fullstack Engineer
				</span>
				<span className='animate-fadeInFromBottom text-sm text-hero-overview md:text-lg lg:text-xl'>
					Building clean, acessible user experiences using cutting edge technologies
				</span>
			</h1>
			<Link
				href='#about'
				className='rounded-md border px-4 py-2 transition-all duration-300 hover:bg-neutral-300 dark:border-neutral-700 dark:hover:bg-neutral-800'
			>
				Read More
			</Link>
		</>
	);
};
