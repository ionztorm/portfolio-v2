import { Skill } from '@/features/homepage/sections/skills/components/skill';
import { skills } from '@/features/homepage/sections/skills/lib/data';
import type { SkillListProps } from '@/features/homepage/sections/skills/types/types';

export const SkillList = ({ filter }: SkillListProps) => {
	const list = skills
		.filter((skill) => skill.tag.includes(filter))
		.map((skill) => <Skill key={skill.name} skill={skill} />);

	return (
		<ul className='my-14 flex flex-wrap items-center justify-center gap-7 sm:my-10 sm:gap-10'>
			{list}
		</ul>
	);
};
