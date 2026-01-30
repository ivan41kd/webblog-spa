import type { ButtonPropsType } from "../types/index";
import styles from "@shared/ui/Button/button.module.scss";
export const Button = ({
  children,
  className = "",
  fontSize = "md",
  fontWeight = "regular",
  variant = "default",
  onClick,
  size = "md",
  isDisabled = false,
}: ButtonPropsType) => {
  return (
    <button
      className={`${className && className} ${styles.button} text-${fontSize} ${styles[size]} font-${fontWeight} ${styles[variant] || ""}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
