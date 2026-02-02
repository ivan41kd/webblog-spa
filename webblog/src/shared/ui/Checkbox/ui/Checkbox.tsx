import cn from "classnames";

import type { CheckboxPropsType } from "../type";

import styles from "./checkbox.module.scss";

export const Checkbox = ({
  className = "",
  name = "checkbox",
  value,
  isChecked = false,
  isDisabled,
  isRequired = false,
  size = "md",
  variant = "brand",
  onChange,
}: CheckboxPropsType) => {
  return (
    <input
      type="checkbox"
      className={cn(
        className,
        styles.checkbox,
        styles[`checkbox-${variant}`],
        styles[`checkbox-${size}`],
      )}
      name={name}
      defaultValue={value}
      defaultChecked={isChecked}
      disabled={isDisabled}
      required={isRequired}
      onChange={onChange}
    />
  );
};
