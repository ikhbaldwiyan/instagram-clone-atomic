import React from 'react';
import PostImage from '@/components/atoms/PostImage';
import PostActions from '@/components/molecules/PostActions';
import PostCaption from '@/components/molecules/PostCaption';
import PostHeader from '@/components/molecules/PostHeader';
import MainLayout from '@/components/templates/MainLayout';

const Molecules: React.FC = () => {
  return (
    <MainLayout>
      <PostHeader
        avatarUrl="https://res.cloudinary.com/dreday4jy/image/upload/v1768069662/Inner_Oval_3_p2qrso.png"
        username="inzoid"
        location="Bandung, Indonesia"
        isVerified={true}
      />
      <PostImage src="https://thelawgivers.com/wp-content/uploads/2016/04/dummy-post-square-1-300x300.jpg" />
      <PostActions likes={100} comments={10} shares={15} />
      <PostCaption
        username="inzoid"
        likes={100}
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        likedByAvatar="https://picsum.photos/seed/friend/50/50"
        likedByUsername="friend_user"
        timestamp="30 minutes ago"
      />
    </MainLayout>
  );
};

export default Molecules;
