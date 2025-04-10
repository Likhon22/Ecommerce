import { Button } from "./button";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types/button";

const EButton = ({
  variant = "default",
  size = "default",
  text,
  children,
  fullWidth = false,
  icon,
  iconPosition = "left",
  rounded = false,

  customStyles,
  className,

  type = "button",
  ...props
}: ButtonProps) => {
  const defaultStyles =
    "bg-gray-950 text-white transition hover:scale-105 duration-300";

  const buttonStyle = cn(
    defaultStyles,

    fullWidth && "w-full",
    rounded && "rounded-full",
    className,
    customStyles
  );
  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {text || children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  );
  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      className={buttonStyle}
      {...props}
    >
      {content}
    </Button>
  );
};

export default EButton;
