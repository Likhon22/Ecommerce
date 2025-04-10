import { cn } from "@/lib/utils";

type HeadingProps = {
  firstText: string;
  secondText: string;
  firstTextColor?: string;
  secondTextColor?: string;
  borderWidth?: string;
  borderHeight?: string;
  textSize?: string;
  fondWidth?: string;
  firstTextClassName?: string;
  secondTextClassName?: string;
};

const HeadingSection = ({
  firstText,
  secondText,
  firstTextColor = "secondary",
  secondTextColor = "primary",
  borderWidth = "8",
  borderHeight = "2px",
  firstTextClassName = "string",
  secondTextClassName = "string",
  fondWidth = "semibold",
}: HeadingProps) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <h2
        className={cn(
          `text-2xl font-${fondWidth} text-${firstTextColor}`,
          firstTextClassName
        )}
      >
        {firstText}
      </h2>
      <h2
        className={cn(
          `text-2xl font-${fondWidth} text-${secondTextColor}`,
          secondTextClassName
        )}
      >
        {secondText}
      </h2>
      <p className={`w-${borderWidth} bg-primary h-[${borderHeight}]`}></p>
    </div>
  );
};

export default HeadingSection;
