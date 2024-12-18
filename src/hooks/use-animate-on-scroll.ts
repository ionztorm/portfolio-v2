import { useEffect, useMemo, useRef, useState } from 'react';

export const useAnimateOnScroll = (direction: 'left' | 'right', duration = 3) => {
	const [isVisible, setIsVisible] = useState<boolean | undefined>(false);
	const ref = useRef<HTMLElement | null>(null);

	// animates every time the element intersects
	// useEffect(() => {
	// 	if (!ref.current) return;
	// 	ref.current.style.transitionDuration = `${duration}s`;
	// 	const observer = new IntersectionObserver(
	// 		([entry]) => {
	// 			setIsVisible(entry?.isIntersecting);
	// 		},
	// 		{
	// 			threshold: 0.1,
	// 		},
	// 	);
	//
	// 	observer.observe(ref.current);
	//
	// 	return () => {
	// 		if (ref.current) {
	// 			observer.unobserve(ref.current);
	// 		}
	// 	};
	// }, [duration]);

	// animate only the first intersection
	useEffect(() => {
		if (!ref.current) return;
		ref.current.style.transitionDuration = `${duration}s`;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					setIsVisible(true);
					observer.disconnect(); // Stop observing after the first intersection
				}
			},
			{
				threshold: 0.1,
			},
		);

		observer.observe(ref.current);

		return () => {
			observer.disconnect(); // Cleanup
		};
	}, [duration]);

	const animationClasses = useMemo(() => {
		return `relative transition-all ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${direction === 'left' ? '-translate-x-[50vw]' : 'translate-x-[50vw]'}`}`;
	}, [isVisible, direction]);

	return { ref, animationClasses };
};
