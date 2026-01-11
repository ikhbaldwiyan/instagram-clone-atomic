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
    likes: 52402,
    caption: 'The game in Japan was amazing and I want to share some photos',
    timestamp: '3 hours ago'
  },
  {
    id: 'p2',
    user: { id: 'u11', username: 'daily_dose_art', avatarUrl: 'https://picsum.photos/seed/art_user/100/100' },
    location: 'Modern Art Museum',
    imageUrl: 'https://picsum.photos/seed/art_post/1080/1080',
    likes: 2150,
    caption: 'Exploring some abstract forms today. What do you think of this piece? 🎨✨',
    timestamp: '6 hours ago'
  }
];