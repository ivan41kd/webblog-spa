import { Header, Footer } from '@/widgets';

import { LayoutMain } from '@/shared/ui/layout-main';

import { Section, Text } from '@/shared/ui';

export const HomePage = () => {
  return (
    <LayoutMain
      headerNode={<Header />}
      contentNode={
        <Section className="home">
          <Text>home</Text>
        </Section>
      }
      footerNode={<Footer />}
    />
  );
};
