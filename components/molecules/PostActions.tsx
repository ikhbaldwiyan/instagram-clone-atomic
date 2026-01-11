import React from 'react';
import { Bookmark, Heart, MessageCircle, Send } from 'lucide-react';
import { LuRepeat } from "react-icons/lu";
import IconButton from '../atoms/IconButton';

const PostActions: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-2 py-1 text-black">
      <div className="flex items-center">
        <IconButton
          counter={800}
          icon={<Heart size={25} strokeWidth={2} />}
        />
        <IconButton
          counter={20}
          icon={<MessageCircle size={24} strokeWidth={2} />}
        />
        <IconButton
          counter={120}
          icon={<LuRepeat  size={24} />}
        />
        <IconButton
          icon={<Send size={24} strokeWidth={2} />}
        />
      </div>

      <IconButton icon={<Bookmark size={24} strokeWidth={2} />} />
    </div>
  );
};

export default PostActions;
