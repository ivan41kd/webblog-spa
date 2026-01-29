import type { TitleProps } from "../types/index";
export const Title = ({
  tag = "h1",
  className = "title",
  text = "Title",
  fontSize = "xl",
  fontWeight = "regular",
}: TitleProps) => {
  const Tag = tag;
  return (
    <Tag className={`${className} display-${fontSize} font-${fontWeight}`}>
      {text}
    </Tag>
  );
};
