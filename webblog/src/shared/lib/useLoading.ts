import { useEffect, useState } from 'react';

export const useLoading = (initial = true) => {
  const [isLoading, setIsLoading] = useState(initial);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return { isLoading, setIsLoading };
};
