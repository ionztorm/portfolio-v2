'use client';

import { useState } from 'react';
import { RiGithubFill, RiTwitterXFill } from 'react-icons/ri';
import { Container } from '@/components/utility/container';

export const Contact = () => {
	const [displayText, setDisplayText] = useState('hello@leonlonsdale.dev');
	const email = 'hello@leonlonsdale.dev';

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
		<Container className='relative grid w-full max-w-6xl gap-3 p-10 text-center '>
			<p className='text-xl font-medium text-hero-subtext md:text-2xl lg:text-3xl'>
				Drop me a message...
			</p>
			<button
				type='button'
				onClick={copyEmail}
				className='cursor-pointer text-4xl font-extrabold tracking-tighter md:text-6xl lg:text-7xl'
			>
				{displayText}
			</button>
			<p className='text-xl font-medium text-hero-subtext md:text-2xl lg:text-3xl'>
				or give me a follow
			</p>
			<div className='flex items-center justify-center gap-2'>
				<RiGithubFill className='size-8 md:size-12' />
				<RiTwitterXFill className='size-8 md:size-12' />
			</div>
		</Container>
	);
};
