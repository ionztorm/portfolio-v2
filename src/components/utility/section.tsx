import { SectionProps } from "@/lib/types";
import { cn } from "@/utils/cn";

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn("px-4", className)} id={id}>
      {children}
    </section>
  );
};
