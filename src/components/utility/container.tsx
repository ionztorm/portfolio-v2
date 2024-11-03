import { ContainerProps } from '@/lib/types';
import { cn } from '@/utils/cn';

export const Container = ({ children, as: Component = 'div', className }: ContainerProps) => {
	return <Component className={cn('mx-auto', className)}>{children}</Component>;
};
