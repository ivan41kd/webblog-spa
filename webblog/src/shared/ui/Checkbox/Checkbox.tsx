import type { CheckboxPropsType } from "../types/index";
import styles from "./checkbox.module.scss";
import { MdOutlineDoneOutline } from "react-icons/md";
export const Checkbox = ({
  className = "",
  name = "checkbox",
  value,
  label = "Label",
  isChecked = false,
  isDisabled,
  isRequired = false,
  size = "md",
  colorIcon = "white",
  backgroundColor = "primary",
  onChange,
}: CheckboxPropsType) => {
  const iconSize =
    size === "xs"
      ? 12
      : size === "sm"
        ? 16
        : size === "md"
          ? 20
          : size === "lg"
            ? 24
            : 20;
  return (
    <div
      className={`${className} ${styles.checkbox} ${styles[`checkbox-${backgroundColor}`]} ${styles[`checkbox-${size}`]}`}
    >
      {label && (
        <label className={styles["checkbox-label"]}>
          {label} {isRequired && <span>*</span>}
        </label>
      )}
      <div className={styles["checkbox-wrapper"]}>
        <input
          type="checkbox"
          className={`${isChecked ? styles["checkbox-checked"] : ""}`}
          name={name}
          defaultValue={value}
          defaultChecked={isChecked}
          disabled={isDisabled}
          required={isRequired}
          onChange={onChange}
        />
        <span
          className={`${styles["checkbox-input"]} ${(isChecked && styles["checkbox-checked"]) || ""}`}
          aria-hidden="true"
        >
          <i className={`${styles["checkbox-icon"]}`}>
            {<MdOutlineDoneOutline size={iconSize} color={colorIcon} />}
          </i>
        </span>
      </div>
    </div>
  );
};
