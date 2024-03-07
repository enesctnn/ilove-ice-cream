import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import Link from 'next/link';

const myFont = localFont({ src: '../../public/fonts/Pally-Regular.ttf' });

export const CustomLink = ({
  href,
  children,
  isPdf,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isPdf?: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  if (isPdf) {
    return (
      <a
        href={href}
        target="_blank"
        className={cn('navitems', myFont.className, className)}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn('navitems', myFont.className, className)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
