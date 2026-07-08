import classNames from 'classnames';
import { type FC, memo } from 'react';

import { Image, Text } from '@shared/ui';

import styles from './author-card.module.scss';

interface AuthorCardPropsType {
  name: string;
  avatar?: string;
  className?: string;
}

export const AuthorCard: FC<AuthorCardPropsType> = memo(
  ({ name, avatar, className = '' }) => {
    const authorCardClassName = classNames(styles['author-card'], className);

    return (
      <div className={authorCardClassName}>
        <Image src={avatar} className={styles['author-card-img']} />
        <Text>Author:{name}</Text>
      </div>
    );
  }
);
