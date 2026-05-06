import { RouterProvider, createBrowserRouter, redirect } from 'react-router';

import { LayoutBase } from '@app/layouts';

import { HomePage, LoginPage, PostPage } from '@pages';

import { HOME, LOGIN, POST } from '@shared/routes';
import { NotFound } from '@shared/ui';

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
      ],
    },
    {
      path: LOGIN,
      element: <LoginPage />,
    },
    { path: '*', element: <NotFound /> },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
