
import React from 'react';
import PostHeader from '@/components/molecules/PostHeader';
import PostImage from '@/components/atoms/PostImage';
import PostActions from '@/components/molecules/PostActions';
import PostCaption from '@/components/molecules/PostCaption';
import { Post } from '@/types';

interface InstagramPostProps {
  post: Post;
}

const InstagramPost: React.FC<InstagramPostProps> = ({ post }) => {
  return (
    <article className="bg-white border-b border-gray-200">
      <PostHeader
        avatarUrl={post.user.avatarUrl} 
        username={post.user.username} 
        location={post.location}
        isVerified={post.user.isVerified}
      />
      <PostImage 
        src={post.imageUrl} 
      />
      <PostActions />
      <PostCaption 
        username={post.user.username} 
        likes={post.likes} 
        caption={post.caption}
        likedByAvatar="https://picsum.photos/seed/friend/50/50"
        likedByUsername="friend_user"
      />
    </article>
  );
};

export default InstagramPost;
