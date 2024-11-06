'use client';

import { useState } from 'react';
import { RiGithubFill, RiTwitterXFill } from 'react-icons/ri';
import Link from 'next/link';
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
		<Container className='relative grid w-full max-w-6xl gap-3 py-10 text-center'>
			<p className='text-xl font-medium text-hero-subtext md:text-2xl lg:text-3xl'>
				Drop me a message...
			</p>
			<button
				type='button'
				onClick={copyEmail}
				className='w-full cursor-pointer text-[2rem] font-extrabold tracking-tighter transition-colors duration-300 hover:text-gray-700 md:text-6xl lg:text-7xl'
			>
				{displayText}
			</button>
			<p className='text-xl font-medium text-hero-subtext md:text-2xl lg:text-3xl'>
				or give me a follow
			</p>
			<div className='flex items-center justify-center gap-2'>
				<Link href='https://github.com/ionztorm' className='hover:text-gray-700' target='_blank'>
					<RiGithubFill className='size-8 transition-colors duration-300 md:size-12' />
				</Link>
				<Link href='https://x.com/LeonLonsdale' className='hover:text-gray-700' target='_blank'>
					<RiTwitterXFill className='size-8 transition-colors duration-300 md:size-12' />
				</Link>
			</div>
		</Container>
	);
};
