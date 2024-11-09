'use client';

import { useEffect, useRef, useState } from 'react';

export const useAnimateOnScroll = (shouldAnimate: boolean) => {
	const [isVisible, setIsVisible] = useState(false);
	const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
	const ref = useRef<HTMLElement | null>(null);
	const lastScrollY = useRef(0); // To track the last scroll position

	useEffect(() => {
		if (!shouldAnimate) return; // Skip setting up observer if no animation is required

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY.current) {
				setScrollDirection('down'); // Scroll down
			} else if (currentScrollY < lastScrollY.current) {
				setScrollDirection('up'); // Scroll up
			}
			lastScrollY.current = currentScrollY; // Update last scroll position
		};

		// Listen to the scroll event to track direction
		window.addEventListener('scroll', handleScroll);

		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries) return; // Handle case where entries might be undefined

				entries.forEach((entry) => {
					// Check if element is intersecting (entering or exiting the viewport)
					if (entry.isIntersecting) {
						setIsVisible(true); // Set as visible when element enters the viewport
					} else {
						setIsVisible(false); // Set as invisible when element exits the viewport
					}
				});
			},
			{ threshold: 0.1 }, // Trigger when 10% of the element is in the viewport
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll); // Clean up the event listener
			if (ref.current) {
				observer.disconnect();
			}
		};
	}, [shouldAnimate]);

	return { ref, isVisible, scrollDirection };
};
