'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Caveat } from 'next/font/google';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const font = Caveat({
  subsets: ['latin'],
  weight: ['600'],
});

function CommercialVideo() {
  const { scrollY } = useScroll();
  const videoPosition = useTransform(scrollY, [0, 1000], [0, 1000]);
  const videoScale = useTransform(scrollY, [0, 1000], [1, 3]);
  const componentOpacity = useTransform(
    scrollY,
    [0, 200, 400, 600],
    [1, 0.85, 0.85, 0.3]
  );
  return (
    <motion.div
      className="relative select-none overflow-hidden max-h-[800px] min-h-[300px] transition-opacity ease-linear duration-75"
      style={{ opacity: componentOpacity }}
    >
      <div
        className={cn(
          font.className,
          'absolute w-full z-10 bottom-4 2xl:bottom-10 flex flex-col justify-center items-center gap-y-2'
        )}
      >
        <h1 className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-t from-black to-ice-cream-100 drop-shadow-white-border py-1 pr-3 whitespace-nowrap">
          &ldquo;I Love Ice Cream&rdquo; with every delightful sip and scoop!
        </h1>
        <Link
          href="/about"
          className={cn(
            buttonVariants({
              variant: 'link',
            }),
            'text-black text-3xl drop-shadow-yellow-border hover:drop-shadow-white-border hover:opacity-90 hover:scale-105 transition-all'
          )}
        >
          Discover More!
        </Link>
      </div>
      <motion.video
        className="w-full"
        style={{ y: videoPosition, scale: videoScale }}
        muted
        autoPlay
        loop
        playsInline
      >
        <source src="/commercial-video.mp4" type="video/mp4" />
      </motion.video>
    </motion.div>
  );
}

export default CommercialVideo;
