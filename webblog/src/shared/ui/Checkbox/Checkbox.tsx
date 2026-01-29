import type { CheckboxProps } from "../types/index";
import styles from "./checkbox.module.scss";
import { MdOutlineDoneOutline } from "react-icons/md";
export const Checkbox = ({
  className = "chk",
  name = "checkbox",
  value,
  label = "Label",
  checked = false,
  disabled,
  required = false,
  size = "md",
  colorIcon = "white",
  backgroundColor = "primary",
  onChange,
}: CheckboxProps) => {
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
      className={`${className} ${styles.chk} ${styles[`chk-${backgroundColor}`]} ${styles[`chk-${size}`]}`}
    >
      {label && <label className={styles["chk-label"]}>{label}</label>}
      <div className={styles["chk-wrapper"]}>
        <input
          type="checkbox"
          className={`${checked ? styles["chk-checked"] : ""}`}
          name={name}
          defaultValue={value}
          defaultChecked={checked}
          disabled={disabled}
          required={required}
          onChange={onChange}
        />
        <span
          className={`${styles["chk-input"]} ${(checked && styles["chk-checked"]) || ""}`}
          aria-hidden="true"
        >
          <i className={`${styles["chk-icon"]}`}>
            {<MdOutlineDoneOutline size={iconSize} color={colorIcon} />}
          </i>
        </span>
      </div>
    </div>
  );
};
