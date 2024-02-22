import { cn } from '@/lib/utils';
import { url } from '@/lib/social';
import { Caveat } from 'next/font/google';
import { Suspense } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import InstagramGrid, { InstagramGridProps } from './InstagramGrid';
import { PiInstagramLogoDuotone } from 'react-icons/pi';

const getInstagramPosts = async () => {
  try {
    const data = await fetch(url, { next: { revalidate: 3600 } });
    const feed = await data.json();
    return feed.data;
  } catch {}
};

const font = Caveat({
  subsets: ['latin'],
  weight: ['700'],
});

async function Instagram() {
  const posts = (await getInstagramPosts()) as InstagramGridProps[];
  return (
    <div className="space-y-10 pt-10 pb-32 bg-ellipse from-custom-red-100 to-custom-red-400">
      <h1
        className={cn(
          'text-5xl p-5 select-none text-white drop-shadow-black-md flex items-center justify-center gap-x-5',
          font.className
        )}
      >
        Share More Ice Cream On Instagram!
        <PiInstagramLogoDuotone className="hover:scale-110 transition-all" />
      </h1>

      <MaxWidthWrapper>
        {posts && (
          <Suspense
            fallback={
              <p className="text-center text-xl mt-10">Loding Posts . . . </p>
            }
          >
            <InstagramGrid posts={posts} />
          </Suspense>
        )}
      </MaxWidthWrapper>
    </div>
  );
}

export default Instagram;
