import { useState, type FC } from 'react';

import { Image } from '@shared/ui';

import styles from './promo.module.scss';

export const PromoBanner: FC = () => {
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

  const [id] = useState(() => Math.floor(Math.random() * items.length));

  return (
    <div className={styles.promo}>
      <Image className={styles['promo-img']} src={items[id].img} />
    </div>
  );
};
