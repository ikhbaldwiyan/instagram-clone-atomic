
import React from 'react';
import Avatar from '../atoms/Avatar';
import Username from '../atoms/Username';
import { MoreVertical } from 'lucide-react';

interface PostHeaderProps {
  avatarUrl: string;
  username: string;
  location?: string;
  isVerified?: boolean;
}

const PostHeader: React.FC<PostHeaderProps> = ({ avatarUrl, username, location, isVerified }) => {
  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-2">
        <Avatar src={avatarUrl} size="sm" />
        <div className="flex flex-col">
          <Username name={username} isVerified={isVerified} />
          {location && <span className="text-xs text-gray-500">{location}</span>}
        </div>
      </div>
      <button className="text-gray-600">
        <MoreVertical size={20} />
      </button>
    </div>
  );
};

export default PostHeader;
