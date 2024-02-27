'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { font } from './NavItems';

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
        className={cn('navitems', font.className, className)}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn('navitems', font.className, className)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
