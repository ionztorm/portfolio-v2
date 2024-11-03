import { useEffect, useState } from 'react';

import tailwindConfig from '@/../tailwind.config';
import { TScreenSizes } from '@/lib/types';
import resolveConfig from 'tailwindcss/resolveConfig';

const twConfig = resolveConfig(tailwindConfig);
export const twScreens = twConfig.theme.screens;

const breakpoints = Object.fromEntries(
  Object.entries(twScreens).map(([key, value]) => [
    key,
    Number.parseInt(value.replace("px", ""), 10),
  ]),
);

export function useViewport(breakpoint: TScreenSizes) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (breakpoints[breakpoint] !== undefined) setIsMobile(window.innerWidth < breakpoints[breakpoint]);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}
