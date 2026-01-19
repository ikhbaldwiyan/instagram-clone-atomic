import React from 'react';
import Avatar from '../atoms/Avatar';

interface PostCaptionProps {
  username: string;
  likes: number;
  caption: string;
  likedByAvatar?: string;
  likedByUsername?: string;
  timestamp: string;
}

const PostCaption: React.FC<PostCaptionProps> = ({
  username,
  likes,
  caption,
  likedByAvatar,
  likedByUsername,
  timestamp,
}) => {
  return (
    <div className="px-4 pb-4 space-y-1">
      <div className="flex items-center gap-2 text-sm">
        {likedByAvatar && <Avatar src={likedByAvatar} size="xs" />}
        <p>
          Liked by{' '}
          <span className="font-semibold">{likedByUsername || 'someone'}</span>{' '}
          and{' '}
          others
        </p>
      </div>
      <div className="text-sm leading-relaxed">
        <span className="font-semibold mr-2">{username}</span>
        <span>{caption}</span>
      </div>
      <div>
        <span className="text-xs text-gray-500">
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default PostCaption;
