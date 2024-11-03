import type { PropsWithChildren } from 'react';
import { twScreens } from '@/hooks/use-viewport';

export type TScreenSizes = keyof typeof twScreens;
export type ChildrenProps = Readonly<PropsWithChildren>;

export type UseLockBodyScroll = (isLocked: boolean) => void;

export type ContainerProps = {
	children: React.ReactNode;
	as?: React.ElementType;
	className?: string;
};

export type SectionHeaderProps = Readonly<{
	variant: 'main' | 'sub';
}> &
	ChildrenProps;

export type SectionProps = {
	children: React.ReactNode;
	className?: string;
	id?: string;
};
