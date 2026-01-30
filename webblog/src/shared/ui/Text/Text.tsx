import type { TextPropsType } from "../types/index";

export const Text = ({
  className = "text",
  text = "text",
  fontSize,
  fontWeight = "regular",
}: TextPropsType) => {
  return (
    <p
      className={`${className} ${fontSize ? `text-${fontSize}` : ""} font-${fontWeight}`}
    >
      {text}
    </p>
  );
};
