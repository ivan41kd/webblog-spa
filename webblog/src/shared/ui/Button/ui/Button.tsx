import cn from "classnames";
import type { ButtonPropsType } from "../type";

import styles from "./button.module.scss";
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
      className={cn(className, styles.button, {
        [styles[variant]]: variant !== "default",
        [styles[size]]: size,
        [`text-${fontSize}`]: fontSize,
        [`font-${fontWeight}`]: fontWeight,
      })}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
