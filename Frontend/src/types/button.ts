import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  text?: string;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  rounded?: boolean;

  customStyles?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
