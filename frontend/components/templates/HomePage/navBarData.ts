import { navBarItem } from 'types';

export const navBarItems: navBarItem[] = [
  { name: 'Features', type: 'link', href: '/' },
  { name: 'Pricing', type: 'link', href: '/' },
  { name: 'About', type: 'link', href: '/' },
  { name: 'Contact', type: 'link', href: '/' },
  { name: 'separator', type: 'divider' },
  { name: 'Login', type: 'link', href: '/auth/login' },
  { name: 'Signup', type: 'link', href: '/auth/sign-up' },
];
