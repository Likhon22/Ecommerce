import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;

  centered?: boolean;
};

const Container = ({
  children,
  className,

  centered = true,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "px-3",
        "sm:max-w-sm md:max-w-4xl lg:max-w-6xl xl:max-w-7xl",
        className,
        centered && "mx-auto"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
