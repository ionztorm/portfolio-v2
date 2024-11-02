import { SectionProps } from "@/lib/types";
import { cn } from "@/utils/cn";

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn("", className)} id={id}>
      {children}
    </section>
  );
};
