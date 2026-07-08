import { RouterProvider, createBrowserRouter, redirect } from 'react-router';

import { LayoutBase } from '@app/layouts';

import { HomePage, PostCreatePage, PostPage } from '@pages';

import { CREATE_POST, HOME, POST } from '@shared/routes';
import { NotFound } from '@shared/ui';

import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <LayoutBase />,
      handle: {
        crumb: () => ({
          label: 'Home',
          link: '/',
        }),
      },
      children: [
        {
          index: true,
          loader: () => redirect(HOME),
        },

        {
          path: HOME,
          element: <HomePage />,
        },
        {
          path: POST,
          element: <PostPage />,
          handle: {
            crumb: ({ id }: { id: string }) => ({
              label: `Post ${id}`,
              link: `/posts/${id}`,
            }),
          },
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: CREATE_POST,
              element: <PostCreatePage />,
            },
          ],
        },
      ],
    },

    { path: '*', element: <NotFound /> },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
