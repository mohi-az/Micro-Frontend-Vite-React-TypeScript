import type { Product } from '../ProductsList.type';

// Stable local data keeps the federation demo runnable without a third-party API key.
export const catalog: Product[] = [
  { id: 1376907, BrandName: 'HAIBIKE', Name: 'Trekking S 10', Price: 4999, discount: 15, image: '1376907.jpg', detail: 'A comfortable trekking e-bike for daily rides and longer journeys.' },
  { id: 1503359, BrandName: 'CUBE', Name: 'Touring Hybrid', Price: 3299, image: '1503359.jpg', detail: 'An all-round electric bike for commuting and weekend trips.' },
  { id: 1700342, BrandName: 'SPECIALIZED', Name: 'Turbo Vado', Price: 3899, discount: 10, image: '1700342.jpg', detail: 'A practical city e-bike with a relaxed riding position.' },
  { id: 1849138, BrandName: 'SCOTT', Name: 'Sub Cross eRIDE', Price: 3599, image: '1849138.jpg', detail: 'A versatile bike for roads and light trails.' },
  { id: 1921710, BrandName: 'TREK', Name: 'Allant+', Price: 4299, discount: 12, image: '1921710.jpg', detail: 'A sporty e-bike designed for everyday travel.' },
  { id: 1921713, BrandName: 'GIANT', Name: 'Explore E+', Price: 3199, image: '1921713.jpg', detail: 'A comfortable bike for city streets and touring routes.' },
  { id: 2032149, BrandName: 'HAIBIKE', Name: 'AllMtn', Price: 5499, image: '2032149.jpg', detail: 'An electric mountain bike for varied terrain.' },
];
