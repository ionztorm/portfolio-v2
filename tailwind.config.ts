import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				'background-secondary': 'var(--background-secondary)',
				foreground: 'var(--foreground)',
				'hero-subtext': 'var(--hero-subtext)',
				'hero-overview': 'var(--hero-overview)',
				'navbar-background': 'var(--navbar-background)',
				'navbar-text': 'var(--navbar-text)',
				'navbar-text-hover': 'var(--navbar-text-hover)',
				'navbar-border': 'var(--navbar-border)',
				'skills-background': 'var(--skills-background)',
				'skills-border': 'var(--skills-border)',
				'project-background': 'var(--project-background)',
				'project-after-background': 'var(--project-after-background)',
				'project-after-text': 'var(--project-after-text)',
				'project-border': 'var(--project-border)',
				'footer-text': 'var(--footer-text)',
				'footer-background': 'var(--footer-background)',
				iconfill: 'var(--iconfill)',
				'theme-button-border': 'var(--theme-button-border)',
				'theme-icon-colour': 'var(--theme-icon-colour)',
				'theme-button-border-active': 'var(--theme-button-border-active)',
				'theme-icon-colour-active': 'var(--theme-icon-colour-active)',
				'burger-colour': 'var(--burger-colour)',
			},
			animation: {
				fadeInFromTop: 'fadeInFromTop 1.5s ease-out forwards',
				fadeInFromBottom: 'fadeInFromBottom 1.5s ease-out forwards',
				fadeIn: 'fadeIn 1s ease-out forwards',
				slideInFromLeft: 'slideInFromLeft 1.5s ease-out forwards',
				slideInFromRight: 'slideInFromRight 1.5s ease-out forwards',
				fadeInSlideUpAndGrow: 'fadeInSlideUpAndGrow 1.5s ease-out forwards',
				fadeInSlideDownAndGrow: 'fadeInSlideDownAndGrow 1.5s ease-out forwards',
			},
		},
	},
	plugins: [],
};
export default config;
