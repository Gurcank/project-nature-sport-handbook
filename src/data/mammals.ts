import type { Language } from '@/context/SettingsContext';

export type MammalEntry = {
  id: string;
  name: Record<Language, string>;
  scientificName: string;
  description: Record<Language, string>;
  diet: string;
  habitat: string;
  image: string;
};

const mammals: MammalEntry[] = [
  {
    id: 'brown-bear',
    name: { tr: 'Boz Ayı', en: 'Brown Bear' },
    scientificName: 'Ursus arctos',
    description: {
      tr: 'Ormanlık alanlarda yaşayan, güçlü gövdesiyle bilinen iri bir memeli.',
      en: 'A powerful forest mammal known for its large build and broad paws.',
    },
    diet: 'Omnivore',
    habitat: 'Forests, mountains',
    image: 'https://source.unsplash.com/featured/900x700/?brown-bear',
  },
  {
    id: 'gray-wolf',
    name: { tr: 'Kurt', en: 'Gray Wolf' },
    scientificName: 'Canis lupus',
    description: {
      tr: 'Sürü halinde yaşayan, zeki ve dayanıklı bir yırtıcı tür.',
      en: 'A highly social predator that lives and hunts in packs.',
    },
    diet: 'Carnivore',
    habitat: 'Forests, tundra, grasslands',
    image: 'https://source.unsplash.com/featured/900x700/?wolf',
  },
  {
    id: 'red-fox',
    name: { tr: 'Tilki', en: 'Red Fox' },
    scientificName: 'Vulpes vulpes',
    description: {
      tr: 'Çevik hareketleri ve keskin duyularıyla bilinen küçük bir yırtıcı.',
      en: 'A small, agile mammal with sharp senses and clever hunting habits.',
    },
    diet: 'Omnivore',
    habitat: 'Woodlands, fields, urban edges',
    image: 'https://source.unsplash.com/featured/900x700/?fox',
  },
  {
    id: 'red-deer',
    name: { tr: 'Geyik', en: 'Red Deer' },
    scientificName: 'Cervus elaphus',
    description: {
      tr: 'Geniş ormanlarda ve açık arazilerde görülen zarif bir otçul.',
      en: 'An elegant herbivore often seen in forests and open landscapes.',
    },
    diet: 'Herbivore',
    habitat: 'Forests, moorlands',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=900&h=700&fit=crop',
  },
  {
    id: 'european-otter',
    name: { tr: 'Su Samuru', en: 'European Otter' },
    scientificName: 'Lutra lutra',
    description: {
      tr: 'Tatlı sularda ustaca yüzebilen yarı sucul bir memeli.',
      en: 'A semi-aquatic mammal adapted to rivers, lakes, and coasts.',
    },
    diet: 'Carnivore',
    habitat: 'Rivers, lakes, coastal areas',
    image: 'https://images.unsplash.com/photo-1580752949503-12d133acc64f?w=900&h=700&fit=crop',
  },
  {
    id: 'eurasian-lynx',
    name: { tr: 'Vaşak', en: 'Eurasian Lynx' },
    scientificName: 'Lynx lynx',
    description: {
      tr: 'Püsküllü kulakları ve sessiz avlanma yeteneğiyle dikkat çeken yaban kedisi.',
      en: 'A wild cat recognized by its tufted ears and stealthy hunting style.',
    },
    diet: 'Carnivore',
    habitat: 'Forests, rocky mountains',
    image: 'https://source.unsplash.com/featured/900x700/?lynx',
  },
  {
    id: 'wild-boar',
    name: { tr: 'Yaban Domuzu', en: 'Wild Boar' },
    scientificName: 'Sus scrofa',
    description: {
      tr: 'Güçlü burun yapısıyla toprağı eşeleyerek beslenen dayanıklı tür.',
      en: 'A tough, adaptable mammal that forages by rooting in soil.',
    },
    diet: 'Omnivore',
    habitat: 'Forests, scrublands',
    image: 'https://source.unsplash.com/featured/900x700/?wild-boar',
  },
  {
    id: 'european-badger',
    name: { tr: 'Porsuk', en: 'European Badger' },
    scientificName: 'Meles meles',
    description: {
      tr: 'Yer altı yuvalarıyla bilinen, çizgili yüzlü gececil bir memeli.',
      en: 'A nocturnal mammal known for its striped face and underground setts.',
    },
    diet: 'Omnivore',
    habitat: 'Woodlands, hedgerows',
    image: 'https://source.unsplash.com/featured/900x700/?badger',
  },
  {
    id: 'beaver',
    name: { tr: 'Kunduz', en: 'Beaver' },
    scientificName: 'Castor fiber',
    description: {
      tr: 'Su kenarlarında baraj kuran ve ekosistemi dönüştüren çalışkan memeli.',
      en: 'A hardworking dam-building mammal that reshapes waterways.',
    },
    diet: 'Herbivore',
    habitat: 'Rivers, wetlands',
    image: 'https://source.unsplash.com/featured/900x700/?beaver',
  },
  {
    id: 'hedgehog',
    name: { tr: 'Kirpi', en: 'Hedgehog' },
    scientificName: 'Erinaceus europaeus',
    description: {
      tr: 'Gece aktif olan, küçük böceklerle beslenen dikenli bir memeli.',
      en: 'A small nocturnal mammal covered in protective spines.',
    },
    diet: 'Insectivore',
    habitat: 'Gardens, woodlands, hedgerows',
    image: 'https://source.unsplash.com/featured/900x700/?hedgehog',
  },
  {
    id: 'squirrel',
    name: { tr: 'Sincap', en: 'Squirrel' },
    scientificName: 'Sciurus vulgaris',
    description: {
      tr: 'Ağaçlar arasında çevik hareket eden ve yiyecek saklayan küçük bir tür.',
      en: 'A nimble tree-dwelling mammal known for storing food.',
    },
    diet: 'Omnivore',
    habitat: 'Forests, parks',
    image: 'https://source.unsplash.com/featured/900x700/?squirrel',
  },
  {
    id: 'bat',
    name: { tr: 'Yarasa', en: 'Bat' },
    scientificName: 'Chiroptera',
    description: {
      tr: 'Ekolokasyonla yön bulan, gece uçuşuna uyum sağlamış tek memeli grubu.',
      en: 'The only mammal group capable of true flight, using echolocation at night.',
    },
    diet: 'Insectivore / Nectarivore',
    habitat: 'Caves, forests, urban roosts',
    image: 'https://source.unsplash.com/featured/900x700/?bat',
  },
];

export const mammalSpreads: Record<Language, MammalEntry[][]> = {
  tr: [mammals.slice(0, 6), mammals.slice(6)],
  en: [mammals.slice(0, 6), mammals.slice(6)],
};
