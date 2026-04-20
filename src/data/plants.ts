import { Plant } from '@/types';

export const plants: Plant[] = [
  {
    id: 'pine-1',
    name: 'Scots Pine',
    scientificName: 'Pinus sylvestris',
    description: 'A large coniferous tree native to Europe and western Asia. Known for its distinctive reddish-brown bark and needle-like leaves. Highly valuable for timber and serves as an important species in forestry.',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&h=500&fit=crop',
    climate: ['Temperate', 'Boreal'],
    region: ['Europe', 'Asia'],
    type: 'Coniferous Tree',
    height: '20-40m',
    blooming: 'May-June'
  },
  {
    id: 'oak-1',
    name: 'English Oak',
    scientificName: 'Quercus robur',
    description: 'A deciduous tree widespread in Europe. Ancient and long-lived, symbolizing strength and durability. Important in ecosystems and culturally significant across many nations.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop',
    climate: ['Temperate'],
    region: ['Europe'],
    type: 'Deciduous Tree',
    height: '20-30m',
    blooming: 'April-May'
  },
  {
    id: 'birch-1',
    name: 'Silver Birch',
    scientificName: 'Betula pendula',
    description: 'A graceful tree with distinctive white bark, native to Europe and northern Asia. Often first to colonize disturbed areas and known for its flexible, drooping branches.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=500&fit=crop',
    climate: ['Temperate', 'Boreal'],
    region: ['Europe', 'Asia'],
    type: 'Deciduous Tree',
    height: '15-25m',
    blooming: 'March-May'
  },
  {
    id: 'orchid-1',
    name: 'Lady\'s Slipper Orchid',
    scientificName: 'Cypripedium calceolus',
    description: 'A rare and protected orchid species found in temperate regions. Features distinctive slipper-shaped flowers and is highly prized by gardeners and botanists.',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop',
    climate: ['Temperate'],
    region: ['Europe', 'North America', 'Asia'],
    type: 'Orchid',
    height: '20-60cm',
    blooming: 'May-June'
  },
  {
    id: 'bluebell-1',
    name: 'English Bluebell',
    scientificName: 'Hyacinthoides non-scripta',
    description: 'A bulbous plant producing vibrant blue flowers in spring. Creates stunning carpet displays in woodlands and is culturally important in British gardens.',
    image: 'https://images.unsplash.com/photo-1490763834785-efb342fcca90?w=500&h=500&fit=crop',
    climate: ['Temperate'],
    region: ['Europe'],
    type: 'Bulbous Plant',
    height: '20-50cm',
    blooming: 'April-May'
  }
];
