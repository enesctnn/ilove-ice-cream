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
    featured: {
      custom: false,
      blank: true,
      href: '/ice-creams.pdf',
    },
  },
  {
    label: 'Order Now',
    featured: {
      custom: true,
      blank: true,
      href: 'https://order.online/store/i-love-ice-cream-east-york-24456577/?activationPreview=true&hideModal=true&pickup=true',
      Icon: GiIceCreamScoop,
    },
  },
];
