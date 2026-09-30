const unsplash = (id, width = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;

export const IMAGES = {
  hero: unsplash('1512621776951-a57141f2eefd', 1000),
  aboutPrimary: unsplash('1490645935967-10de6ba17061', 900),
  aboutSecondary: unsplash('1546069901-ba9599a7e63c', 700),
  planBreakfast: unsplash('1484723091739-30a097e8f929', 700),
  planLunch: unsplash('1546069901-ba9599a7e63c', 700),
  planDinner: unsplash('1467003909585-2f8a72700288', 700),
  planSnacks: unsplash('1498837167922-ddd27525d352', 700),
  pricingFeature: unsplash('1504674900247-0877df9cc836', 800),
  ctaBackground: unsplash('1490645935967-10de6ba17061', 1200),
};

export const AVATARS = {
  amara: 'https://randomuser.me/api/portraits/women/44.jpg',
  daniel: 'https://randomuser.me/api/portraits/men/32.jpg',
  sophie: 'https://randomuser.me/api/portraits/women/68.jpg',
};