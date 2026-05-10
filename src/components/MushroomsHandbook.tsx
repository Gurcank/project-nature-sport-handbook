import type { NotebookNote } from './NotebookSpread';
import NotebookSpread from './NotebookSpread';

const mushroomNotes: NotebookNote[] = [
  {
    key: 'edible',
    title: 'Yenilebilir',
    desc: 'Mutfakta kullanılan yenilebilir türler.',
    href: '/nature/mushrooms/edible',
    tone: 'bg-[#ded0ab] border-[#8a6f31]/40',
    pin: '#8a673f',
    top: '5%',
    side: '14%',
    rotate: '-3deg',
  },
  {
    key: 'toxic',
    title: 'Zehirli',
    desc: 'Tüketimi riskli veya zehirli türler.',
    href: '/nature/mushrooms/toxic',
    tone: 'bg-[#d9c0ba] border-[#8a4a4a]/40',
    pin: '#7b5450',
    top: '6%',
    side: '-16%',
    rotate: '2deg',
  },
];

const leftNotes = [mushroomNotes[0]];
const rightNotes = [mushroomNotes[1]];

export default function MushroomsHandbook() {
  return (
    <div className="flex-1 mx-auto w-full max-w-[88rem] px-4 py-4 sm:py-5">
      <NotebookSpread leftNotes={leftNotes} rightNotes={rightNotes} size="xl" />
    </div>
  );
}
