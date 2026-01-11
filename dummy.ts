import { Post, Story } from './types';

export const MOCK_STORIES: Story[] = [
  {
    id: '1',
    user: { id: 'u1', username: 'alex_wanderer', avatarUrl: 'https://res.cloudinary.com/dreday4jy/image/upload/v1768069662/Inner_Oval_3_p2qrso.png' },
    isWatched: true,
  },
  {
    id: '2',
    user: { id: 'u2', username: 'karennne', avatarUrl: 'https://res.cloudinary.com/dreday4jy/image/upload/v1768069076/Inner_Oval_tnwbky.png' },
    hasLive: true,
  },
  {
    id: '3',
    user: { id: 'u3', username: 'zackjohn', avatarUrl: 'https://res.cloudinary.com/dreday4jy/image/upload/v1768069075/Inner_Oval_1_mws3ji.png' }
  },
  {
    id: '4',
    user: { id: 'u4', username: 'kieron_d', avatarUrl: 'https://picsum.photos/seed/lily/150/150' }
  },
  {
    id: '5',
    user: { id: 'u5', username: 'craig_love', avatarUrl: 'https://picsum.photos/seed/urban/150/150' }
  },
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    user: { id: 'u10', username: 'joshua', avatarUrl: 'https://res.cloudinary.com/dreday4jy/image/upload/v1768069143/Oval_o1ocfc.png', isVerified: true },
    location: 'Tokyo, Japan',
    imageUrl: 'https://res.cloudinary.com/dreday4jy/image/upload/v1768069076/Rectangle_cml9cz.png',
    likes: 849,
    caption: 'The game in Japan was amazing and I want to share some photos',
    timestamp: '40 minutes ago',
    comments: 20,
    shares: 120
  },
  {
    id: 'p2',
    user: { id: 'u11', username: 'daily_dose_art', avatarUrl: 'https://picsum.photos/seed/art_user/100/100' },
    location: 'Modern Art Museum',
    imageUrl: 'https://picsum.photos/seed/art_post/1080/1080',
    likes: 400,
    caption: 'Exploring some abstract forms today. What do you think of this piece? 🎨✨',
    timestamp: '6 hours ago',
    comments: 5,
    shares: 2
  }
];

export const MOCK_TEMPLATE_POSTS: Post[] = [
  {
    id: 'template_1',
    user: {
      id: 'template_u1',
      username: 'username',
      avatarUrl: 'https://placehold.co/100x100/808080/FFFFFF?text= ',
      isVerified: false
    },
    location: 'City, Country',
    imageUrl: 'https://placehold.co/1080x1350/CCCCCC/808080?text=templates',
    likes: 100,
    comments: 10,
    shares: 15,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    timestamp: 'September 19'
  }
];