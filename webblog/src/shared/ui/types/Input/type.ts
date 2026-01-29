import type { FontSize, FontWeight } from "../index";
export interface InputProps {
  label?: string;
  name: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: "xs" | "sm" | "md" | "lg";
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  type?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  icon?: React.ReactNode | null;
  iconPlace?: "left" | "right";
  variant: "default" | "lined";
}
