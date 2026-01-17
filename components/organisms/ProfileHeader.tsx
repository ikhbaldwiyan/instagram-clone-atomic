import React from 'react';
import { Profile } from '@/types';
import { Lock, Menu } from 'lucide-react';
import { HiOutlineUserAdd } from "react-icons/hi";
import Avatar from '../atoms/Avatar';
import IconButton from '../atoms/IconButton';

interface ProfileHeaderProps {
  profile: Profile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profile,
}) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex-1"></div>
        <div className="flex items-center gap-2 flex-1 justify-center">
          <h1 className="text-base font-semibold text-black flex items-center gap-1">
            {profile.isPrivate && <Lock size={14} />}
            {profile.user.username}
          </h1>
        </div>
        <div className="flex-1 flex justify-end">
          <IconButton
            icon={<Menu size={24} strokeWidth={1.5} />}
          />
        </div>
      </div>

      {/* Profile section */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-start gap-2 mb-3">
          <div className="shrink-0">
            <Avatar src={profile.user.avatarUrl} size="lg" />
          </div>

          <div className="flex flex-1  flex-col">
            <h2 className="text-sm font-semibold text-black mb-1 ml-7">{profile.fullName}</h2>

            <div className="flex-1">
              <div className="flex items-center justify-around py-2">
                <div className="flex flex-col items-center">
                  <span className="text-sm font-semibold text-black">{formatNumber(profile.posts)}</span>
                  <span className="text-sm text-gray-600">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-semibold text-black">{formatNumber(profile.followers)}</span>
                  <span className="text-sm text-gray-600">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-semibold text-black">{formatNumber(profile.following)}</span>
                  <span className="text-sm text-gray-600">Following</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile info */}
        <div>
          <div className="mb-3">
            <p className="text-sm">
              {profile.bio}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="w-full py-1 px-4 rounded-lg text-[13px] font-semibold transition-colors bg-gray-100 border border-gray-300 text-black hover:bg-gray-50"
            >
              Edit Profile
            </button>
            <button
              className="w-full py-1 px-4 rounded-lg text-[13px] font-semibold transition-colors bg-gray-100 border border-gray-300 text-black hover:bg-gray-50"
            >
              Share Profile
            </button>
            <button
              className="w-full py-1 flex-1 px-2 rounded-lg text-[13px] font-semibold transition-colors bg-gray-100 border border-gray-300 text-black hover:bg-gray-50"
            >
              <HiOutlineUserAdd size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;