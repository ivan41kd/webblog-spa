import Image from 'next/image';
import type { FC } from 'react';

import fallbackImage from '@public/fallback-image.png';

interface ImagePropsType {
  src?: string;
  alt?: string;
  className?: string;
}

export const CustomImage: FC<ImagePropsType> = ({
  className,
  src,
  alt,
  ...props
}) => {
  const targetSrc = src || fallbackImage.src;

  const isSvg =
    typeof targetSrc === 'string' &&
    (targetSrc.includes('.svg') || targetSrc.includes('type=image/svg'));

  return (
    <Image
      {...props}
      className={className}
      src={targetSrc}
      alt={alt || ''}
      width={500}
      height={500}
      unoptimized={isSvg}
      onError={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        img.srcset = '';
        img.src = fallbackImage.src;
      }}
    />
  );
};
