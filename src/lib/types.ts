import { twScreens } from "@/hooks/useViewport";

export type TScreenSizes = keyof typeof twScreens;

export type ContainerProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};
