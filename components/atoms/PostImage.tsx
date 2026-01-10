
import React from 'react';

interface PostImageProps {
  src: string;
}

const PostImage: React.FC<PostImageProps> = ({ src }) => {
  return (
    <div className="relative w-full aspect-square bg-gray-100">
      <img 
        src={src} 
        alt="Post content" 
        className="w-full h-full object-cover" 
      />
    </div>
  );
};

export default PostImage;
