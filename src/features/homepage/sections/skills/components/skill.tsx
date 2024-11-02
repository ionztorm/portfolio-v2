import { cn } from "@/utils/cn";
import { TSkill } from "@/features/homepage/sections/skills/types/types";

export type SkillProps = {
  skill: TSkill;
};
export const Skill = ({ skill }: SkillProps) => {
  return (
    <li key={skill.name} className="grid place-items-center">
      <skill.icon className={cn("size-9", skill.fillColour)} />
      <span className="text-sm shrink-0">{skill.name}</span>
    </li>
  );
};
