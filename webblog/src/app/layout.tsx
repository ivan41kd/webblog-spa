'use client';
import '@styles/style.scss';
import cn from 'classnames';
import { Roboto } from 'next/font/google';
import { PropsWithChildren } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

import { Footer, Header } from '@widgets';

import { Container } from '@shared/ui';

import StoreProvider from './StoreProvider';
import styles from './layout.module.scss';

const roboto = Roboto({ subsets: ['latin'] });

export default function RootLayout({ children }: PropsWithChildren) {
  const layoutClass = cn(styles.layout);

  return (
    <StoreProvider>
      <html>
        <body className={roboto.className}>
          <div className={layoutClass}>
            <Header />
            <main>
              <Container>{children}</Container>
            </main>
            <Footer />
          </div>
          <div id="myportal" />
        </body>
      </html>
    </StoreProvider>
  );
}
