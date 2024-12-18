'use client';

import { ThemeToggle } from '@/components/ui/theme-toggle';
import { ThemeContextProvider } from '@/context/theme-context';
import { BurgerButton } from '@/features/homepage/sections/navbar/components/burger-button';
import { NavList } from '@/features/homepage/sections/navbar/components/nav-list';
import { NavLinks } from '@/features/homepage/sections/navbar/lib/paths';
import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll';
import { useViweport } from '@/hooks/use-viewport';
import { useState } from 'react';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const onClickLink = () => setIsOpen(false);
	// check if screen size is mobile
	const isMobile = useViweport('sm');

	// prevent body from scrolling when mobile menu is open
	useLockBodyScroll(isOpen);

	if (isMobile === null) return null;

	return (
		<nav className='flex w-full items-center justify-end sm:justify-between'>
			<NavList list={NavLinks} isMobile={isMobile} isOpen={isOpen} onClickLink={onClickLink} />

			<ThemeContextProvider>
				<ThemeToggle />
			</ThemeContextProvider>
			{isMobile && <BurgerButton isOpen={isOpen} onClick={setIsOpen} />}
		</nav>
	);
};
