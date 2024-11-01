import { Navbar } from "../../sections/navbar/navbar";
import { Logo } from "../ui/logo";
import { Container } from "../utility/container";

export const Header = () => {
  return (
    <header
      className="
            sticky top-0 left-0
            py-2
            backdrop-blur-md
            flex
            bg-gray-950/80
            text-white
        "
    >
      <Container
        // TODO: remove border color
        className="
          w-full max-w-7xl 
          flex items-start 
          px-4 
          border-rose-500 border"
      >
        <Logo />
        <Navbar />
      </Container>
    </header>
  );
};
