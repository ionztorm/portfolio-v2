import { ChildrenProps } from "@/lib/types";

export const SectionHeader = ({ children }: ChildrenProps) => {
  return (
    <h2
      className="
          text-3xl md:text-5xl lg:text-6xl
          font-extrabold
          tracking-tighter
        mb-5
        "
    >
      {children}
    </h2>
  );
};
