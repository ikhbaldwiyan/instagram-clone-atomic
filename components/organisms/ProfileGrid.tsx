import React from 'react';
import { ProfilePost } from '@/types';
import { TbBoxMultiple } from "react-icons/tb";
import PostImage from "../atoms/PostImage";

interface ProfileGridProps {
  posts: ProfilePost[];
}

const ProfileGrid: React.FC<ProfileGridProps> = ({ posts }) => {
  const displayPosts = [...posts];
  while (displayPosts.length < 9 && displayPosts.length > 0) {
    displayPosts.push({
      id: `placeholder-${displayPosts.length}`,
      imageUrl: '',
      isPlaceholder: true,
    } as ProfilePost & { isPlaceholder: boolean });
  }

  return (
    <div className="grid grid-cols-3 gap-[2px] bg-gray-100">
      {displayPosts.slice(0, 9).map((post) => {
        if ('isPlaceholder' in post && post.isPlaceholder) {
          return (
            <div
              key={post.id}
              className="aspect-square bg-white"
            />
          );
        }

        return (
          <div
            key={post.id}
            className="relative aspect-square bg-white cursor-pointer group overflow-hidden"
          >
            <PostImage
              key={post.id}
              src={post.imageUrl}
            />
            {/* Carousel indicator */}
            {post.carouselCount && post.carouselCount > 1 && (
              <div className="absolute top-2 right-2">
                <TbBoxMultiple size={16} className="text-white drop-shadow-lg" />
              </div>
            )}

          </div>
        );
      })}
    </div>
  );
};

export default ProfileGrid;