import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  badge?: number;
  counter?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className = '',
  badge,
  counter,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 hover:bg-gray-100 flex gap-1 rounded-full transition-colors relative ${className}`}
    >
      {icon}
      {badge && badge > 0 && (
        <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] w-3 h-3 flex items-center justify-center rounded-full border-2 border-white">
          {badge}
        </span>
      )}

      {counter && (
        <span className="justify-center text-[15px] font-semibold rounded-full border-2 border-white">
          {counter}
        </span>
      )}
    </button>
  );
};

export default IconButton;
