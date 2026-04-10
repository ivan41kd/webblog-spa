import type { RootState } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';

export const posts = useSelector((state) => state.posts.posts);
