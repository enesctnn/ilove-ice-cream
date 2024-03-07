import type { MENU_CATEGORIES } from '@/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { CustomLink } from './CustomLink';

export interface NavFeaturedCheckI {
  item: (typeof MENU_CATEGORIES)[number];
  onClick?: () => void;
}

/**
 * This function returns an Organized Link or CustomLink Element -"JSX.Element" that needs to be feed from MENU_CATEGORIES[number] depends on implemented item's featured object.
 *
 * @typedef {object} Props
 *
 * @property {object} item - MENU_CATEGORIES[number]
 * @property {function} onClick - function if needed to use inside links as onClick property
 *
 * @returns {JSX.Element}
 */
export function NavFeaturedCheck({ item, onClick }: NavFeaturedCheckI) {
  if (item.featured.custom && item.featured.Icon && item.featured.blank) {
    const Icon = item.featured.Icon;
    return (
      <a
        onClick={onClick}
        key={item.label}
        href={item.featured.href}
        target="_blank"
        className={cn(
          buttonVariants({
            variant: 'ice-cream',
            size: 'custom',
            className: 'lg:!text-4xl',
          }),
          'group'
        )}
      >
        {item.label}
        <Icon
          className="rotate-90 group-hover:rotate-180 transition-transform ml-2 -scale-y-100"
          size={32}
        />
      </a>
    );
  }
  if (item.featured.custom && item.featured.Icon) {
    const Icon = item.featured.Icon;
    return (
      <Link
        onClick={onClick}
        key={item.label}
        href={item.featured.href}
        className={cn(
          buttonVariants({
            variant: 'ice-cream',
            size: 'custom',
            className: 'lg:!text-4xl hover:scale-105',
          }),
          'group'
        )}
      >
        {item.label}
        <Icon
          className="rotate-90 group-hover:rotate-180 transition-transform ml-2 -scale-y-100"
          size={32}
        />
      </Link>
    );
  }
  if (item.featured.blank && item.featured.href) {
    return (
      <CustomLink
        onClick={onClick}
        key={item.label}
        href={item.featured.href}
        isPdf
        className="text-center"
      >
        {item.label}
      </CustomLink>
    );
  }
  return (
    <CustomLink
      onClick={onClick}
      key={item.label}
      href={item.href || ''}
      className="text-center"
    >
      {item.label}
    </CustomLink>
  );
}
