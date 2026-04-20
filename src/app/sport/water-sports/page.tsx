'use client';

import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';
import { translations } from '@/lib/translations';

export default function WaterSportsPage() {
  const { language } = useSettings();
  const t = (key: keyof typeof translations.en) =>
    (translations[language] as Record<string, string>)[key] || key;

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
      <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text mb-8">
        🌊 {t('waterSports')}
      </h1>

      <p className="text-amber-100/90 mb-8 max-w-3xl">
        {language === 'en'
          ? 'Explore water-based nature sports and open each discipline for practical guides.'
          : 'Su bazli doga sporlarini kesfedin ve pratik rehberler icin her disiplini acin.'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/sport/water-sports/canoe"
          className="block bg-gradient-to-br from-amber-900/40 to-amber-900/20 border border-amber-700 rounded-lg p-6 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-900/40 transition-all"
        >
          <h2 className="text-2xl font-bold text-amber-100 mb-2">🛶 {t('canoe')}</h2>
          <p className="text-amber-200">
            {language === 'en'
              ? 'Paddling basics, balance, safety and route planning.'
              : 'Kurek temelleri, denge, guvenlik ve rota planlamasi.'}
          </p>
        </Link>

        <div className="bg-gradient-to-br from-amber-900/30 to-amber-900/10 border border-amber-800/70 rounded-lg p-6 opacity-90">
          <h2 className="text-2xl font-bold text-amber-100 mb-2">🚣 Rafting</h2>
          <p className="text-amber-200">
            {language === 'en' ? 'Coming soon.' : 'Yakinda.'}
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-900/30 to-amber-900/10 border border-amber-800/70 rounded-lg p-6 opacity-90">
          <h2 className="text-2xl font-bold text-amber-100 mb-2">🏊 Open Water Swim</h2>
          <p className="text-amber-200">
            {language === 'en' ? 'Coming soon.' : 'Yakinda.'}
          </p>
        </div>
      </div>
    </div>
  );
}
