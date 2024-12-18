import type { NavListProps } from '@/features/homepage/sections/navbar/types/types';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export const NavList = ({ list, className, isMobile, onClickLink, isOpen }: NavListProps) => {
	const NavItems = Object.values(list).map((link, index) => (
		<li
			key={link.path}
			className='animate-fadeInFromTop opacity-0'
			style={{ animationDelay: `${index * 0.2}s` }} // Stagger animation by 0.1s
		>
			<Link
				href={link.path}
				className='transition-all duration-500 hover:text-navbar-text-hover hover:underline'
				onClick={onClickLink}
			>
				{link.label}
			</Link>
		</li>
	));

	return (
		<ul
			className={cn(
				'fixed top-0 right-0 flex h-[100dvh] w-full flex-col items-center justify-center gap-3 bg-navbar-background text-navbar-text sm:relative sm:flex sm:h-auto sm:flex-row sm:justify-start sm:border-navbar-border sm:border-l sm:pl-5',
				className,
				{
					hidden: isMobile && !isOpen,
				},
			)}
		>
			{NavItems}
		</ul>
	);
};
