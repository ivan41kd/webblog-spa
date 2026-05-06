export const RECOMMENDED_POSTS = [
  {
    id: '1',
    img: 'https://placehold.co/600x600?text=Post+6',
    title: 'Street Photography',
    description: 'Exploring street photography and capturing spontaneous moments.',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://placehold.co/150x150?text=AR',
    },
    views: 301,
    date: '2023-01-18T00:00:00.000Z',
  },
  {
    id: '2',
    img: 'https://placehold.co/600x600?text=Post+7',
    title: 'Learning React',
    description: 'Today I practiced hooks and built a small interactive UI.',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://placehold.co/150x150?text=AR',
    },
    views: 276,
    date: '2023-01-21T00:00:00.000Z',
  },
  {
    id: '3',
    img: 'https://placehold.co/600x600?text=Post+9',
    title: 'Mountain Trip',
    description: 'A short trip to the mountains with amazing fresh air.',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://placehold.co/150x150?text=AR',
    },

    views: 420,
    date: '2023-02-02T00:00:00.000Z',
  },
] as const;
