import InstagramPost from '@/components/organisms/InstagramPost';
import MainLayout from '@/components/templates/MainLayout';
import { MOCK_POSTS } from '@/dummy';

const Organisms = () => {
  return (
    <MainLayout>
      <InstagramPost post={MOCK_POSTS[0]} />
    </MainLayout>
  );
};

export default Organisms;
