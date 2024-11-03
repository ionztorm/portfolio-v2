import Link from 'next/link';
import type { NavListProps } from '@/features/homepage/sections/navbar/types/types';
import { cn } from '@/utils/cn';

export const NavList = ({ list, className, isMobile, onClickLink, isOpen }: NavListProps) => {
	const NavList = Object.values(list).map((link) => (
		<li key={link.path}>
			<Link
				href={link.path}
				className='transition-all duration-500 hover:text-white hover:underline'
				onClick={onClickLink}
			>
				{link.label}
			</Link>
		</li>
	));

	return (
		<ul
			className={cn(
				'fixed right-0 top-0 flex h-[100dvh] w-full flex-col items-center justify-center gap-3 bg-gray-950 text-gray-50 sm:relative sm:flex sm:h-auto sm:flex-row sm:justify-start sm:border-l sm:border-gray-400 sm:pl-5',
				className,
				{
					hidden: isMobile && !isOpen,
				},
			)}
		>
			{NavList}
		</ul>
	);
};
