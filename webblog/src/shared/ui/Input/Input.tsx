import type { InputPropsType } from "../types/index";
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
  isDisabled = false,
  readOnly,
  isRequired = false,
  icon = null,
  iconPlace = "left",
  variant = "default",
}: InputPropsType) => {
  const { inputRef, isFocused } = useIsFocused();

  return (
    <div
      className={`${styles.input} ${(isDisabled && styles["input-disabled"]) || ""} ${styles[`input-${size}`]} ${(variant !== "default" && styles[`input-${variant}`]) || ""} `}
    >
      {label && (
        <label className={styles["input-label"]}>
          {label} {isRequired && <span>*</span>}
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
          disabled={isDisabled}
          readOnly={readOnly}
          name={name}
          required={isRequired}
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
