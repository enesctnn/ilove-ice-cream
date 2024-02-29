import { GiIceCreamScoop } from 'react-icons/gi';

export const MENU_CATEGORIES = [
  {
    label: 'Home',
    href: '/',
    featured: {
      custom: false,
    },
  },
  {
    label: 'Our Story',
    href: '/our-story',
    featured: {
      custom: false,
    },
  },
  {
    label: 'Best Sellers',
    href: '/best-sellers',
    featured: {
      custom: false,
    },
  },
  {
    label: 'Menu',
    href: '/menu',
    featured: {
      custom: false,
      pdf: '/ice-creams.pdf',
    },
  },
  {
    label: 'Order Now',
    href: '/order-now',
    featured: {
      custom: true,
      Icon: GiIceCreamScoop,
    },
  },
];
