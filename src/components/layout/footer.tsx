import { Container } from "@/components/utility/container";

export const Footer = () => {
  return (
    <footer
      className="
            sticky top-0 left-0
            py-2
            backdrop-blur-md
            flex items-center
            bg-gray-950
            text-gray-300 text-sm
        "
    >
      <Container
        className="
          w-full max-w-7xl 
          flex flex-col items-center justify-center
          px-4 
        "
      >
        <p>&copy; Leon Lonsdale 2024</p>
        <p>
          Made with ❤️ using NextJS 15, Tailwind CSS, and TypeScript. Powered by
          Vercel.
        </p>
      </Container>
    </footer>
  );
};
