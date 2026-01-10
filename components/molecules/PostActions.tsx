import React from 'react';
import IconButton from '../atoms/IconButton';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const PostActions: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-2 py-1 text-black">
      <div className="flex items-center">
        <IconButton
          counter={100}
          icon={<Heart size={25} strokeWidth={2} />}
        />
        <IconButton
          counter={20}
          icon={<MessageCircle size={24} strokeWidth={2} />}
        />
        <IconButton
          counter={10}
          icon={<Send size={24} strokeWidth={2} />}
        />
      </div>

      <IconButton icon={<Bookmark size={24} strokeWidth={2} />} />
    </div>
  );
};

export default PostActions;
