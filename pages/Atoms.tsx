import Avatar from '@/components/atoms/Avatar';
import PostImage from '@/components/atoms/PostImage';
import Username from '@/components/atoms/Username';
import React from 'react';
import MainLayout from '../components/templates/MainLayout';
import IconButton from '@/components/atoms/IconButton';
import { Bookmark, Heart, MessageCircle, Send } from 'lucide-react';

const Atoms: React.FC = () => {
  return (
    <MainLayout>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar
              src="https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"
              hasStory={true}
              isLive={false}
            />
            <Username name="User" isVerified={false} />
          </div>

          <div className="flex flex-col items-center gap-2">
            <Avatar
              src="https://res.cloudinary.com/dreday4jy/image/upload/v1768069662/Inner_Oval_3_p2qrso.png"
              hasStory={false}
              isLive={false}
            />
            <Username name="inzoid" isVerified={true} />
          </div>

          <div className="flex flex-col items-center gap-2">
            <Avatar
              src="https://res.cloudinary.com/dreday4jy/image/upload/v1768069076/Inner_Oval_tnwbky.png"
              hasStory={true}
              isLive={true}
            />
            <Username name="Sarah" isVerified={false} />
          </div>
        </div>

        <PostImage src="https://res.cloudinary.com/dreday4jy/image/upload/v1768069076/Rectangle_cml9cz.png" />
      </div>
      <div className="flex items-center justify-between px-2 py-1 text-black">
        <div className="flex items-center">
          <IconButton counter={480} icon={<Heart size={25} strokeWidth={2} />} />
          <IconButton counter={4} icon={<MessageCircle size={24} strokeWidth={2} />} />
          <IconButton icon={<Send size={24} strokeWidth={2} />} />
          <IconButton icon={<Bookmark size={24} strokeWidth={2} />} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Atoms;
