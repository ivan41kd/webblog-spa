import type { RefObject } from 'react';

export const scrollToRefElement = (ref: RefObject<HTMLDivElement | null>) => {
  if (ref.current) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  }
};
