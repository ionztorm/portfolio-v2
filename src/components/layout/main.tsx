import { Hero } from "@/features/homepage/sections/hero/hero";
import { Section } from "@/components/utility/section";
import { About } from "@/features/homepage/sections/about/about";
import { Skills } from "@/features/homepage/sections/skills/skills";

export const Main = () => {
  return (
    <main>
      <Section
        id="hero"
        className="h-[calc(100dvh-40px)] grid place-content-center"
      >
        <Hero />
      </Section>
      <Section
        id="about"
        className="grid place-content-center bg-gray-50 pt-36 pb-72"
      >
        <About />
      </Section>
      <Section id="skills" className="grid place-content-center py-36 -mt-72">
        <Skills />
      </Section>
    </main>
  );
};
