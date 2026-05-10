import type { NotebookNote } from './NotebookSpread';
import NotebookSpread from './NotebookSpread';

const animalNotes: NotebookNote[] = [
  {
    key: 'mammals',
    title: 'Memeliler',
    desc: 'Büyük ve küçük memeli hayvanları, orman sakinleri.',
    href: '/nature/animals/mammals',
    tone: 'bg-[#dfc98d] border-[#8a6f31]/40',
    pin: '#7a4b35',
    top: '5%',
    side: '20%',
    rotate: '-3deg',
  },
  {
    key: 'birds',
    title: 'Kuşlar',
    desc: 'Yırtıcı, otçul ve göçmen kuş türleri.',
    href: '/nature/animals/birds',
    tone: 'bg-[#d9c39f] border-[#8a5d2f]/40',
    pin: '#476a4f',
    top: '10%',
    side: '30%',
    rotate: '2deg',
  },
  {
    key: 'reptiles',
    title: 'Sürüngenler',
    desc: 'Endemik ve yaygın sürüngen türleri.',
    href: '/nature/animals/reptiles',
    tone: 'bg-[#ddc7ab] border-[#88643f]/40',
    pin: '#6a543b',
    top: '15%',
    side: '10%',
    rotate: '-2deg',
  },
  {
    key: 'amphibians',
    title: 'Amfibiler',
    desc: 'Su ve karada yaşayan iki yaşamlı hayvanlar.',
    href: '/nature/animals/amphibians',
    tone: 'bg-[#cad3b7] border-[#56753a]/40',
    pin: '#5b6f4a',
    top: '5%',
    side: '-10%',
    rotate: '3deg',
  },
  {
    key: 'fish',
    title: 'Balıklar',
    desc: 'Tatlı su ve deniz eko-sistemleri balıkları.',
    href: '/nature/animals/fish',
    tone: 'bg-[#cfc6b4] border-[#3f6282]/40',
    pin: '#4f5f67',
    top: '10%',
    side: '-27%',
    rotate: '-2deg',
  },
  {
    key: 'insects',
    title: 'Böcekler',
    desc: 'Tozlayıcı böcekler ve omurgasız çeşitliliği.',
    href: '/nature/animals/insects',
    tone: 'bg-[#dcc8bf] border-[#8f4a58]/40',
    pin: '#7a5a53',
    top: '20%',
    side: '-40%',
    rotate: '2deg',
  },
];

const leftNotes = animalNotes.slice(0, 3);
const rightNotes = animalNotes.slice(3);

export default function AnimalsHandbook() {
  return (
    <div className="flex-1 mx-auto w-full max-w-[88rem] px-4 py-4 sm:py-5">
      <NotebookSpread leftNotes={leftNotes} rightNotes={rightNotes} size="xl" />
    </div>
  );
}