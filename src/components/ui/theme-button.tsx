import type { ChildrenProps } from '@/lib/types';
import { cn } from '@/utils/cn';

type ThemeButtonProps = {
	title: string;
	desc: string;
	onClick: () => void;
	active: boolean;
} & ChildrenProps;

export const ThemeButton = ({ children, title, desc, onClick, active }: ThemeButtonProps) => {
	return (
		<button
			type='button'
			aria-label={title}
			aria-roledescription={desc}
			className={cn(
				'grid aspect-square size-6 place-content-center rounded-full border border-theme-button-border p-[1px] text-theme-icon-colour hover:border-theme-button-border-active hover:text-theme-icon-colour-active',
				{
					'border-theme-button-border-active text-theme-icon-colour-active': active,
				},
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
