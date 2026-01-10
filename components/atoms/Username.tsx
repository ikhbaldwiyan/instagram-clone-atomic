import React from 'react';
import { MdVerified } from 'react-icons/md';

interface UsernameProps {
  name: string;
  isVerified?: boolean;
  className?: string;
}

const Username: React.FC<UsernameProps> = ({
  name,
  isVerified,
  className = '',
}) => {
  return (
    <div
      className={`flex items-center gap-1 font-medium text-sm ${className}`}
    >
      <span>{name}</span>
      {isVerified && <MdVerified color="#3897F0" />}
    </div>
  );
};

export default Username;
