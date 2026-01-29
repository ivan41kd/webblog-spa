import type { InputProps } from "../types/index";
import styles from "./input.module.scss";

import { useIsFocused } from "../../lib/useIsFocused";
export const Input = ({
  className = "",
  value = "",
  name = "",
  label = "Label",
  onChange,
  placeholder = "Type here",
  size = "md",
  fontSize = "md",
  fontWeight = "regular",
  type = "text",
  disabled,
  readOnly,
  required = false,
  icon = null,
  iconPlace = "left",
  variant = "default",
}: InputProps) => {
  const { inputRef, isFocused } = useIsFocused();
  return (
    <div
      className={`${styles.input} ${styles[`input-${size}`]} ${(variant !== "default" && styles[`input-${variant}`]) || ""} `}
    >
      {label && (
        <label className={styles["input-label"]}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <div
        className={`${styles["input-wrapper"]}  ${isFocused ? styles["input-focus"] : ""}`}
      >
        {icon && iconPlace === "left" && (
          <i className={`${styles[`input-icon`]}`}>{icon}</i>
        )}
        <input
          className={`${className} ${styles[`input-field`]} text-${fontSize} font-${fontWeight}`}
          defaultValue={value}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          readOnly={readOnly}
          name={name}
          required={required}
          onChange={onChange}
          ref={inputRef}
        />
        {icon && iconPlace === "right" && (
          <i className={`${styles[`input-icon`]}`}>{icon}</i>
        )}
      </div>
    </div>
  );
};
