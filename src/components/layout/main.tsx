import { Hero } from "@/features/homepage/sections/hero/hero";
import { Section } from "@/components/utility/section";
import { About } from "@/features/homepage/sections/about/about";

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
        className="min-h-[100dvh] grid place-content-center bg-gray-50"
      >
        <About />
      </Section>
    </main>
  );
};
