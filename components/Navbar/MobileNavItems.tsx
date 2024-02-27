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
import { cn } from '@/lib/utils';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenuOutline } from 'react-icons/io5';
import { CustomLink } from './CustomLink';
import { GiIceCreamScoop } from 'react-icons/gi';
import { buttonVariants } from '../ui/button';
import { useRef } from 'react';

const font = Caveat({
  subsets: ['latin'],
  weight: ['700'],
});

function MobileNavItems() {
  const sheetCloseRef = useRef<HTMLButtonElement>(null);

  function onClick() {
    sheetCloseRef.current?.click();
  }

  return (
    <div className="flex lg:hidden h-max items-end px-5 z-50">
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
        <SheetTrigger>
          <IoMenuOutline
            className="hover:scale-105 transition-transform text-white drop-shadow-border"
            size="50"
          />
        </SheetTrigger>
        <SheetContent
          side="top"
          className={cn(font.className, '!flex !flex-col !items-center')}
        >
          <SheetHeader>
            <SheetTitle className="!text-4xl text-center">
              Welcome To I Love Ice Cream
            </SheetTitle>
            <CustomLink href="/" className="mobilenavitems" onClick={onClick}>
              Home
            </CustomLink>
            <CustomLink
              href="/our-story"
              className="mobilenavitems"
              onClick={onClick}
            >
              Our Story
            </CustomLink>
            <CustomLink
              href="/best-sellers"
              className="mobilenavitems"
              onClick={onClick}
            >
              Best Sellers
            </CustomLink>
            <CustomLink
              href="/ice-creams.pdf"
              isPdf
              className="mobilenavitems"
              onClick={onClick}
            >
              Menu
            </CustomLink>
            <Link
              href="/order-now"
              className={cn(
                buttonVariants({
                  variant: 'ice-cream',
                  size: 'custom',
                  className: 'mobilenavitems',
                }),
                'group'
              )}
              onClick={onClick}
            >
              Order Now
              <GiIceCreamScoop
                className="rotate-90 group-hover:rotate-180 transition-transform ml-2 -scale-y-100"
                size={32}
              />
            </Link>
            <SheetDescription>{`Make changes to this area.`}</SheetDescription>
          </SheetHeader>
          <SheetClose ref={sheetCloseRef} hidden />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavItems;
