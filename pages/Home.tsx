
import React, { useState } from 'react';
import { Post, Story } from '@/types';
import { MOCK_POSTS, MOCK_STORIES } from "@/dummy";

import MainLayout from '@/components/templates/MainLayout';
import InstagramFeed from '@/components/templates/InstagramFeed';
import StoriesBar from "@/components/organisms/StoriesBar";

const Home: React.FC = () => {
  const [stories] = useState<Story[]>(MOCK_STORIES);
  const [posts] = useState<Post[]>(MOCK_POSTS);

  return (
    <MainLayout>
      <StoriesBar stories={stories} />
      <InstagramFeed posts={posts} />
    </MainLayout>
  );
};

export default Home;
