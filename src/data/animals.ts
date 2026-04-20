import { Animal } from '@/types';

export const animals: Animal[] = [
  {
    id: 'deer-1',
    name: 'Red Deer',
    scientificName: 'Cervus elaphus',
    description: 'A large cervid species found across Europe and Asia. Known for impressive antlers and bugling calls. Social animals that live in herds and play important role in forest ecosystems.',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=500&h=500&fit=crop',
    climate: ['Temperate', 'Boreal'],
    region: ['Europe', 'Asia'],
    type: 'Mammal',
    diet: 'Herbivore',
    habitat: 'Forests, moorlands'
  },
  {
    id: 'eagle-1',
    name: 'Golden Eagle',
    scientificName: 'Aquila chrysaetos',
    description: 'A large bird of prey found across the Northern Hemisphere. Powerful hunters with exceptional eyesight and hunting abilities. Symbol of freedom and strength.',
    image: 'https://images.unsplash.com/photo-1531747056595-552989e44e56?w=500&h=500&fit=crop',
    climate: ['Temperate', 'Boreal', 'Alpine'],
    region: ['Europe', 'Asia', 'North America'],
    type: 'Bird',
    diet: 'Carnivore',
    habitat: 'Mountains, open areas'
  },
  {
    id: 'otter-1',
    name: 'European Otter',
    scientificName: 'Lutra lutra',
    description: 'A semi-aquatic mammal found across Europe and Asia. Once endangered, now recovering thanks to conservation efforts. Excellent swimmers adapted to life in freshwater and coastal habitats.',
    image: 'https://images.unsplash.com/photo-1580752949503-12d133acc64f?w=500&h=500&fit=crop',
    climate: ['Temperate', 'Boreal'],
    region: ['Europe', 'Asia'],
    type: 'Mammal',
    diet: 'Carnivore',
    habitat: 'Rivers, lakes, coastal areas'
  }
];
