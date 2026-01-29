export interface CheckboxProps {
  label?: string;
  name: string;
  className?: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  placeholder?: string;
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  colorIcon?: "white" | "black";
  backgroundColor?: "primary" | "secondary" | "tertiary";
}
