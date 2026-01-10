
import React from 'react';

interface AvatarProps {
  src: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  hasStory?: boolean;
  isLive?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, size = 'md', hasStory, isLive }) => {
  const sizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };

  return (
    <div className="relative inline-block">
      <div className={`
        ${sizeClasses[size]} 
        rounded-full 
        ${hasStory ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]' : 'bg-gray-200'}
      `}>
        <div className="bg-white rounded-full p-0.5 w-full h-full">
          <img 
            src={src} 
            alt="User avatar" 
            className="w-full h-full rounded-full object-cover cursor-pointer" 
          />
        </div>
      </div>
      {isLive && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[8px] font-bold px-1 rounded border-2 border-white uppercase">
          Live
        </div>
      )}
    </div>
  );
};

export default Avatar;
