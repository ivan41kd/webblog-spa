import type { FontSize, FontWeight } from "../index";
export interface TitleProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  className?: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}
