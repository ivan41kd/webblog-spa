export interface CheckboxPropsType {
  label?: string;
  name?: string;
  className?: string;
  value?: string;
  isChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  readOnly?: boolean;
  isRequired?: boolean;
  colorIcon?: 'white' | 'black';
  variant?: 'brand' | 'primary';
}
