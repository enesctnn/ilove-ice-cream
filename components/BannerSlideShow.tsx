'use client';

import { images } from '@/lib/our-story';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

function BannerSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-h-[900px] min-h-[500px] overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          className={cn(
            'object-cover scale-110 -translate-x-4 opacity-0 transition-all duration-500 ease-in-out user-drag-none',
            index === currentImageIndex
              ? 'z-10 opacity-100 scale-100 translate-x-0'
              : ''
          )}
          alt={image.alt}
          fill
          quality={100}
        />
      ))}
      <Button
        className="absolute bottom-0 right-5 z-10 rounded-t-sm rounded-b-none lg:text-lg transition-all duration animate-bounce hover:animate-none active:animate-ping"
        variant="custom"
      >
        Contact us
      </Button>
    </div>
  );
}

export default BannerSlideShow;
