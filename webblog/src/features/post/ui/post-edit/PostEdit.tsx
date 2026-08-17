import Link from 'next/link';
import { type FC } from 'react';

import { useAppSelector } from '@app/hooks';

import { EditIcon } from '@shared/icons';
import { Button } from '@shared/ui';

interface PostEditPropsType {
  className?: string;
}

export const PostEdit: FC<PostEditPropsType> = ({ className }) => {
  const post = useAppSelector((state) => state.posts.post);

  return (
    <Link href={`/posts/${post?.id}/edit`}>
      <Button size="md" className={className}>
        Edit
        <EditIcon />
      </Button>
    </Link>
  );
};
