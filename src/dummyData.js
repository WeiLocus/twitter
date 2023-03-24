const tweets = [
  {
    id: 60,
    description: '那些老屁股的見解太迂腐了，我要反對他們！',
    createdAt: '2023-03-23T13:58:29.000Z',
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
      '我想到一個一定得獎的作品，就是用QR Code當作山水畫的皴法。有沒有畫山水的我們來合作一下。',
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
      '這樣那些感到害怕或認為自己無法實現目標的人看到我衝過馬拉松的終點線，就會對自己說：我也能做到。',
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
      '今天去看of an age, 超好看！台詞還有提到凱特布蘭琪、妮可基嫚、王家衛電影，很有意思。',
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
      '天轉熱了 可以喝冰咖啡了 建議用我家的義式咖啡 煮濃一些 加冰塊 很不錯',
    createdAt: '2023-03-20T13:24:29.000Z',
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
      '以前讀過一個網路廣傳的文章，大意是說哈佛大學學生之所以優秀，是因為他們都睡很少晚上都還在唸書，配圖還搭上哈佛圖書館整晚通亮的樣子。',
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
    description: '不能再同意更多',
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
    description: '超級同意 der',
    createdAt: '2023-03-22T05:24:59.000Z',
    User: {
      id: 103,
      account: 'user103',
      name: 'user103',
      avatar: 'https://api.lorem.space/image/face?w=450&h=450',
    },
  },
  {
    id: 22,
    description: '你再繼續胡說八道',
    createdAt: '2023-03-23T01:24:59.000Z',
    User: {
      id: 104,
      account: 'user104',
      name: 'user104',
      avatar: 'http://placekitten.com/g/600/600',
    },
  },
  {
    id: 23,
    description: '一切都是謊言',
    createdAt: '2023-03-22T12:24:59.000Z',
    User: {
      id: 104,
      account: 'user104',
      name: 'user104',
      avatar: 'http://placekitten.com/g/600/600',
    },
  },
  {
    id: 24,
    description: 'Agree',
    createdAt: '2023-03-23T05:00:59.000Z',
    User: {
      id: 105,
      account: 'user105',
      name: 'user105',
      avatar: 'https://api.lorem.space/image/face?w=350&h=350',
    },
  },
  {
    id: 25,
    description: '不是吧！！！！',
    createdAt: '2023-03-20T01:24:59.000Z',
    User: {
      id: 200,
      account: 'user200',
      name: 'user200',
      avatar: 'https://api.lorem.space/image/face?w=550&h=550',
    },
  },
];

const currentUser = {
  id: 125,
  name: 'user125',
  email: 'user125@example.com',
  account: 'user125',
  introduction:
    'Reach out if you want to talk about emerging tech, creating software products, or baseball.',
  avatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/268.jpg',
  cover: 'https://loremflickr.com/640/480/nature?lock=27430',
  isAdmin: false,
  createdAt: '2023-03-20T15:44:34.000Z',
  updatedAt: '2023-03-20T15:44:34.000Z',
};

const users = [
  {
    id: 125,
    name: 'user125',
    email: 'user125@example.com',
    account: 'user125',
    introduction:
      'Reach out if you want to talk about emerging tech, creating software products, or baseball.',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/268.jpg',
    cover: 'https://loremflickr.com/640/480/nature?lock=27430',
    isAdmin: false,
    createdAt: '2023-03-20T15:44:34.000Z',
    updatedAt: '2023-03-20T15:44:34.000Z',
  },
  {
    id: 100,
    name: 'user100',
    email: 'user100@example.com',
    account: 'user100',
    introduction: '我要成為海賊王 喵喵喵 ',
    avatar: 'http://placekitten.com/g/200/300',
    cover: 'https://picsum.photos/id/123/700/300',
    isAdmin: false,
    createdAt: '2023-03-21T15:44:34.000Z',
    updatedAt: '2023-03-21T15:44:34.000Z',
  },
  {
    id: 101,
    name: 'user101',
    email: 'user101@example.com',
    account: 'user101',
    introduction:
      'Throughout my life, I have developed this art of being able to communicate with anyone at any given time.',
    avatar: 'https://api.lorem.space/image/face?w=150&h=150',
    cover: 'https://picsum.photos/id/145/700/300',
    isAdmin: false,
    createdAt: '2023-03-22T15:44:34.000Z',
    updatedAt: '2023-03-22T15:44:34.000Z',
  },
];

export { tweets, replies, currentUser, users };
