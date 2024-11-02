import { SectionHeader } from "@/components/ui/section-heading";
import { Container } from "@/components/utility/container";
import { SkillList } from "@/features/homepage/sections/skills/components/skill-list";

export const Skills = () => {
  return (
    <Container as="article" className="text-center">
      <SectionHeader variant="main">Skills</SectionHeader>
      <SectionHeader variant="sub">Languages</SectionHeader>
      <SkillList filter="language" />
      <SectionHeader variant="sub">Frameworks</SectionHeader>
      <SkillList filter="lib/framework" />
      <SectionHeader variant="sub">Backend</SectionHeader>
      <SkillList filter="database/services" />
      <SectionHeader variant="sub">Runtimes</SectionHeader>
      <SkillList filter="runtime" />
    </Container>
  );
};
