import { useState } from "react";
import { EyeClosedIcon, EyeOpenedIcon, EmailIcon } from "@shared/icons";
import type { InputPropsType } from "../type";

import styles from "./input.module.scss";
import cn from "classnames";

export const Input = ({
  className,
  value = "",
  name = "input",
  onChange,
  placeholder = "",
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
  isError = false,
}: InputPropsType) => {
  const [isVisible, setIsVisible] = useState(type === "text");

  return (
    <div
      className={cn(styles.input, styles[`input-${size}`], {
        [styles["input-password"]]: type === "password",
        [styles["input-email"]]: type === "email",
        [styles["input-icon-left"]]: icon && iconPlace === "left",
        [styles["input-icon-right"]]: icon && iconPlace === "right",
      })}
    >
      {icon && iconPlace === "left" && type !== "email" && (
        <i className={`${styles[`input-icon`]}`}>{icon}</i>
      )}

      {type === "email" && (
        <i className={`${styles[`input-email-icon`]}`}>
          <EmailIcon />
        </i>
      )}

      <input
        className={cn(
          styles["input-field"],
          `text-${fontSize}`,
          `font-${fontWeight}`,
          className,
          {
            [styles["input-error"]]: isError,
            [styles[`input-${variant}`]]: variant !== "default",
          },
        )}
        defaultValue={value}
        placeholder={placeholder}
        type={
          type === "email"
            ? type
            : type === "password"
            ? isVisible
              ? "text"
              : "password"
            : type
        }
        minLength={(type === "password" && 8) || 0}
        disabled={isDisabled}
        readOnly={readOnly}
        name={name}
        required={isRequired}
        onChange={onChange}
      />
      {icon && iconPlace === "right" && type !== "password" && (
        <i className={`${styles[`input-icon`]}`}>{icon}</i>
      )}
      {type === "password" && (
        <i
          className={`${styles["input-password-icon"]}`}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
        </i>
      )}
    </div>
  );
};
