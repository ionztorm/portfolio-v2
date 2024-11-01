import { cn } from "@/utils/cn";
import { ContainerProps } from "@/lib/types";

export const Container = ({
  children,
  as: Component = "div",
  className,
}: ContainerProps) => {
  return <Component className={cn("mx-auto", className)}>{children}</Component>;
};
