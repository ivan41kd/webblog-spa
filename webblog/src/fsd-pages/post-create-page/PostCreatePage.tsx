import type { FC } from 'react';

import { Section } from '@shared/ui';

import { CreatePostForm } from './ui/create-post-form';

export const PostCreatePage: FC = () => {
  return (
    <Section>
      <CreatePostForm />
    </Section>
  );
};
