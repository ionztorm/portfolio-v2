'use client';

import type { ContainerProps } from '@/lib/types';
import { cn } from '@/utils/cn';

export const Container = ({ children, as: Component = 'div', className, ref }: ContainerProps) => {
	return (
		<Component ref={ref} className={cn('mx-auto', className)}>
			{children}
		</Component>
	);
};
