import { Logo } from '@/components/ui/logo';
import { Container } from '@/components/utility/container';
import { Navbar } from '@/features/homepage/sections/navbar/navbar';

export const Header = () => {
	return (
		<header className='sticky left-0 top-0 z-40 flex max-h-[40px] items-center bg-navbar-background py-2 text-navbar-text backdrop-blur-md'>
			<Container className='flex w-full max-w-7xl px-4'>
				<Logo />
				<Navbar />
			</Container>
		</header>
	);
};
