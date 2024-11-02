import { twScreens } from "@/hooks/useViewport";
import type { PropsWithChildren } from "react";

export type TScreenSizes = keyof typeof twScreens;
export type ChildrenProps = Readonly<PropsWithChildren>;

export type ContainerProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};
