import { Hero } from "@/features/homepage/sections/hero/hero";
import { Section } from "@/components/utility/section";

export const Main = () => {
  return (
    <main>
      <Section
        id="hero"
        className="h-[calc(100dvh-40px)] grid place-content-center"
      >
        <Hero />
      </Section>
    </main>
  );
};
