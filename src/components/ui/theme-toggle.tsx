import { useState } from 'react';
import { HiComputerDesktop, HiMoon, HiSun } from 'react-icons/hi2';
import type { Theme } from '@/lib/types';
import { ThemeButton } from './theme-button';

export const ThemeToggle = () => {
	const [theme, setTheme] = useState<Theme>('system');

	console.log(theme);

	return (
		<div className='flex gap-2 rounded-md'>
			<ThemeButton
				title='light mode'
				desc='toggle light mode'
				onClick={() => setTheme('light')}
				active={theme === 'light'}
			>
				<HiSun className='size-4' />
			</ThemeButton>

			<ThemeButton
				title='dark mode'
				desc='toggle dark mode'
				onClick={() => setTheme('dark')}
				active={theme === 'dark'}
			>
				<HiMoon className='size-4' />
			</ThemeButton>
			<ThemeButton
				title='system preferred theme'
				desc='use system preferred theme'
				onClick={() => setTheme('system')}
				active={theme === 'system'}
			>
				<HiComputerDesktop className='size-4' />
			</ThemeButton>
		</div>
	);
};
