import { useEffect } from 'react';

import { useLocation } from 'react-router';

export const ScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const elementId = hash.replace('#', '');

    const timer = setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [hash]);

  return null;
};
