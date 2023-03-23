const tweets = [
  {
    id: 60,
    description:
      'Mauris vehicula mauris sit amet leo vestibulum suscipit. Nulla a quam purus. Etiam dictum mi ex, sed vehicula nulla placerat ut. Morbi pellentesque aliquet risus et commodo. ',
    createdAt: '2023-03-23T09:58:29.000Z',
    replyCounts: 2,
    likeCounts: 0,
    isLiked: 0,
    User: {
      id: 100,
      account: 'user100',
      name: 'user100',
      avatar: 'http://placekitten.com/g/200/300',
    },
  },
  {
    id: 61,
    description:
      'Mauris vehicula mauris sit amet leo vestibulum suscipit. Nulla a quam purus. Etiam dictum mi ex, sed vehicula nulla placerat ut. Morbi pellentesque aliquet risus et commodo. ',
    createdAt: '2023-03-22T03:24:29.000Z',
    replyCounts: 2,
    likeCounts: 3,
    isLiked: 1,
    User: {
      id: 101,
      account: 'user101',
      name: 'user101',
      avatar: 'https://api.lorem.space/image/face?w=150&h=150',
    },
  },
  {
    id: 62,
    description:
      'Mauris vehicula mauris sit amet leo vestibulum suscipit. Nulla a quam purus. Etiam dictum mi ex, sed vehicula nulla placerat ut. Morbi pellentesque aliquet risus et commodo. ',
    createdAt: '2023-03-23T05:24:29.000Z',
    replyCounts: 2,
    likeCounts: 5,
    isLiked: 1,
    User: {
      id: 102,
      account: 'user102',
      name: 'user102',
      avatar: 'https://api.lorem.space/image/face?w=250&h=250',
    },
  },
  {
    id: 63,
    description:
      'Mauris vehicula mauris sit amet leo vestibulum suscipit. Nulla a quam purus. Etiam dictum mi ex, sed vehicula nulla placerat ut. Morbi pellentesque aliquet risus et commodo. ',
    createdAt: '2023-03-23T02:34:29.000Z',
    replyCounts: 2,
    likeCounts: 0,
    isLiked: 0,
    User: {
      id: 103,
      account: 'user103',
      name: 'user103',
      avatar: 'http://placekitten.com/g/500/500',
    },
  },
  {
    id: 64,
    description:
      'Mauris vehicula mauris sit amet leo vestibulum suscipit. Nulla a quam purus. Etiam dictum mi ex, sed vehicula nulla placerat ut. Morbi pellentesque aliquet risus et commodo. ',
    createdAt: '2023-03-20T03:24:29.000Z',
    replyCounts: 2,
    likeCounts: 0,
    isLiked: 0,
    User: {
      id: 104,
      account: 'user104',
      name: 'user104',
      avatar: 'http://placekitten.com/g/600/600',
    },
  },
  {
    id: 65,
    description:
      'Mauris vehicula mauris sit amet leo vestibulum suscipit. Nulla a quam purus. Etiam dictum mi ex, sed vehicula nulla placerat ut. Morbi pellentesque aliquet risus et commodo. ',
    createdAt: '2023-03-23T05:24:59.000Z',
    replyCounts: 2,
    likeCounts: 5,
    isLiked: 1,
    User: {
      id: 105,
      account: 'user105',
      name: 'user105',
      avatar: 'https://api.lorem.space/image/face?w=350&h=350',
    },
  },
];

const replies = [
  {
    id: 20,
    description:
      'Nulla a quam purus. Etiam dictum mi ex, sed vehicula nulla placerat ut.',
    createdAt: '2023-03-23T05:24:59.000Z',
    User: {
      id: 101,
      account: 'user101',
      name: 'user101',
      avatar: 'https://api.lorem.space/image/face?w=150&h=150',
    },
  },
  {
    id: 21,
    description:
      'Nulla a quam purus. Etiam dictum mi ex, sed vehicula nulla placerat ut.',
    createdAt: '2023-03-23T05:24:59.000Z',
    User: {
      id: 103,
      account: 'user103',
      name: 'user103',
      avatar: 'https://api.lorem.space/image/face?w=450&h=450',
    },
  },
  {
    id: 22,
    description:
      'Nulla a quam purus. Etiam dictum mi ex, sed vehicula nulla placerat ut.',
    createdAt: '2023-03-23T05:24:59.000Z',
    User: {
      id: 104,
      account: 'user104',
      name: 'user104',
      avatar: 'http://placekitten.com/g/600/600',
    },
  },
  {
    id: 23,
    description:
      'Nulla a quam purus. Etiam dictum mi ex, sed vehicula nulla placerat ut.',
    createdAt: '2023-03-23T05:24:59.000Z',
    User: {
      id: 104,
      account: 'user104',
      name: 'user104',
      avatar: 'http://placekitten.com/g/600/600',
    },
  },
  {
    id: 24,
    description:
      'Nulla a quam purus. Etiam dictum mi ex, sed vehicula nulla placerat ut.',
    createdAt: '2023-03-23T05:24:59.000Z',
    User: {
      id: 105,
      account: 'user105',
      name: 'user105',
      avatar: 'https://api.lorem.space/image/face?w=350&h=350',
    },
  },
  {
    id: 25,
    description:
      'Nulla a quam purus. Etiam dictum mi ex, sed vehicula nulla placerat ut.',
    createdAt: '2023-03-23T05:24:59.000Z',
    User: {
      id: 200,
      account: 'user200',
      name: 'user200',
      avatar: 'https://api.lorem.space/image/face?w=550&h=550',
    },
  },
];

export { tweets, replies };
