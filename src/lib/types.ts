import type { MutableRefObject, PropsWithChildren } from 'react';
import type { IconType } from 'react-icons';
import { twScreens } from '@/hooks/use-viewport';

export type TScreenSizes = keyof typeof twScreens;
export type ChildrenProps = Readonly<PropsWithChildren>;

export type Theme = 'light' | 'dark' | 'system';
export type UseLockBodyScroll = (isLocked: boolean) => void;

export type TIconType = IconType | ((props: { className?: string }) => JSX.Element | null);
export type TThemeContext = {
	theme: Theme;
	toggleTheme: (mode: Theme) => void;
};

export type TThemeContextProviderProps = {
	children: React.ReactNode;
};

export type ContainerProps = Readonly<{
	children: React.ReactNode;
	as?: React.ElementType;
	className?: string;
	ref?: MutableRefObject<HTMLElement | null>;
}>;

export type SectionHeaderProps = Readonly<{
	variant: 'main' | 'sub';
	className?: string;
}> &
	ChildrenProps;

export type SectionProps = Readonly<{
	children: React.ReactNode;
	className?: string;
	id?: string;
}>;
