import { cn } from "@/utils/cn";

export type ContainerProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

export const Container = ({
  children,
  as: Component = "div",
  className,
}: ContainerProps) => {
  return <Component className={cn("mx-auto", className)}>{children}</Component>;
};
