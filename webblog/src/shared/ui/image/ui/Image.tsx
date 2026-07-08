import cn from 'classnames';
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

  const imageClassName = cn(className, {
    hidden: isLoading,
  });

  return (
    <>
      {isLoading && <Skeleton className={imageClassName} />}
      <img
        {...props}
        className={imageClassName}
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={(e) => (e.currentTarget.src = fallbackImage)}
      />
    </>
  );
};
