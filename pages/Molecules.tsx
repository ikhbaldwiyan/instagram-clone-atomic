import React from 'react';
import PostImage from '@/components/atoms/PostImage';
import PostActions from '@/components/molecules/PostActions';
import PostCaption from '@/components/molecules/PostCaption';
import PostHeader from '@/components/molecules/PostHeader';

const Molecules: React.FC = () => {
  return (
    <article className="bg-white flex flex-col gap-4 border-b border-gray-200">
      <PostHeader
        avatarUrl="https://res.cloudinary.com/dreday4jy/image/upload/v1768069662/Inner_Oval_3_p2qrso.png"
        username="inzoid"
        location="Bandung, Indonesia"
        isVerified={true}
      />
      <PostImage src="http://www.listercarterhomes.com/wp-content/uploads/2013/11/dummy-image-square.jpg" />
      <PostActions />
      <PostCaption
        username="inzoid"
        likes={100}
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        likedByAvatar="https://picsum.photos/seed/friend/50/50"
        likedByUsername="friend_user"
      />
    </article>
  );
};

export default Molecules;
