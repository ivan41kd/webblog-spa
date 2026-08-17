import { PromoBanner } from '@widgets';

import { Section } from '@shared/ui';

import styles from './home-page.module.scss';

export default function HomePage() {
  return (
    <Section className={styles.home}>
      <PromoBanner />
    </Section>
  );
}
