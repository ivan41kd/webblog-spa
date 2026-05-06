import { useState, type FC } from 'react';

import classNames from 'classnames';

import { Text } from '../../text';
import styles from './read-more.module.scss';

interface ReadMoreProps {
  text: string;
  textClassName?: string;
  amountOfWords?: number;
}

export const ReadMore: FC<ReadMoreProps> = ({
  text,
  textClassName,
  amountOfWords = 36,
}: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const splittedText = text.split(' ');
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(' ')
    : text;
  const endText = splittedText.slice(amountOfWords - 1).join(' ');

  const handleKeyboard = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      setIsExpanded(!isExpanded);
    }
  };

  const endTextClassName = classNames(styles['read-more-text end'], {
    hidden: !isExpanded,
  });

  return (
    <Text className={textClassName}>
      {beginText}
      {itCanOverflow && (
        <>
          {!isExpanded && <span>...</span>}
          <span className={endTextClassName} aria-hidden={!isExpanded}>
            {' '}
            {endText}
          </span>
          <span
            tabIndex={0}
            className={styles['read-more-button']}
            aria-expanded={isExpanded}
            onKeyDown={handleKeyboard}
            onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? ' show less' : ' show more'}
          </span>
        </>
      )}
    </Text>
  );
};
