import { BiLogoGoLang, BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb, DiSass } from 'react-icons/di';
import {
	RiCss3Fill,
	RiHtml5Fill,
	RiJavascriptFill,
	RiNextjsFill,
	RiNodejsFill,
	RiReactjsFill,
	RiSupabaseFill,
	RiTailwindCssFill,
} from 'react-icons/ri';
import { SiExpress, SiShadcnui, SiVercel } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { BunIcon } from '@/features/homepage/sections/skills/components/bun-icon';
import { ConvexIcon } from '@/features/homepage/sections/skills/components/convex-icon';
import { TSkills } from '@/features/homepage/sections/skills/types/types';

export const skills: TSkills = [
	{
		name: 'HTML5',
		icon: RiHtml5Fill,
		shortName: 'HTML',
		fillColour: 'text-[#f06529]',
		tag: ['language'],
	},
	{
		name: 'CSS',
		icon: RiCss3Fill,
		shortName: 'CSS',
		fillColour: 'text-[#2965f1]',
		tag: ['language'],
	},
	{
		name: 'JavaScript',
		icon: RiJavascriptFill,
		shortName: 'JS',
		fillColour: 'text-[#F0DB4F]',
		tag: ['language'],
	},
	{
		name: 'TypeScript',
		icon: BiLogoTypescript,
		shortName: 'TS',
		fillColour: 'text-[#2f75c1]',
		tag: ['language'],
	},
	{
		name: 'GoLang',
		icon: BiLogoGoLang,
		shortName: 'Go',
		fillColour: 'text-[#13a7d1]',
		tag: ['language'],
	},
	{
		name: 'Tailwind',
		icon: RiTailwindCssFill,
		shortName: 'TWCSS',
		fillColour: 'text-[#44a8b3]',
		tag: ['lib/framework'],
	},
	{
		name: 'React JS',
		icon: RiReactjsFill,
		shortName: 'React',
		fillColour: 'text-[#18d3f8]',
		tag: ['lib/framework'],
	},
	{
		name: 'Next JS',
		icon: RiNextjsFill,
		shortName: 'Next',
		fillColour: 'text-iconfill',
		tag: ['lib/framework'],
	},
	{
		name: 'SaSS',
		icon: DiSass,
		shortName: 'SaSS',
		fillColour: 'text-[#cc6699]',
		tag: ['language'],
	},
	{
		name: 'Convex',
		icon: ConvexIcon,
		shortName: 'Convex',
		fillColour: '',
		tag: ['database/services'],
	},
	{
		name: 'ExpressJS',
		icon: SiExpress,
		shortName: 'Express',
		fillColour: 'text-iconfill',
		tag: ['lib/framework'],
	},
	{
		name: 'Node JS',
		icon: RiNodejsFill,
		shortName: 'Node',
		fillColour: 'text-[#6cc24a]',
		tag: ['runtime'],
	},
	{
		name: 'Bun JS',
		icon: BunIcon,
		// icon: SiBun,
		shortName: 'bun',
		fillColour: 'dark:text-white',
		tag: ['runtime'],
	},
	{
		name: 'Shadcn',
		icon: SiShadcnui,
		shortName: 'Shadcn',
		fillColour: 'text-iconfill',
		tag: ['lib/framework'],
	},
	{
		name: 'JSON',
		icon: VscJson,
		shortName: 'JSON',
		fillColour: 'text-iconfill',
		tag: ['language'],
	},
	{
		name: 'Supabase',
		icon: RiSupabaseFill,
		shortName: 'supabase',
		fillColour: 'text-[#3FCF8E]',
		tag: ['database/services'],
	},
	{
		name: 'Vercel',
		icon: SiVercel,
		shortName: 'Vercel',
		fillColour: 'text-iconfill',
		tag: ['database/services'],
	},
	{
		name: 'Mongo DB',
		icon: DiMongodb,
		shortName: 'Mongo',
		fillColour: 'text-[#69a747]',
		tag: ['database/services'],
	},
	{
		name: 'PostgreSQL',
		icon: BiLogoPostgresql,
		shortName: 'Postgres',
		fillColour: 'text-[#336791]',
		tag: ['database/services'],
	},
];
