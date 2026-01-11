import React from 'react';
import { Post } from '../../types';
import InstagramPost from "../organisms/InstagramPost";

interface InstagramFeedProps {
  posts: Post[];
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ posts }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        {posts.map((post) => (
          <InstagramPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
