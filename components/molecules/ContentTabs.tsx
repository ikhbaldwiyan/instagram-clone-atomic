import React from 'react';
import TabButton from '../atoms/TabButton';
import { Grid3x3, UserSquare } from 'lucide-react';

interface ContentTabsProps {
  activeTab: 'grid' | 'tagged';
  onTabChange: (tab: 'grid' | 'tagged') => void;
}

const ContentTabs: React.FC<ContentTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-gray-200">
      <TabButton
        icon={<Grid3x3 size={24} strokeWidth={activeTab === 'grid' ? 2 : 1.5} />}
        isActive={activeTab === 'grid'}
        onClick={() => onTabChange('grid')}
      />
      <TabButton
        icon={<UserSquare size={24} strokeWidth={activeTab === 'tagged' ? 2 : 1.5} />}
        isActive={activeTab === 'tagged'}
        onClick={() => onTabChange('tagged')}
      />
    </div>
  );
};

export default ContentTabs;