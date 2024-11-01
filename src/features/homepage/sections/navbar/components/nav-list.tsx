import Link from "next/link";
import type { NavListProps } from "@/features/homepage/sections/navbar/types/types";
import { cn } from "@/utils/cn";

export const NavList = ({
  list,
  className,
  isMobile,
  onClickLink,
}: NavListProps) => {
  const classes = isMobile
    ? "flex-col gap-3 w-full items-center justify-center h-[100dvh] absolute top-0 right-0 text-gray-50 bg-gray-950"
    : "pl-5 border-l border-gray-400";

  const NavList = Object.values(list).map((link) => (
    <li key={link.path}>
      <Link
        href={link.path}
        className="hover:underline hover:text-white transition-all duration-500"
        onClick={onClickLink}
      >
        {link.label}
      </Link>
    </li>
  ));
  return <ul className={cn("flex gap-3", className, classes)}>{NavList}</ul>;
};
