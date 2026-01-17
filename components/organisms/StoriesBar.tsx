
import React from 'react';
import Avatar from '../atoms/Avatar';
import { Story } from '../../types';
import { GoPlus } from "react-icons/go";
import Username from "../atoms/Username";

interface StoriesBarProps {
  stories: Story[];
  isProfile?: boolean
}

const StoriesBar: React.FC<StoriesBarProps> = ({ stories, isProfile }) => {
  return (
    <div className="flex items-center gap-2 p-4 py-2 overflow-x-auto no-scrollbar bg-white border-b border-gray-100">
      {isProfile ? (
        <div className="flex flex-col items-center gap-1 shrink-0 cursor-pointer">
          <div className="w-14 h-14 rounded-full bg-white border border-black flex items-center justify-center">
            <GoPlus size={25} />
          </div>
          <span className="text-[11px] text-gray-800 font-normal w-16 truncate text-center">New</span>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-1 shrink-0">
          <div className="relative">
            <div className="rounded-full">
              <Avatar src="https://res.cloudinary.com/dreday4jy/image/upload/v1768069075/Inner_Oval_2_tvx48e.png" />
            </div>
            <div className="absolute bottom-1 right-0 bg-black text-white rounded-full p-0.5 border-2 border-white">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
          <span className="text-[11px] text-gray-800">Your Story</span>
        </div>
      )}

      {stories.map(story => (
        <div key={story.id} className="flex flex-col items-center gap-1 shrink-0">
          <Avatar
            src={story.user.avatarUrl}
            hasStory={!story.isWatched}
            isLive={story.hasLive}
            isWatched={story.isWatched}
          />
          <Username variant="story" name={story.user.username} />
        </div>
      ))}
    </div>
  );
};

export default StoriesBar;
