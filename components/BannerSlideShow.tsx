'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { MotionValue, motion } from 'framer-motion';

function BannerSlideShow({
  images,
  style,
}: {
  images: { src: string; alt: string }[];
  style: { y: MotionValue<number>; scale: MotionValue<number> };
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <motion.div
      style={style}
      className="relative w-full max-h-[1200px] min-h-[700px] overflow-hidden lg:min-h-[850px]"
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          className={cn(
            'object-cover object-center scale-125 -translate-x-4 opacity-0 transition-all duration-500 ease-in-out rotate-6 user-drag-none',
            index === currentImageIndex
              ? 'z-10 opacity-100 scale-100 translate-x-0 rotate-0'
              : ''
          )}
          alt={image.alt}
          fill
          quality={100}
        />
      ))}
      <Button
        className="absolute bottom-0 right-5 z-50 rounded-t-sm rounded-b-none lg:text-lg transition-all duration animate-bounce hover:animate-none active:animate-ping"
        variant="custom"
      >
        Contact us
      </Button>
    </motion.div>
  );
}

export default BannerSlideShow;
