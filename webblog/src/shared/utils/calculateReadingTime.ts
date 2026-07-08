export const calculateReadingTime = (content: string = '') => {
  if (!content) return 0;

  const wordsPerMinute = 180;
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return readingTime;
};
