import type { NotebookNote } from './NotebookSpread';
import NotebookSpread from './NotebookSpread';

const plantNotes: NotebookNote[] = [
  {
    key: 'trees',
    title: 'Ağaçlar',
    desc: 'Orman ve park ekosistemlerinde yaygın ağaç türleri.',
    href: '/nature/plants/trees',
    tone: 'bg-[#ced2b0] border-[#4f6d36]/40',
    pin: '#5c6b47',
    top: '5%',
    side: '10%',
    rotate: '-3deg',
  },
  {
    key: 'herbs',
    title: 'Otlar',
    desc: 'Yumuşak gövdeli otsu türler.',
    href: '/nature/plants/herbs',
    tone: 'bg-[#ddd1b7] border-[#8a7355]/40',
    pin: '#6d5a42',
    top: '10%',
    side: '26%',
    rotate: '2deg',
  },
  {
    key: 'shrubs',
    title: 'Çalılar',
    desc: 'Kısa boylu odunsu bitki türleri.',
    href: '/nature/plants/shrubs',
    tone: 'bg-[#d7c0a5] border-[#7a5c37]/40',
    pin: '#7a5a35',
    top: '15%',
    side: '12%',
    rotate: '-2deg',
  },
  {
    key: 'flowers',
    title: 'Çiçekli Bitkiler',
    desc: 'Çiçek ve tohum oluşturan bitki grupları.',
    href: '/nature/plants/flowers',
    tone: 'bg-[#dfcfb4] border-[#8a6f31]/40',
    pin: '#8a673f',
    top: '8%',
    side: '24%',
    rotate: '3deg',
  },
  {
    key: 'mosses',
    title: 'Yosunlar',
    desc: 'Nemli habitatlarda bulunan sporlu bitki toplulukları.',
    href: '/nature/plants/mosses',
    tone: 'bg-[#c9d1b9] border-[#5a7a4a]/40',
    pin: '#5f7250',
    top: '60%',
    side: '12%',
    rotate: '-2deg',
  },
  {
    key: 'aquatic',
    title: 'Su Bitkileri',
    desc: 'Tatlı su ve kıyı bölgelerinde yaşayan türler.',
    href: '/nature/plants/aquatic',
    tone: 'bg-[#cfd0bd] border-[#4a6b7a]/40',
    pin: '#5f6f67',
    top: '58%',
    side: '26%',
    rotate: '2deg',
  },
];

const leftNotes = plantNotes.slice(0, 3);
const rightNotes = plantNotes.slice(3);

export default function PlantsHandbook() {
  return (
    <div className="flex-1 mx-auto w-full max-w-[88rem] px-4 py-4 sm:py-5">
      <NotebookSpread leftNotes={leftNotes} rightNotes={rightNotes} size="xl" />
    </div>
  );
}
