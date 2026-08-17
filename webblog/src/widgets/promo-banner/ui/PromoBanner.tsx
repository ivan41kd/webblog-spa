'use client';
import { useAppSelector } from '@/app/hooks';
import Image from 'next/image';
import { type FC } from 'react';

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
      <Image
        alt={items[id].alt}
        fill
        priority
        className={styles['promo-img']}
        src={items[id].img}
        suppressHydrationWarning={true}
      />
    </div>
  );
};
