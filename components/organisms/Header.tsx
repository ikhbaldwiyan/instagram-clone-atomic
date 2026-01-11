
import React from 'react';
import IconButton from '../atoms/IconButton';
import { Plus, Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-2 py-1 bg-white border-b border-gray-100 text-black">
      <div className="flex items-center">
        <IconButton icon={<Plus size={28} strokeWidth={1.5} />} />
      </div>
      
      <div className="flex items-center cursor-pointer">
        <h1 className="text-2xl font-instagram pt-1 select-none">
          Instagram
        </h1>
      </div>

      <div className="flex items-center">
        <IconButton badge icon={<Heart size={26} strokeWidth={1.5} />} />
      </div>
    </header>
  );
};

export default Header;
