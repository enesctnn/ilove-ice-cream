'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MENU_CATEGORIES } from '@/config';
import { cn } from '@/lib/utils';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { NavFeaturedCheck } from './NavFeaturedCheck';

const font = Caveat({
  subsets: ['latin'],
  weight: ['700'],
});

const NavigationItems = ({ onClick }: { onClick: () => void }) =>
  MENU_CATEGORIES.map((item) => NavFeaturedCheck({ item, onClick }));

function MobileNavItems() {
  const sheetCloseRef = useRef<HTMLButtonElement>(null);

  function closeModalHandler() {
    sheetCloseRef.current?.click();
  }

  return (
    <div className="flex lg:hidden h-max items-end px-5 z-50">
      <div className="flex-1" aria-hidden />
      <Link
        href="/"
        className="hover:scale-110 transition-transform relative h-32 w-32 mx-auto"
      >
        <Image
          className="object-contain object-center drop-shadow-border"
          fill
          src="/ice-cream.png"
          alt="ice cream logo"
        />
      </Link>
      <Sheet>
        <SheetTrigger className="flex-1">
          <IoMenuOutline
            className="hover:scale-105 transition-transform text-white drop-shadow-border ml-auto"
            size="50"
          />
        </SheetTrigger>
        <SheetContent
          side="top"
          className={cn(font.className, '!flex !flex-col items-center')}
        >
          <SheetHeader>
            <SheetTitle className="!text-4xl text-center">
              Welcome To I Love Ice Cream
            </SheetTitle>
            <NavigationItems onClick={closeModalHandler} />
            <SheetDescription>{`Make changes to this area.`}</SheetDescription>
          </SheetHeader>
          <SheetClose ref={sheetCloseRef} hidden />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavItems;
