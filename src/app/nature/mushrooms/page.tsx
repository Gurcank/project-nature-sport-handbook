'use client';

import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';

const categories = [
  {
    key: 'edible',
    tr: { title: 'Yenilebilir', desc: 'Mutfakta kullanilan yenilebilir turler.' },
    en: { title: 'Edible', desc: 'Edible species used in cuisine.' },
  },
  {
    key: 'toxic',
    tr: { title: 'Zehirli', desc: 'Tuketimi riskli veya zehirli turler.' },
    en: { title: 'Toxic', desc: 'Risky or poisonous mushroom species.' },
  },
  {
    key: 'medicinal',
    tr: { title: 'Tibbi', desc: 'Geleneksel kullanimi olan mantarlar.' },
    en: { title: 'Medicinal', desc: 'Mushrooms with traditional medicinal use.' },
  },
  {
    key: 'forest',
    tr: { title: 'Orman Turleri', desc: 'Orman tabaninda yasayan turler.' },
    en: { title: 'Forest Species', desc: 'Species commonly found on forest floors.' },
  },
] as const;

export default function MushroomsPage() {
  const { language } = useSettings();
  const isTr = language === 'tr';

  return (
    <div className="flex-1 mx-auto w-full max-w-6xl px-4 py-12">
      <section className="rounded-2xl border border-amber-300/40 bg-black/35 p-6 backdrop-blur-sm">
        <h1 className="mb-3 text-4xl font-bold text-amber-100">🍄 {isTr ? 'Mantarlar' : 'Mushrooms'}</h1>
        <p className="mb-6 text-amber-50/85">
          {isTr
            ? 'Mantarlar ana kategorisindesin. Alt kategori secimiyle devam et.'
            : 'You are in mushrooms main category. Continue by selecting a subcategory.'}
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              href={`/nature/mushrooms/${cat.key}`}
              className="rounded-xl border border-amber-200/35 bg-amber-900/30 p-4 transition hover:bg-amber-900/45"
            >
              <h2 className="text-2xl font-semibold text-amber-100">{isTr ? cat.tr.title : cat.en.title}</h2>
              <p className="mt-1 text-amber-50/80">{isTr ? cat.tr.desc : cat.en.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
