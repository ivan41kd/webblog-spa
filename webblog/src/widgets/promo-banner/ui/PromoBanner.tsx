import { type FC } from 'react';

import { useAppSelector } from '@app/store/rootReducer';

import { Image } from '@shared/ui';

import styles from './promo.module.scss';

export const PromoBanner: FC = () => {
  const { isLoading } = useAppSelector((state) => state.posts);

  const items = [
    {
      img: 'https://placehold.co/600x400?text=Promo+1',
      alt: 'Banner1',
    },
    {
      img: 'https://placehold.co/600x400?text=Promo+2',
      alt: 'Banner2',
    },
    {
      img: 'https://placehold.co/600x400?text=Promo+3',
      alt: 'Banner3',
    },
  ];

  // eslint-disable-next-line react-hooks/purity
  const id = Math.floor(Math.random() * items.length);
  if (isLoading) return;
  return (
    <div className={styles.promo}>
      <Image className={styles['promo-img']} src={items[id].img} />
    </div>
  );
};
