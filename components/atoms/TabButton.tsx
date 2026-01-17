import React from 'react';

interface TabButtonProps {
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1 py-3 flex items-center justify-center border-b-2 transition-colors
        ${isActive 
          ? 'border-black text-black' 
          : 'border-transparent text-gray-400'
        }
      `}
    >
      {icon}
    </button>
  );
};

export default TabButton;