import cn from 'classnames';
import type { FC } from 'react';

import { Text, Title } from '@shared/ui';
import type { TitleTagType } from '@shared/ui/title/type';

import type { PostContentDocType } from '../../type';
import styles from './post-details.module.scss';

interface PostDocTextPropsType {
  textContent: PostContentDocType;
  type?: string;
}

export const PostDocText: FC<PostDocTextPropsType> = ({
  textContent,
  type,
}) => {
  const getClassName = (mark: PostContentDocType) => {
    switch (mark.type) {
      case 'bold':
        return 'font-bold';
      case 'textStyle':
        switch (mark.attrs?.fontSize) {
          case '12px':
            return 'text-sm';
          case '16px':
            return 'text-md';
          case '20px':
            return 'text-lg';
        }
    }
  };

  const detailsText = textContent.content?.map((text, index) =>
    text.marks ? (
      <span
        key={`text-${index}`}
        className={cn(text.marks.map((mark) => getClassName(mark)))}>
        {text.text}
      </span>
    ) : (
      text.text
    )
  );

  if (!textContent) return;

  if (!textContent.content) return <br />;

  return type === 'heading' ? (
    <Title
      tag={`h${textContent.attrs?.level}` as TitleTagType}
      className={styles['post-details-content-text']}>
      {detailsText}
    </Title>
  ) : (
    <Text className={styles['post-details-content-text']}>{detailsText}</Text>
  );
};
