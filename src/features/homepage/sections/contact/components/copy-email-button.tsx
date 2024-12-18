import { useState } from 'react';
import type { CopyEmailButtonProps } from '../types/types';

export const CopyEmailButton = ({ email }: CopyEmailButtonProps) => {
	const [displayText, setDisplayText] = useState(email);
	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setDisplayText('Email Copied');
			setTimeout(() => {
				setDisplayText(email);
			}, 2000);
		} catch (err) {
			console.error('Failed to copy!', err);
		}
	};
	return (
		<button
			type='button'
			onClick={copyEmail}
			className='w-full cursor-pointer font-extrabold text-[2rem] tracking-tighter sm:transition-all sm:duration-300 sm:hover:text-gray-700 md:text-6xl lg:text-7xl'
			title='Click me to copy email'
		>
			{displayText}
		</button>
	);
};
