import { cn } from '@/lib/utils';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
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
        <NavLink href="/">Home</NavLink>
        <NavLink href="/our-story">Our Story</NavLink>
      </div>
      <Link href="/" className="ml-8">
        <Image
          width={120}
          height={170}
          src="/ice-cream.png"
          alt="ice cream logo"
        />
      </Link>
      <div className="space-x-5">
        <NavLink href="/best-sellers">Best Sellers</NavLink>
        <NavLink href="/menu">Menu</NavLink>
        <Link
          href="/order"
          className={buttonVariants({
            variant: 'ice-cream',
            size: 'custom',
          })}
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}

export default NavItems;

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className={cn(
      'text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-ice-cream-100 pr-1 drop-shadow-md',
      font.className
    )}
  >
    {children}
  </Link>
);
