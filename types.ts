
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
  comments?: number;
  shares?: number;
  caption: string;
  timestamp: string;
  carouselCount?: number;
  likedByFriend?: {
    username: string;
    avatarUrl: string;
  };
}

export interface Profile {
  id: string;
  user: User;
  fullName: string;
  bio: string;
  posts: number;
  followers: number;
  following: number;
  isPrivate?: boolean;
}

export interface ProfileHighlight {
  id: string;
  title: string;
  coverImage: string;
}

export interface ProfilePost {
  id: string;
  imageUrl: string;
  carouselCount?: number;
}
