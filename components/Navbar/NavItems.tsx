import { cn } from '@/lib/utils';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { GiIceCreamScoop } from 'react-icons/gi';
import { buttonVariants } from '../ui/button';

const font = Caveat({
  subsets: ['latin'],
  weight: ['700'],
});

function NavItems() {
  return (
    <div
      className={cn(
        'flex items-center justify-between whitespace-nowrap',
        font.className
      )}
    >
      <div className="space-x-5">
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/our-story">Our Story</CustomLink>
      </div>
      <Link href="/" className="ml-8 hover:scale-110 transition-transform">
        <Image
          width={120}
          height={170}
          src="/ice-cream.png"
          alt="ice cream logo"
        />
      </Link>
      <div className="space-x-5">
        <CustomLink
          href="https://mag.wcoomd.org/uploads/2018/05/blank.pdf"
          isPdf
        >
          Best Sellers
        </CustomLink>
        <CustomLink href="/ice-creams.pdf" isPdf>
          Menu
        </CustomLink>
        <Link
          href="/order-now"
          className={cn(
            buttonVariants({
              variant: 'ice-cream',
              size: 'custom',
            }),
            'group'
          )}
        >
          Order{' '}
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

const CustomLink = ({
  href,
  children,
  isPdf,
}: {
  href: string;
  children: React.ReactNode;
  isPdf?: boolean;
}) => {
  if (isPdf) {
    return (
      <a
        href={href}
        target="_blank"
        className={cn(
          'text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-ice-cream-100 pr-1 drop-shadow-white-border',
          font.className
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        'text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-ice-cream-100 pr-1 drop-shadow-white-border',
        font.className
      )}
    >
      {children}
    </Link>
  );
};
