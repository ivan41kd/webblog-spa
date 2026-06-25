import { type FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import fallbackImage from '/fallback-image.png';

interface ImagePropsType {
  src?: string;
  alt?: string;
  className?: string;
}

export const Image: FC<ImagePropsType> = ({
  className,
  src,
  alt,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Skeleton className={className} />}
      <img
        {...props}
        className={className}
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={(e) => (e.currentTarget.src = fallbackImage)}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </>
  );
};
