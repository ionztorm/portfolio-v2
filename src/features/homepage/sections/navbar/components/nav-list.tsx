import Link from "next/link";
import { TNavLinks } from "@/features/homepage/sections/navbar/types/types";

export type NavListProps = {
  list: TNavLinks;
};

export const NavList = ({ list }: NavListProps) => {
  const NavList = Object.values(list).map((link) => (
    <li key={link.path}>
      <Link href={link.path} className="hover:underline">
        {link.label}
      </Link>
    </li>
  ));
  return <ul className="flex gap-3">{NavList}</ul>;
};
