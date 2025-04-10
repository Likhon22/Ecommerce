import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "none";
  centered?: boolean;
};

const Container = ({
  children,
  className,
  maxWidth = "xl",
  centered = true,
}: ContainerProps) => {
  const maxWidthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",

    full: "max-w-full",
    none: "",
  };
  return (
    <div
      className={cn(
        className,
        "px-3",
        maxWidthClasses[maxWidth],
        centered && "mx-auto"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
