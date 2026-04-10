import type { FC } from 'react';

import fallbackImage from '/fallback-image.png';

interface ImagePropsType {
  src: string;
  alt: string;
  className: string;
}

export const Image: FC<ImagePropsType> = ({ className, src, alt, ...props }) => {
  return (
    <img
      {...props}
      className={className}
      src={src}
      alt={alt}
      onError={(e) => (e.currentTarget.src = fallbackImage)}
    />
  );
};
