import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '../atoms/IconButton';
import { Plus, Heart, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const menu = [
    { label: 'Atoms', path: '/atoms' },
    { label: 'Molecules', path: '/molecules' },
    { label: 'Organisms', path: '/organisms' },
    { label: 'Templates', path: '/templates' },
    { label: 'Pages', path: '/profile' },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-2 py-1 bg-white border-b border-gray-100 text-black">
      <div className="flex items-center">
        <IconButton icon={<Plus size={28} strokeWidth={1.5} />} />
      </div>

      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-1 cursor-pointer select-none"
          onClick={() => setOpen((prev) => !prev)}
        >
          <h1 className="text-2xl font-instagram pt-1">Instagram</h1>
          <ChevronDown
            size={18}
            className={`transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </div>

        {open && (
          <div className="absolute left-1/2 top-full mt-2 w-40 -translate-x-1/2 rounded-md border border-gray-200 bg-white shadow-lg">
            <ul className="py-1 text-sm">
              {menu.map((item) => (
                <li
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <IconButton badge icon={<Heart size={26} strokeWidth={1.5} />} />
      </div>
    </header>
  );
};

export default Header;
