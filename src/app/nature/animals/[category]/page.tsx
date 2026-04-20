'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useSettings } from '@/context/SettingsContext';

const categoryContent = {
  mammals: {
    tr: {
      title: 'Memeliler',
      intro: 'Sicak kanli, yavrusunu sutle besleyen hayvanlar.',
      items: ['Boz Ayi', 'Kurt', 'Tilki', 'Yarasa'],
    },
    en: {
      title: 'Mammals',
      intro: 'Warm-blooded animals that feed offspring with milk.',
      items: ['Brown Bear', 'Wolf', 'Fox', 'Bat'],
    },
  },
  birds: {
    tr: {
      title: 'Kuslar',
      intro: 'Kanatli ve tuy yapisina sahip hayvan gruplari.',
      items: ['Kartal', 'Sahin', 'Baykus', 'Leylek'],
    },
    en: {
      title: 'Birds',
      intro: 'Winged animals with feather structures.',
      items: ['Eagle', 'Hawk', 'Owl', 'Stork'],
    },
  },
  reptiles: {
    tr: {
      title: 'Surungenler',
      intro: 'Pullu deriye sahip, soguk kanli hayvanlar.',
      items: ['Engerek', 'Kertenkele', 'Kaplumbaga', 'Bukalemun'],
    },
    en: {
      title: 'Reptiles',
      intro: 'Cold-blooded animals with scaled skin.',
      items: ['Viper', 'Lizard', 'Turtle', 'Chameleon'],
    },
  },
  amphibians: {
    tr: {
      title: 'Amfibiler',
      intro: 'Yasam dongusunu su ve kara arasinda geciren turler.',
      items: ['Agac Kurbagasi', 'Semender', 'Kara Kurbagasi', 'Aksolotl'],
    },
    en: {
      title: 'Amphibians',
      intro: 'Species that live between water and land.',
      items: ['Tree Frog', 'Salamander', 'Toad', 'Axolotl'],
    },
  },
  fish: {
    tr: {
      title: 'Baliklar',
      intro: 'Tatli su ve deniz ortamina uyumlu turler.',
      items: ['Alabalik', 'Levrek', 'Sazan', 'Hamsi'],
    },
    en: {
      title: 'Fish',
      intro: 'Species adapted to freshwater and marine habitats.',
      items: ['Trout', 'Sea Bass', 'Carp', 'Anchovy'],
    },
  },
  insects: {
    tr: {
      title: 'Bocekler',
      intro: 'Tozlasma ve ekosistem dengesinde onemli roller ustlenirler.',
      items: ['Ari', 'Kelebek', 'Karinca', 'Yusufcuk'],
    },
    en: {
      title: 'Insects',
      intro: 'Key contributors to pollination and ecosystem balance.',
      items: ['Bee', 'Butterfly', 'Ant', 'Dragonfly'],
    },
  },
} as const;

export default function AnimalSubCategoryPage() {
  const { language } = useSettings();
  const params = useParams<{ category: string }>();
  const key = params.category as keyof typeof categoryContent;
  const content = categoryContent[key];

  if (!content) {
    return (
      <div className="flex-1 mx-auto w-full max-w-5xl px-4 py-12">
        <div className="rounded-2xl border border-red-300/40 bg-black/35 p-6 backdrop-blur-sm">
          <h1 className="mb-3 text-3xl font-bold text-red-200">{language === 'tr' ? 'Kategori bulunamadi' : 'Category not found'}</h1>
          <Link href="/nature/animals" className="text-red-100 underline underline-offset-4">
            {language === 'tr' ? 'Hayvan kategorilerine don' : 'Back to animal categories'}
          </Link>
        </div>
      </div>
    );
  }

  const text = content[language];

  return (
    <div className="flex-1 mx-auto w-full max-w-6xl px-4 py-12">
      <section className="rounded-2xl border border-teal-300/40 bg-black/35 p-6 backdrop-blur-sm">
        <h1 className="mb-2 text-4xl font-bold text-teal-100">🦌 {text.title}</h1>
        <p className="mb-6 text-teal-50/85">{text.intro}</p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {text.items.map((item) => (
            <article key={item} className="rounded-xl border border-teal-200/35 bg-teal-900/30 p-4">
              <h2 className="text-2xl font-semibold text-teal-100">{item}</h2>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/nature/animals" className="rounded-lg border border-teal-200/60 bg-teal-100/15 px-4 py-2 font-medium text-teal-100 transition hover:bg-teal-100/25">
            {language === 'tr' ? 'Hayvan kategorilerine don' : 'Back to animal categories'}
          </Link>
          <Link href="/" className="rounded-lg border border-teal-200/60 bg-teal-100/15 px-4 py-2 font-medium text-teal-100 transition hover:bg-teal-100/25">
            {language === 'tr' ? 'Ana sayfaya don' : 'Back to home'}
          </Link>
        </div>
      </section>
    </div>
  );
}
