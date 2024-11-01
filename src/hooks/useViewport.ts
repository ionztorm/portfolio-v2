import { useState, useEffect } from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config";
import { TScreenSizes } from "@/lib/types";

const twConfig = resolveConfig(tailwindConfig);
export const twScreens = twConfig.theme.screens;

const breakpoints = Object.fromEntries(
  Object.entries(twScreens).map(([key, value]) => [
    key,
    Number.parseInt(value.replace("px", ""), 10),
  ])
);

export function useViweport(breakpoint: TScreenSizes) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (breakpoints[breakpoint] !== undefined)
        setIsMobile(window.innerWidth < breakpoints[breakpoint]);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}
