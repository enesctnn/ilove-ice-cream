import BannerSlideShow from '@/components/BannerSlideShow';
import OurStoryArticles from '@/components/OurStoryArticles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'About Page Of Workshop',
};

function OurStoryPage() {
  return (
    <>
      <BannerSlideShow />
      <OurStoryArticles />
    </>
  );
}

export default OurStoryPage;
