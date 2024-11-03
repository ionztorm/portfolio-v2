'use client';

import { Portal } from '@/components/utility/portal';
import { BurgerButton } from '@/features/homepage/sections/navbar/components/burger-button';
import { NavList } from '@/features/homepage/sections/navbar/components/nav-list';
import { NavLinks } from '@/features/homepage/sections/navbar/lib/paths';
import { useViewport } from '@/hooks/useViewport';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickLink = () => setIsOpen(false);
  // check if screen size is mobile
  const isMobile = useViewport('sm');

  if (isMobile === null) return null;

  return (
    <nav
      className='
            w-full
            flex justify-end sm:justify-between items-center
        '>
      {isMobile && isOpen && (
        <Portal parent={document.body} className='h-[100dvh] fixed top-0 left-0 w-full'>
          <NavList list={NavLinks} isMobile={isMobile} onClickLink={onClickLink} />
        </Portal>
      )}
      {!isMobile && <NavList list={NavLinks} isMobile={isMobile} />}
      {isMobile && <BurgerButton isOpen={isOpen} onClick={setIsOpen} />}
    </nav>
  );
};
