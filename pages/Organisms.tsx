import InstagramPost from '@/components/organisms/InstagramPost';
import MainLayout from '@/components/templates/MainLayout';
import { MOCK_POSTS } from '@/dummy';

const Organisms = () => {
  return (
    <MainLayout hideHeader>
      <InstagramPost post={MOCK_POSTS[1]} />
    </MainLayout>
  );
};

export default Organisms;
