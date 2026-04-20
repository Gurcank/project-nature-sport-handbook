'use client';

import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';

type PlantCategory = {
  key: string;
  titleTr: string;
  titleEn: string;
  descTr: string;
  descEn: string;
};

const plantCategories: PlantCategory[] = [
  {
    key: 'trees',
    titleTr: 'Ağaçlar',
    titleEn: 'Trees',
    descTr: 'Orman ve park ekosistemlerinde yaygın ağaç türleri.',
    descEn: 'Tree species common in forests and park ecosystems.',
  },
  {
    key: 'flowers',
    titleTr: 'Çiçekli Bitkiler',
    titleEn: 'Flowering Plants',
    descTr: 'Çiçek ve tohum oluşturan bitki grupları.',
    descEn: 'Plant groups that produce flowers and seeds.',
  },
  {
    key: 'shrubs',
    titleTr: 'Çalılar & Fundalar',
    titleEn: 'Shrubs & Heath',
    descTr: 'Kısa boylu odunsu bitki türleri.',
    descEn: 'Low-height woody plant species.',
  },
  {
    key: 'herbs',
    titleTr: 'Otlar & Bitkiler',
    titleEn: 'Herbs',
    descTr: 'Yumuşak gövdeli otsu türler.',
    descEn: 'Herbaceous plants with soft stems.',
  },
  {
    key: 'aquatic',
    titleTr: 'Su Bitkileri',
    titleEn: 'Aquatic Plants',
    descTr: 'Tatlı su ve kıyı bölgelerinde yaşayan türler.',
    descEn: 'Species living in freshwater and coastal zones.',
  },
  {
    key: 'mosses',
    titleTr: 'Eğreltiler & Yosunlar',
    titleEn: 'Ferns & Mosses',
    descTr: 'Nemli habitatlarda bulunan sporlu bitki toplulukları.',
    descEn: 'Spore-based plant groups in humid habitats.',
  },
];

export default function PlantsPage() {
  const { language } = useSettings();
  const isTr = language === 'tr';

  return (
    <div className="flex-1 mx-auto w-full max-w-6xl px-4 py-12">
      <div className="rounded-2xl border border-green-300/40 bg-black/35 p-6 backdrop-blur-sm">
        <h1 className="mb-3 text-4xl font-bold text-green-100">🌱 {isTr ? 'Bitkiler' : 'Plants'}</h1>
        <p className="mb-6 text-green-50/85">
          {isTr
            ? 'Bitkiler ana kategorisine hoş geldin. Aşağıdan alt kategorileri seçebilirsin.'
            : 'Welcome to the plants main category. Choose a subcategory below.'}
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {plantCategories.map((category) => (
            <Link
              key={category.key}
              href={`/nature/plants/${category.key}`}
              className="rounded-xl border border-green-200/35 bg-green-900/30 p-4 transition hover:bg-green-900/45"
            >
              <h2 className="text-2xl font-semibold text-green-100">
                {isTr ? category.titleTr : category.titleEn}
              </h2>
              <p className="mt-1 text-green-50/80">{isTr ? category.descTr : category.descEn}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
