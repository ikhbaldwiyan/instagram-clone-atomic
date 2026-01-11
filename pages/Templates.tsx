import { MOCK_TEMPLATE_POSTS } from '@/dummy';
import React, { useState } from 'react';
import InstagramFeed from '../components/templates/InstagramFeed';
import MainLayout from '../components/templates/MainLayout';
import { Post } from '../types';

const Templates: React.FC = () => {
  const [posts] = useState<Post[]>(MOCK_TEMPLATE_POSTS);

  return (
    <MainLayout>
      <InstagramFeed posts={posts} />
    </MainLayout>
  );
};

export default Templates;
