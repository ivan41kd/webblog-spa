import { useState, type FC } from 'react';

import classNames from 'classnames';

import { Text } from '../../text';
import styles from './read-more.module.scss';

interface ReadMorePropsType {
  text: string;
  textClassName?: string;
  amountOfWords?: number;
}

export const ReadMore: FC<ReadMorePropsType> = ({
  text,
  textClassName,
  amountOfWords = 280,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const splittedText = text.includes(' ') ? text.split(' ') : text.split('');
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join('')
    : text;
  const endText = splittedText.slice(amountOfWords - 1).join('');

  const handleKeyboard = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      setIsExpanded(!isExpanded);
    }
  };

  const endTextClassName = classNames(styles['read-more-text end'], {
    hidden: !isExpanded,
  });

  return (
    <div className={styles['read-more-container']}>
      <Text className={textClassName}>
        {beginText}
        <>
          {!isExpanded && itCanOverflow && <span>...</span>}
          {itCanOverflow && (
            <span className={endTextClassName} aria-hidden={!isExpanded}>
              {endText}
            </span>
          )}
        </>
      </Text>
      {itCanOverflow && (
        <span
          tabIndex={0}
          className={styles['read-more-button']}
          aria-expanded={isExpanded}
          onKeyDown={handleKeyboard}
          onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? ' show less' : ' show more'}
        </span>
      )}
    </div>
  );
};
