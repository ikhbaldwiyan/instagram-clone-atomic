import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { LuSend } from 'react-icons/lu';
import { VscPlayCircle } from 'react-icons/vsc';

import Avatar from '../atoms/Avatar';
import IconButton from '../atoms/IconButton';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isHome = pathname === '/';
  const isProfile = pathname === '/profile';

  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 z-50 text-black">
      <div className="flex items-center justify-around py-2">
        <Link to="/">
          <IconButton
            icon={
              isHome
                ? <GoHomeFill size={28} />
                : <GoHome size={28} />
            }
          />
        </Link>

        <IconButton icon={<VscPlayCircle size={28} />} />
        <IconButton icon={<LuSend size={25} />} />
        <IconButton icon={<Search size={28} strokeWidth={1.5} />} />

        <Link to="/profile">
          <div className="cursor-pointer">
            <Avatar
              src="https://res.cloudinary.com/dreday4jy/image/upload/v1768069075/Inner_Oval_2_tvx48e.png"
              size="xs"
              isWatched={isProfile}
            />
          </div>
        </Link>
      </div>

      <div className="flex justify-center pb-2">
        <div className="w-40 h-1 bg-gray-100 rounded-full" />
      </div>
    </footer>
  );
};

export default BottomNav;
