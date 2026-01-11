
export interface User {
  id: string;
  username: string;
  avatarUrl: string;
  isVerified?: boolean;
}

export interface Story {
  id: string;
  user: User;
  hasLive?: boolean;
  isWatched?: boolean;
}

export interface Post {
  id: string;
  user: User;
  location?: string;
  imageUrl: string;
  likes: number;
  caption: string;
  timestamp: string;
  carouselCount?: number;
}
