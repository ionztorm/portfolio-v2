import { cn } from "@/utils/cn";

export type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn("", className)} id={id}>
      {children}
    </section>
  );
};
