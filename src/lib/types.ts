import type { PropsWithChildren } from 'react';
import { twScreens } from '@/hooks/use-viewport';

export type TScreenSizes = keyof typeof twScreens;
export type ChildrenProps = Readonly<PropsWithChildren>;

export type UseLockBodyScroll = (isLocked: boolean) => void;

export type ContainerProps = Readonly<{
	children: React.ReactNode;
	as?: React.ElementType;
	className?: string;
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
