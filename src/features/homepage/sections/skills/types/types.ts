import type { IconType } from 'react-icons';

export type TIconProps = Readonly<{ className?: string }>;

export type TIconType = IconType | ((props: { className?: string }) => JSX.Element | null);

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
