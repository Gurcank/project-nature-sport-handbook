import type { NotebookNote } from './NotebookSpread';
import NotebookSpread from './NotebookSpread';

const stoneNotes: NotebookNote[] = [
  {
    key: 'igneous',
    title: 'Magmatik',
    desc: 'Erimis kayadan olusan tas gruplari.',
    href: '/nature/stones/igneous',
    tone: 'bg-[#e3d5bb] border-[#8a7a5a]/40',
    pin: '#71583f',
    top: '6%',
    side: '11%',
    rotate: '-3deg',
  },
  {
    key: 'sedimentary',
    title: 'Sedimanter',
    desc: 'Tabakali birikimle olusan taslar.',
    href: '/nature/stones/sedimentary',
    tone: 'bg-[#d6cfbf] border-[#7a7a7a]/40',
    pin: '#68605a',
    top: '42%',
    side: '16%',
    rotate: '1deg',
  },
  {
    key: 'metamorphic',
    title: 'Metamorfik',
    desc: 'Isi ve basincla donusen kayaçlar.',
    href: '/nature/stones/metamorphic',
    tone: 'bg-[#d3d0c2] border-[#6a6a8a]/40',
    pin: '#5b5b6a',
    top: '6%',
    side: '-12%',
    rotate: '-2deg',
  },
  {
    key: 'minerals',
    title: 'Mineraller',
    desc: 'Tek kristal ve mineral turleri.',
    href: '/nature/stones/minerals',
    tone: 'bg-[#cfddd3] border-[#5a7a8a]/40',
    pin: '#58706a',
    top: '44%',
    side: '-16%',
    rotate: '2deg',
  },
];

const leftNotes = stoneNotes.slice(0, 2);
const rightNotes = stoneNotes.slice(2);

export default function StonesHandbook() {
  return (
    <div className="flex-1 mx-auto w-full max-w-[88rem] px-4 py-4 sm:py-5">
      <NotebookSpread leftNotes={leftNotes} rightNotes={rightNotes} size="xl" />
    </div>
  );
}
