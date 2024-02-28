import { cn } from '@/lib/utils';
import { url } from '@/lib/social';
import { Caveat } from 'next/font/google';
import { Suspense } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import InstagramGrid, { InstagramGridProps } from './InstagramGrid';
import { PiInstagramLogoDuotone } from 'react-icons/pi';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const getInstagramPosts = async () => {
  try {
    const data = await fetch(url, { cache: 'no-store' });
    const feed = await data.json();
    return feed.data;
  } catch {}
};

const font = Caveat({
  subsets: ['latin'],
  weight: ['700'],
});

async function Instagram() {
  const posts =
    ((await getInstagramPosts()) as InstagramGridProps[]) || undefined;
  return (
    <div className="space-y-10 pt-10 pb-32 bg-ellipse from-custom-red-100 to-custom-red-400 h-full relative">
      <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-black to-transparent" />
      <h2
        className={cn(
          'p-5 select-none flex items-center justify-center gap-x-5 '
        )}
      >
        <TextGenerateEffect
          words="Share More Ice Cream On Instagram!"
          textClassName={cn(
            '!text-white text-5xl drop-shadow-black-md',
            font.className
          )}
        />
        <PiInstagramLogoDuotone
          size={60}
          className="hover:scale-110 transition-all"
          color="white"
        />
      </h2>

      <MaxWidthWrapper>
        {posts && (
          <Suspense
            fallback={
              <p className="text-center text-4xl mt-10 animate-pulse">
                Loding Posts . . .
              </p>
            }
          >
            <InstagramGrid posts={posts} />
          </Suspense>
        )}
        {!posts && (
          <h2 className="text-4xl uppercase text-white">
            Instagram Server is currently not available.
          </h2>
        )}
      </MaxWidthWrapper>
    </div>
  );
}

export default Instagram;
