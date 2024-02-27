import { cn } from '@/lib/utils';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { GiIceCreamScoop } from 'react-icons/gi';
import { buttonVariants } from '../ui/button';
import { CustomLink } from "./CustomLink";

export const font = Caveat({
  subsets: ['latin'],
  weight: ['700'],
});

function NavItems() {
  return (
    <div className={cn('hidden lg:flex items-center', font.className)}>
      <div className="space-x-5 flex-1">
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/our-story">Our Story</CustomLink>
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
        <div className="flex justify-evenly w-full">
          <CustomLink href="/best-sellers">Best Sellers</CustomLink>
          <CustomLink href="/ice-creams.pdf" isPdf>
            Menu
          </CustomLink>
        </div>
        <Link
          href="/order-now"
          className={cn(
            buttonVariants({
              variant: 'ice-cream',
              size: 'custom',
              className: 'lg:!text-4xl',
            }),
            'group'
          )}
        >
          Order Now
          <GiIceCreamScoop
            className="rotate-90 group-hover:rotate-180 transition-transform ml-2 -scale-y-100"
            size={32}
          />
        </Link>
      </div>
    </div>
  );
}

export default NavItems;


