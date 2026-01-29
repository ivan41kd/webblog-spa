import type { TextProps } from "../types/index";

export const Text = ({
  className = "text",
  text = "text",
  fontSize = "xl",
  fontWeight = "regular",
}: TextProps) => {
  return (
    <p className={`${className} text-${fontSize} font-${fontWeight}`}>{text}</p>
  );
};
