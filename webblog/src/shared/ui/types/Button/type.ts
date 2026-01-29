import type { FontSize, FontWeight } from "../index";

export interface ButtonProps {
  text: string;
  className?: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  disabled?: boolean;
}
