import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Product',
      links: [
        {
          text: 'Features',
          href: getPermalink('/product/features'),
        },
        {
          text: 'Security',
          href: getPermalink('/product/security'),
        },
        {
          text: 'Business Development',
          href: getPermalink('/product/bizdev'),
        },
      ],
    },
    {
      text: 'About',
      links: [
        {
          text: 'Sofistic.AI',
          href: getPermalink('/about'),
        },
        {
          text: 'The Team',
          href: getPermalink('/about/team'),
        },
        {
          text: 'Board & Strategic Advisors',
          href: getPermalink('/about/advisors'),
        },
        {
          text: 'Investment Partners',
          href: getPermalink('/about/partners'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact', href: getPermalink('/#contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Careers', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `©2024 Sofistic.AI`,
};
