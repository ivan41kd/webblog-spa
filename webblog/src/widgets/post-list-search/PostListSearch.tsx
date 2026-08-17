import { StoreInitializer } from '@/app/StoreInitilization';
import { AppStore } from '@/app/store/rootReducer';
import { type FC } from 'react';

import { PostList, PostSearch } from './ui';

interface PostListSearchPropsType {
  withSearch?: boolean;
}

export const PostListSearch: FC<PostListSearchPropsType> = ({
  withSearch = false,
}) => {
  return (
    <StoreInitializer initialize={(store: AppStore) => console.log(store)}>
      {withSearch && <PostSearch />}
      <PostList />
    </StoreInitializer>
  );
};
