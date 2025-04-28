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
  subSectionText?: string;
  className?: string;
};

const HeadingSection = ({
  firstText,
  secondText,
  firstTextColor = "secondary",
  secondTextColor = "primary",
  borderWidth = "8",

  firstTextClassName = "string",
  secondTextClassName = "string",
  fondWidth = "semibold",
  subSectionText,
  className,
}: HeadingProps) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <div className={cn(`flex items-center  gap-2 ${className}`)}>
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
        <p className={`w-${borderWidth} bg-primary h-[2px]`}></p>
      </div>
      {subSectionText && (
        <p className="text-center text-secondary">{subSectionText}</p>
      )}
    </div>
  );
};

export default HeadingSection;
