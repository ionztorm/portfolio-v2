import { skills } from "@/features/homepage/sections/skills/lib/data";
import { Skill } from "@/features/homepage/sections/skills/components/skill";
import { SkillListProps } from "@/features/homepage/sections/skills/types/types";

export const SkillList = ({ filter }: SkillListProps) => {
  const list = skills
    .filter((skill) => skill.tag.includes(filter))
    .map((skill) => <Skill key={skill.name} skill={skill} />);

  return (
    <ul className="flex items-center justify-center gap-7 sm:gap-10 my-14 sm:my-10 flex-wrap">
      {list}
    </ul>
  );
};
