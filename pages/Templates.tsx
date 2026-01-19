import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import InstagramFeed from '@/components/templates/InstagramFeed';

const Templates: React.FC = () => {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative">
      <Link className="flex pt-4 py-2 items-center px-4 gap-4" to="/profile">
        <ArrowLeft size={24} />
        <span className="text-lg font-semibold">Post</span>
      </Link>
      <InstagramFeed
        posts={[
          {
            id: 'template',
            user: {
              id: 'template_u1',
              username: 'username',
              avatarUrl: 'https://placehold.co/100x100/808080/FFFFFF?text= ',
              isVerified: false,
            },
            location: 'City, Country',
            imageUrl:
              'https://placehold.co/1080x1350/CCCCCC/808080?text=templates',
            likes: 100,
            comments: 10,
            shares: 15,
            caption:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            timestamp: '10 day ago',
          },
        ]}
      />
    </div>
  );
};

export default Templates;
