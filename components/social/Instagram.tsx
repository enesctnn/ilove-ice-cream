import { url } from '@/social';
import InstagramGrid, { InstagramGridProps } from './InstagramGrid';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { Suspense } from 'react';
import ScrollYWrapper from '../animations/ScrollYWrapper';
import { Caveat } from 'next/font/google';
import { cn } from '@/lib/utils';

const getInstagramPosts = async () => {
  const data = await fetch(url);
  const feed = await data.json();
  return feed.data;
};

const font = Caveat({
  subsets: ['latin'],
  weight: ['700'],
});

async function Instagram() {
  const posts = (await getInstagramPosts()) as InstagramGridProps[];
  return (
    <ScrollYWrapper>
      <h1
        className={cn(
          'text-5xl text-center p-5 select-none text-white',
          font.className
        )}
      >
        Share More Ice Cream On Instagram!
      </h1>
      <MaxWidthWrapper>
        <Suspense
          fallback={
            <p className="text-center text-xl mt-10">Loding Posts . . . </p>
          }
        >
          <InstagramGrid posts={posts} />
        </Suspense>
      </MaxWidthWrapper>
    </ScrollYWrapper>
  );
}

export default Instagram;
