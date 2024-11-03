import { useEffect } from 'react';
import type { UseLockBodyScroll } from '@/lib/types';

export const useLockBodyScroll: UseLockBodyScroll = (isLocked) => {
	useEffect(() => {
		if (isLocked) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [isLocked]);
};
