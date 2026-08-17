import type { FC } from 'react';

interface ResultsPropsType {
  count: number;
}

export const Results: FC<ResultsPropsType> = ({ count }) => {
  return (
    <div>
      Found {count} {count > 1 ? 'posts' : 'post'}
    </div>
  );
};
