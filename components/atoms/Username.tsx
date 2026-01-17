import React from 'react';
import { MdVerified } from 'react-icons/md';

interface UsernameProps {
  name: string;
  isVerified?: boolean;
  className?: string;
  variant?: string;
}

const Username: React.FC<UsernameProps> = ({
  name,
  isVerified,
  className = '',
  variant = 'default'
}) => {
  return (
    <div
      className={`flex items-center gap-1 ${className}`}
    >
      <span className={`
        ${variant === "default" ? "font-medium text-sm items-center" : ""}
        ${variant === "story" ? "text-[11px] font-normal truncate text-gray-800 w-16 mt-1 text-center" : ""}`}>
        {name}
      </span>
      {isVerified && <MdVerified color="#3897F0" />}
    </div>
  );
};

export default Username;
