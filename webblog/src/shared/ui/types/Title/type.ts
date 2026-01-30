import type { FontSizeType, FontWeightType } from "../index";
export interface TitlePropsType {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  className?: string;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
}
