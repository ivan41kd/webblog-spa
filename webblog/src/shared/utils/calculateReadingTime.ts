export const calculateReadingTime = (content: string = '') => {
  const wordsPerMinute = 180;
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return readingTime;
};
