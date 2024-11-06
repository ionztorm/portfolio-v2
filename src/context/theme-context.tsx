'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { TThemeContext, TThemeContextProviderProps } from '@/lib/types';
import type { Theme } from '@/lib/types';

const ThemeContext = createContext<TThemeContext | null>(null);

const ThemeContextProvider = ({ children }: TThemeContextProviderProps) => {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window !== 'undefined') {
			const storedTheme = localStorage.getItem('theme');
			return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'system';
		}
		return 'system'; // Fallback for SSR
	});

	const applyTheme = useCallback((mode: Theme) => {
		if (typeof window === 'undefined') return;

		if (mode === 'light') {
			document.documentElement.classList.remove('dark');
		} else if (mode === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			document.documentElement.classList.toggle('dark', prefersDark);
		}
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const storedTheme = localStorage.getItem('theme');
		const initialTheme: Theme =
			storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'system';

		setTheme(initialTheme);
		applyTheme(initialTheme);

		if (initialTheme === 'system') {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			const handleSystemChange = () => applyTheme(mediaQuery.matches ? 'dark' : 'light');

			mediaQuery.addEventListener('change', handleSystemChange);
			handleSystemChange();

			return () => mediaQuery.removeEventListener('change', handleSystemChange);
		}
		return undefined;
	}, [applyTheme]);

	const toggleTheme = useCallback(
		(mode: Theme) => {
			setTheme(mode);
			applyTheme(mode);
			if (mode === 'system') {
				localStorage.removeItem('theme');
			} else {
				localStorage.setItem('theme', mode);
			}
		},
		[applyTheme],
	);

	const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const useThemeContext = () => {
	const value = useContext(ThemeContext);
	if (!value) {
		throw new Error(
			'You have used ThemeContext outside of its Provider. ThemeContext can only be used within a child of the ThemeContextProvider',
		);
	}
	return value;
};

export { useThemeContext, ThemeContextProvider };
