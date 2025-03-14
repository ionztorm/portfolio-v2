import { ThemeButton } from '@/components/ui/theme-button';
import { useThemeContext } from '@/context/theme-context';
import { HiComputerDesktop, HiMoon, HiSun } from 'react-icons/hi2';

export const ThemeToggle = () => {
	const { theme, toggleTheme } = useThemeContext();

	return (
		<div className='mr-2 flex animate-slideInFromRight gap-2 rounded-md sm:mr-0'>
			<ThemeButton
				title='light mode'
				desc='toggle light mode'
				onClick={() => toggleTheme('light')}
				active={theme === 'light'}
			>
				<HiSun className='size-4' />
			</ThemeButton>

			<ThemeButton
				title='dark mode'
				desc='toggle dark mode'
				onClick={() => toggleTheme('dark')}
				active={theme === 'dark'}
			>
				<HiMoon className='size-4' />
			</ThemeButton>
			<ThemeButton
				title='system preferred theme'
				desc='use system preferred theme'
				onClick={() => toggleTheme('system')}
				active={theme === 'system'}
			>
				<HiComputerDesktop className='size-4' />
			</ThemeButton>
		</div>
	);
};
