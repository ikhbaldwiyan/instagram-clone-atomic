import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import InstagramFeed from '@/components/templates/InstagramFeed';
import { MOCK_PROFILE_FEED } from '../dummy';

const DetailPost = () => {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative">
      <Link
        className="flex pt-4 py-2 items-center sticky top-0 bg-white z-[100] px-4 gap-4"
        to="/profile"
      >
        <ArrowLeft size={24} />
        <span className="text-lg font-semibold">Post</span>
      </Link>
      <InstagramFeed posts={MOCK_PROFILE_FEED} />
    </div>
  );
};

export default DetailPost;
