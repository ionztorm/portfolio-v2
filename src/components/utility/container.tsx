'use client';

import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll';
import { ContainerProps } from '@/lib/types';
import { cn } from '@/utils/cn';

export const Container = ({
	children,
	as: Component = 'div',
	className,
	shouldAnimate = false,
}: ContainerProps) => {
	const { ref, isVisible, scrollDirection } = useAnimateOnScroll(shouldAnimate);

	const animationClass =
		scrollDirection === 'down'
			? 'animate-fadeInSlideUpAndGrow'
			: scrollDirection === 'up'
				? 'animate-fadeInSlideDownAndGrow'
				: '';

	return (
		<Component
			ref={ref}
			className={cn(
				'mx-auto',
				className,
				isVisible && shouldAnimate ? animationClass : !shouldAnimate ? 'opacity-100' : 'opacity-0',
			)}
		>
			{children}
		</Component>
	);
};
