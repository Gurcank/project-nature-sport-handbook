'use client';

import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';

const categories = [
  {
    key: 'igneous',
    tr: { title: 'Magmatik', desc: 'Erimis kayadan olusan tas gruplari.' },
    en: { title: 'Igneous', desc: 'Rock groups formed from magma.' },
  },
  {
    key: 'sedimentary',
    tr: { title: 'Sedimanter', desc: 'Tabakali birikimle olusan taslar.' },
    en: { title: 'Sedimentary', desc: 'Layered rocks formed by deposition.' },
  },
  {
    key: 'metamorphic',
    tr: { title: 'Metamorfik', desc: 'Isi ve basincla donusen kayaçlar.' },
    en: { title: 'Metamorphic', desc: 'Rocks transformed by heat and pressure.' },
  },
  {
    key: 'minerals',
    tr: { title: 'Mineraller', desc: 'Tek kristal ve mineral turleri.' },
    en: { title: 'Minerals', desc: 'Single-crystal and mineral species.' },
  },
] as const;

export default function StonesPage() {
  const { language } = useSettings();
  const isTr = language === 'tr';

  return (
    <div className="flex-1 mx-auto w-full max-w-6xl px-4 py-12">
      <section className="rounded-2xl border border-zinc-300/45 bg-black/35 p-6 backdrop-blur-sm">
        <h1 className="mb-3 text-4xl font-bold text-zinc-100">💎 {isTr ? 'Taslar & Mineraller' : 'Stones & Minerals'}</h1>
        <p className="mb-6 text-zinc-100/80">
          {isTr
            ? 'Bu ana kategoride alt tas ve mineral siniflari bulunur.'
            : 'This main category contains stone and mineral subclasses.'}
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              href={`/nature/stones/${cat.key}`}
              className="rounded-xl border border-zinc-200/35 bg-zinc-900/30 p-4 transition hover:bg-zinc-900/45"
            >
              <h2 className="text-2xl font-semibold text-zinc-100">{isTr ? cat.tr.title : cat.en.title}</h2>
              <p className="mt-1 text-zinc-100/75">{isTr ? cat.tr.desc : cat.en.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
