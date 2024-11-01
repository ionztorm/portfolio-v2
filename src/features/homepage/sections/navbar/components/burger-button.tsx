import { BurgerButtonProps } from "@/features/homepage/sections/navbar/types/types";

export const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
  return (
    <button
      type="button"
      onClick={() => onClick(!isOpen)}
      className="relative w-8 h-5 flex items-center justify-center group sm:hidden"
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
    >
      <div
        className={`w-6 h-0.5 bg-slate-50 transition-transform duration-300 ease-in-out before:content-[''] before:block before:absolute before:w-6 before:h-0.5 before:bg-slate-50 before:transition-transform before:duration-300 before:ease-in-out after:content-[''] after:block after:absolute after:w-6 after:h-0.5 after:bg-slate-50 after:transition-transform after:duration-300 after:ease-in-out ${
          isOpen
            ? "rotate-45 before:rotate-90 before:-translate-y-0 after:-rotate-90 after:-translate-y-0"
            : "before:-translate-y-1.5 after:translate-y-1.5"
        }`}
      />
    </button>
  );
};
