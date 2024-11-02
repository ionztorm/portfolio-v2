import { Container } from "@/components/utility/container";

export const About = () => {
  return (
    <Container
      as="article"
      className="text-center px-4 grid gap-3 lg:gap-7 max-w-3xl lg:text-xl md:text-lg text-sm"
    >
      <h2
        className="
          text-3xl md:text-5xl lg:text-6xl
          font-extrabold
          tracking-tighter
        "
      >
        About me
      </h2>
      <p className="">
        I&apos;m Leon, a fullstack web developer from Wirral, UK. Following eye
        surgery back in 2022, I decided to try my hand at developing basic
        webpages using HTML and CSS. I bought some courses on Udemy to get
        started and I&apos;m still in the rabbit hole.
      </p>
      <p className="">
        Fast forward to today, and I&apos;ve pursued and completed courses in
        many modern technologies that I&apos;ve found interesting, including
        TypeScript, React, GoLang, NextJS, and most recently, Convex.
      </p>
      <p className="">
        When I&apos;m not at the computer, you&apos;ll find me watching Formula
        1, on eBay buying F1 collectable models, outdoors walking, or watching
        Sci-Fi movies.
      </p>
    </Container>
  );
};
