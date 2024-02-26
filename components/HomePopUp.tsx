'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';

import Image from 'next/image';
import { useEffect, useState } from 'react';

function HomePopUp() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => setDomLoaded(true), []);
  return (
    domLoaded && (
      <Dialog defaultOpen>
        <DialogContent className="max-w-sm sm:max-w-lg md:max-w-xl xl:max-w-2xl 2xl:max-w-5xl !flex items-center justify-between !p-0 overflow-hidden min-h-max">
          <div className="relative h-[400px] xl:h-[600px] flex-1 hover:scale-105 transition-transform">
            <Image
              src="/shakes.png"
              alt="company shake picutres"
              className="object-cover object-center"
              fill
            />
          </div>
          <section className="flex-1 flex flex-col h-[400px] xl:h-[600px] items-center justify-evenly px-4">
            <div className="relative h-2/6 w-full">
              <Image
                src="/ice-cream.png"
                alt="i love ice cream logo"
                className="object-contain object-center"
                fill
              />
            </div>
            <div className="space-y-7">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
                ‘Spring Sale
              </h2>
              <p className="text-muted-foreground font-bold text-center text-xs">
                3/1/24 - 3/8/23
              </p>
              <p className="text-lg font-medium capitalize lg:text-xl xl:text-2xl">
                Tell the cashier{' '}
                <span className="uppercase font-bold">‘I love ice cream’</span>{' '}
                for 20% off your order’
              </p>
            </div>
          </section>
        </DialogContent>
      </Dialog>
    )
  );
}

export default HomePopUp;
