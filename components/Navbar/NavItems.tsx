import { MENU_CATEGORIES } from '@/config';
import { cn } from '@/lib/utils';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { NavFeaturedCheck } from './NavFeaturedCheck';

export const font = Caveat({
  subsets: ['latin'],
  weight: ['700'],
});

function PrimaryNavCategories() {
  const slice = MENU_CATEGORIES.slice(0, 2);

  return slice.map((item) => NavFeaturedCheck({ item }));
}

function SecondaryNavCategories() {
  const firstSlice = MENU_CATEGORIES.slice(2, 4);
  const secondSlice = MENU_CATEGORIES.slice(4);

  return (
    <>
      <div className="flex justify-evenly w-full">
        {firstSlice.map((item) => NavFeaturedCheck({ item }))}
      </div>
      {secondSlice.map((item) => NavFeaturedCheck({ item }))}
    </>
  );
}

function NavItems() {
  return (
    <div className={cn('hidden lg:flex items-center', font.className)}>
      <div className="space-x-5 flex-1">
        <PrimaryNavCategories />
      </div>
      <Link
        href="/"
        className="hover:scale-110 transition-transform relative h-36 w-36 md:h-40 md:w-40 flex-1"
      >
        <Image
          className="object-contain object-center drop-shadow-border"
          fill
          src="/ice-cream.png"
          alt="ice cream logo"
        />
      </Link>
      <div className="space-x-5 flex-1 flex flex-col items-center mt-auto gap-y-4">
        {<SecondaryNavCategories />}
      </div>
    </div>
  );
}

export default NavItems;
