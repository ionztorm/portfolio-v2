import { Navbar } from "@/features/homepage/sections/navbar/navbar";
import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/utility/container";

export const Header = () => {
  return (
    <header
      className="
            sticky top-0 left-0
            py-2
            backdrop-blur-md
            flex items-center
            bg-gray-950
            text-gray-300
            max-h-[40px]
        "
    >
      <Container
        className="
          w-full max-w-7xl 
          flex
          px-4 
        "
      >
        <Logo />
        <Navbar />
      </Container>
    </header>
  );
};
