import React, { useState } from 'react';
import MainLayout from '../components/templates/MainLayout';
import ProfileHeader from '../components/organisms/ProfileHeader';
import ContentTabs from '../components/molecules/ContentTabs';
import ProfileGrid from '../components/organisms/ProfileGrid';
import StoriesBar from '../components/organisms/StoriesBar';
import { 
  MOCK_PROFILE, 
  MOCK_PROFILE_HIGHLIGHTS, 
  MOCK_PROFILE_POSTS,
  MOCK_TAGGED_POSTS,
} from '@/dummy';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'grid' | 'tagged'>('grid');

  const handleTabChange = (tab: 'grid' | 'tagged') => {
    setActiveTab(tab);
  };

  // Convert highlights to stories format for StoriesBar
  const highlightStories = MOCK_PROFILE_HIGHLIGHTS.map(h => ({
    id: h.id,
    user: {
      id: h.id,
      username: h.title,
      avatarUrl: h.coverImage
    },
    isWatched: true
  }));

  return (
    <MainLayout hideHeader={true}>
      <div className="flex flex-col bg-white">
        <ProfileHeader
          profile={MOCK_PROFILE}
        />
        
        <StoriesBar isProfile stories={highlightStories} />

        <ContentTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {activeTab === 'grid' ? (
          <ProfileGrid
            posts={MOCK_PROFILE_POSTS}
          />
        ) : (
          <ProfileGrid
            posts={MOCK_TAGGED_POSTS}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default Profile;