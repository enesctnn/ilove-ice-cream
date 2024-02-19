'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollYWrapper from './animations/ScrollYWrapper';
import { Caveat } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const font = Caveat({
  subsets: ['latin'],
  weight: ['600'],
});
function CommercialVideo() {
  const { scrollY } = useScroll();
  const videoPosition = useTransform(scrollY, [0, 1000], [0, 1000]);

  return (
    <ScrollYWrapper>
      <div className="relative select-none">
        <div
          className={cn(
            font.className,
            'absolute w-full z-10 max-lg:bottom-4 max-2xl:bottom-10 2xl:top-[700px] flex flex-col justify-center items-center gap-y-2'
          )}
        >
          <h1 className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-t from-black to-ice-cream-100 drop-shadow-md py-1 pr-3">
            &ldquo;I Love Ice Cream&rdquo; with every delightful sip and scoop!
          </h1>
          <Link
            href="/about"
            className={buttonVariants({
              variant: 'link',
              className: 'text-3xl text-black',
            })}
          >
            Discover More!
          </Link>
        </div>
        <motion.video
          className="w-full"
          style={{ y: videoPosition }}
          muted
          autoPlay
          loop
          playsInline
        >
          <source src="/commercial-video.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </ScrollYWrapper>
  );
}

export default CommercialVideo;
