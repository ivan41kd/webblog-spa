import type { FontSizeType, FontWeightType } from '../../types';

export type TitleTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitlePropsType {
  tag?: TitleTagType;
  children?: React.ReactNode;
  className?: string;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
}
