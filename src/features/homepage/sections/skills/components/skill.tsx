import { TSkill } from '@/features/homepage/sections/skills/types/types';
import { cn } from '@/utils/cn';

export type SkillProps = {
	skill: TSkill;
};
export const Skill = ({ skill }: SkillProps) => {
	return (
		<li key={skill.name} className='grid place-items-center'>
			<skill.icon className={cn('size-7 md:size-9', skill.fillColour)} />
			<span className='shrink-0 text-xs sm:text-sm'>{skill.name}</span>
		</li>
	);
};
