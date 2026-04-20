'use client';

import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';

const categories = [
  {
    key: 'mammals',
    tr: { title: 'Memeliler', desc: 'Kara ve deniz memelileri.' },
    en: { title: 'Mammals', desc: 'Land and marine mammal groups.' },
  },
  {
    key: 'birds',
    tr: { title: 'Kuslar', desc: 'Yirtici, otcul ve goçmen kus türleri.' },
    en: { title: 'Birds', desc: 'Raptors, herbivores and migratory birds.' },
  },
  {
    key: 'reptiles',
    tr: { title: 'Surungenler', desc: 'Yilan, kertenkele ve benzeri türler.' },
    en: { title: 'Reptiles', desc: 'Snakes, lizards and similar species.' },
  },
  {
    key: 'amphibians',
    tr: { title: 'Amfibiler', desc: 'Hem karada hem suda yasayan türler.' },
    en: { title: 'Amphibians', desc: 'Species living both on land and in water.' },
  },
  {
    key: 'fish',
    tr: { title: 'Baliklar', desc: 'Tatli su ve deniz baliklari.' },
    en: { title: 'Fish', desc: 'Freshwater and marine fish groups.' },
  },
  {
    key: 'insects',
    tr: { title: 'Bocekler', desc: 'Tozlayicilar ve diger omurgasizlar.' },
    en: { title: 'Insects', desc: 'Pollinators and other invertebrates.' },
  },
] as const;

export default function AnimalsPage() {
  const { language } = useSettings();
  const isTr = language === 'tr';

  return (
    <div className="flex-1 mx-auto w-full max-w-6xl px-4 py-12">
      <section className="rounded-2xl border border-teal-300/40 bg-black/35 p-6 backdrop-blur-sm">
        <h1 className="mb-3 text-4xl font-bold text-teal-100">🦌 {isTr ? 'Hayvanlar' : 'Animals'}</h1>
        <p className="mb-6 text-teal-50/85">
          {isTr
            ? 'Hayvanlar ana kategorisindesin. Bir alt kategori secerek devam et.'
            : 'You are in the animals main category. Select a subcategory to continue.'}
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              href={`/nature/animals/${cat.key}`}
              className="rounded-xl border border-teal-200/35 bg-teal-900/30 p-4 transition hover:bg-teal-900/45"
            >
              <h2 className="text-2xl font-semibold text-teal-100">{isTr ? cat.tr.title : cat.en.title}</h2>
              <p className="mt-1 text-teal-50/80">{isTr ? cat.tr.desc : cat.en.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
