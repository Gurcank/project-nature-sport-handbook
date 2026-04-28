'use client';

import { useSettings } from '@/context/SettingsContext';
import NotebookSpread, { type NotebookNote } from '@/components/NotebookSpread';

const categories = [
  {
    key: 'mammals',
    tr: { title: 'Memeliler', desc: 'Kara ve deniz memelileri.' },
    en: { title: 'Mammals', desc: 'Land and marine mammal groups.' },
    note: {
      tone: 'bg-[#f6da7f] border-[#8a6f31]/40',
      pin: '#9b2c2c',
    },
  },
  {
    key: 'birds',
    tr: { title: 'Kuslar', desc: 'Yirtici, otcul ve goçmen kus türleri.' },
    en: { title: 'Birds', desc: 'Raptors, herbivores and migratory birds.' },
    note: {
      tone: 'bg-[#ffd9a8] border-[#8a5d2f]/40',
      pin: '#1f4d8f',
    },
  },
  {
    key: 'reptiles',
    tr: { title: 'Surungenler', desc: 'Yilan, kertenkele ve benzeri türler.' },
    en: { title: 'Reptiles', desc: 'Snakes, lizards and similar species.' },
    note: {
      tone: 'bg-[#ffe3b8] border-[#88643f]/40',
      pin: '#6b3a99',
    },
  },
  {
    key: 'amphibians',
    tr: { title: 'Amfibiler', desc: 'Hem karada hem suda yasayan türler.' },
    en: { title: 'Amphibians', desc: 'Species living both on land and in water.' },
    note: {
      tone: 'bg-[#d9efc7] border-[#56753a]/40',
      pin: '#2e6b3e',
    },
  },
  {
    key: 'fish',
    tr: { title: 'Baliklar', desc: 'Tatli su ve deniz baliklari.' },
    en: { title: 'Fish', desc: 'Freshwater and marine fish groups.' },
    note: {
      tone: 'bg-[#cfe7f7] border-[#3f6282]/40',
      pin: '#0f4a7f',
    },
  },
  {
    key: 'insects',
    tr: { title: 'Bocekler', desc: 'Tozlayicilar ve diger omurgasizlar.' },
    en: { title: 'Insects', desc: 'Pollinators and other invertebrates.' },
    note: {
      tone: 'bg-[#f9d6de] border-[#8f4a58]/40',
      pin: '#7c1d34',
    },
  },
] as const;

export default function AnimalsPage() {
  const { language } = useSettings();
  const isTr = language === 'tr';
  const leftPageNotes: NotebookNote[] = categories.slice(0, 3).map((cat, index) => {
    const placements = [
      { top: '10%', side: '14%', rotate: '-4deg' },
      { top: '39%', side: '18%', rotate: '2deg' },
      { top: '56%', side: '15%', rotate: '-3deg' },
    ] as const;

    return {
      key: cat.key,
      title: isTr ? cat.tr.title : cat.en.title,
      desc: isTr ? cat.tr.desc : cat.en.desc,
      href: `/nature/animals/${cat.key}`,
      tone: cat.note.tone,
      pin: cat.note.pin,
      top: placements[index].top,
      side: placements[index].side,
      rotate: placements[index].rotate,
    };
  });

  const rightPageNotes: NotebookNote[] = categories.slice(3).map((cat, index) => {
    const placements = [
      { top: '10%', side: '-1%', rotate: '4deg' },
      { top: '39%', side: '2%', rotate: '-2deg' },
      { top: '56%', side: '-1%', rotate: '3deg' },
    ] as const;

    return {
      key: cat.key,
      title: isTr ? cat.tr.title : cat.en.title,
      desc: isTr ? cat.tr.desc : cat.en.desc,
      href: `/nature/animals/${cat.key}`,
      tone: cat.note.tone,
      pin: cat.note.pin,
      top: placements[index].top,
      side: placements[index].side,
      rotate: placements[index].rotate,
    };
  });

  return (
    <div className="flex-1 mx-auto w-full max-w-7xl px-4 py-4 sm:py-5">
      <NotebookSpread leftNotes={leftPageNotes} rightNotes={rightPageNotes} size="b6" />
    </div>
  );
}
