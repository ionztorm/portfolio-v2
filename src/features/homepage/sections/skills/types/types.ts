import type { TIconType } from '@/lib/types';

export type TIconProps = Readonly<{ className?: string }>;

export type TSkill = Readonly<{
	name: string;
	icon: TIconType;
	shortName: string;
	fillColour: string;
	tag: string[];
}>;
export type TSkills = TSkill[];

export type SkillListProps = Readonly<{
	filter: 'language' | 'lib/framework' | 'runtime' | 'database/services';
}>;
