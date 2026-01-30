import type { TitlePropsType } from "../types/index";
export const Title = ({
  tag = "h1",
  className = "title",
  text = "Title",
  fontSize = "xl",
  fontWeight = "regular",
}: TitlePropsType) => {
  const Tag = tag;
  return (
    <Tag className={`${className} display-${fontSize} font-${fontWeight}`}>
      {text}
    </Tag>
  );
};
