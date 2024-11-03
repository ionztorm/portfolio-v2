import { NavLinks } from '@/features/homepage/sections/navbar/lib/paths';

export type TNavLinks = typeof NavLinks;

export type BurgerButtonProps = {
	isOpen: boolean;
	onClick: (isOpen: boolean) => void;
};

export type NavListProps = {
	list: TNavLinks;
	className?: string;
	isMobile: boolean;
	onClickLink?: () => void;
	isOpen: boolean;
};
