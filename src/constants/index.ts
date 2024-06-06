export const USER_IMAGES = [
  {
    id: 1,
    src: '/users/user-1.png',
  },
  {
    id: 2,
    src: '/users/user-2.png',
  },
  {
    id: 3,
    src: '/users/user-3.png',
  },
  {
    id: 4,
    src: '/users/user-4.jpg',
  },
  {
    id: 5,
    src: '/users/user-5.jpg',
  },
] as const;

export const STARS = 5;

export const TESTIMONIALS = [
  {
    id: 1,
    rating: STARS,
    quote: `This case feels durable and I even got a compliment on the design. Had the case now for 2 and a half months and <span class='p-0.5 bg-slate-800 text-white'>the image is super clear</span>, on the case I had before the image started fading into yellow-ish color after a couple of weeks. Love it.`,
    userImg: '/users/user-1.png',
    userName: 'Jonathan',
    verified: true,
  },
  {
    id: 2,
    rating: STARS,
    quote: `I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratch marks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner, <span class='p-0.5 bg-slate-800 text-white'>looks brand new after about half a year</span>. I dig it.`,
    userImg: '/users/user-3.png',
    userName: 'Melissa',
    verified: true,
  },
] as const;

export const PHONE_IMAGES = [
  '/testimonials/1.jpg',
  '/testimonials/2.jpg',
  '/testimonials/3.jpg',
  '/testimonials/4.jpg',
  '/testimonials/5.jpg',
  '/testimonials/6.jpg',
];

export const LIST_ITEMS = [
  {
    id: 1,
    name: 'High-quality silicone material',
  },
  {
    id: 2,
    name: 'Scratch- and fingerprint resistant coating',
  },
  {
    id: 3,
    name: 'Wireless charging compatible',
  },
  {
    id: 4,
    name: '2 year print warranty',
  },
] as const;

export const FOOTER_ITEMS = [
  {
    id: 1,
    name: 'Terms',
  },
  {
    id: 2,
    name: 'Privacy Policy',
  },
  {
    id: 3,
    name: 'Cookie Policy',
  },
] as const;

export const STEPS = [
  {
    name: 'Step 1: Add image',
    description: 'Choose an image for your case',
    url: '/upload',
  },
  {
    name: 'Step 2: Customize design',
    description: 'Make the case yours',
    url: '/design',
  },
  {
    name: 'Step 3: ',
    description: 'Review your final design',
    url: '/preview',
  },
];

export const HIGHLIGHTS_LIST_ITEMS = [
  {
    name: 'Wireless charging compatible',
  },
  {
    name: 'TPU shock absorption',
  },
  {
    name: 'Packaging made from recycled materials',
  },
  {
    name: '2 years print warranty',
  },
];

export const MATERIAL_LIST_ITEMS = [
  {
    id: 1,
    name: 'High-quality silicone material',
  },
  {
    id: 2,
    name: 'Scratch- and fingerprint resistant coating',
  },
];
