"use client";

import { useViweport } from "@/hooks/useViewport";
import { NavList } from "@/features/homepage/sections/navbar/components/nav-list";
import { NavLinks } from "@/features/homepage/sections/navbar/lib/paths";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickLink = () => setIsOpen(false);
  // check if screen size is mobile
  const isMobile = useViweport("sm");

  // prevent body from scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav
      className="
            pl-3 
            border-l border-gray-400 border-1
        "
    >
      {isMobile && isOpen && <NavList list={NavLinks} />}
      {!isMobile && <NavList list={NavLinks} />}
    </nav>
  );
};
