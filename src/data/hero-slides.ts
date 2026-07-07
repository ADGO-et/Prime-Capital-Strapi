export type SeedHeroSlide = {
  order: number;
  imageFile: string;
  title: string;
  description: string;
  alignment: 'left' | 'center' | 'right';
  buttons?: { text: string; href: string; variant: 'primary' | 'secondary' }[];
};

const repeatedDescription =
  "Prime Capital S.C. — Innovation, Integrity, and Excellence in Investment Banking";

export const heroSlides: SeedHeroSlide[] = [
  {
    order: 0,
    imageFile: 'image1.png',
    title: "Empowering Ethiopia's Financial Future",
    description: repeatedDescription,
    alignment: 'center',
    buttons: [
      { text: 'Explore Our Services', href: '/services', variant: 'primary' },
      { text: 'Learn More', href: '/about', variant: 'secondary' },
    ],
  },
  {
    order: 1,
    imageFile: 'image2.png',
    title: 'Strategic Investment Banking Solutions',
    description:
      'Comprehensive advisory services tailored to drive growth and maximize value for our clients',
    alignment: 'left',
    buttons: [{ text: 'Our Services', href: '/services', variant: 'primary' }],
  },
  {
    order: 2,
    imageFile: 'image3.png',
    title: "Building Tomorrow's Capital Markets",
    description:
      "Leading Ethiopia's financial transformation with expertise, innovation, and unwavering commitment",
    alignment: 'right',
    buttons: [
      { text: 'Join Our Team', href: '/vacancy', variant: 'primary' },
      { text: 'Contact Us', href: '/contact-us', variant: 'secondary' },
    ],
  },
  {
    order: 3,
    imageFile: 'image-1.jpg',
    title: 'Prime Capital in Motion',
    description: repeatedDescription,
    alignment: 'center',
  },
  {
    order: 4,
    imageFile: 'image-3.jpg',
    title: 'Trusted Financial Leadership',
    description: repeatedDescription,
    alignment: 'right',
  },
  {
    order: 5,
    imageFile: 'image-4.jpg',
    title: 'Driving Market Confidence',
    description: repeatedDescription,
    alignment: 'center',
  },
];
