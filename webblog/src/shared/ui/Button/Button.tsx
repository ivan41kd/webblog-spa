import type { ButtonProps } from "../types/index";
import styles from "@shared/ui/Button/button.module.scss";
export const Button = ({
  text = "Click me",
  className = "button",
  fontSize = "md",
  fontWeight = "regular",
  variant = "default",
  onClick,
  size = "md",
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={`${className} ${styles.btn} text-${fontSize} ${styles[size]} font-${fontWeight} ${styles[variant] || ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
