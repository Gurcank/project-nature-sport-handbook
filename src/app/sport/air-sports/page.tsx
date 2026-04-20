'use client';

import { useSettings } from '@/context/SettingsContext';
import { translations } from '@/lib/translations';

export default function AirSportsPage() {
  const { language } = useSettings();
  const t = (key: keyof typeof translations.en) =>
    (translations[language] as Record<string, string>)[key] || key;

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
      <h1 className="mb-8 bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-4xl font-bold text-transparent">
        🪂 {t('airSports')}
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-amber-700 bg-gradient-to-br from-amber-900/40 to-amber-900/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-amber-100">
            {language === 'tr' ? 'Yamaç Paraşütü' : 'Paragliding'}
          </h2>
          <ul className="space-y-3 text-amber-200">
            <li>🪂 {language === 'tr' ? 'Rüzgar analizi ve kalkış planı' : 'Wind analysis and launch planning'}</li>
            <li>🧭 {language === 'tr' ? 'Rota ve iniş alanı kontrolü' : 'Route and landing zone checks'}</li>
            <li>🦺 {language === 'tr' ? 'Koruyucu ekipman ve emniyet' : 'Protective gear and safety protocols'}</li>
          </ul>
        </div>

        <div className="rounded-lg border border-amber-700 bg-gradient-to-br from-amber-900/40 to-amber-900/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-amber-100">
            {language === 'tr' ? 'Planör ve Uçuş Eğitimi' : 'Gliding & Flight Training'}
          </h2>
          <ul className="space-y-3 text-amber-200">
            <li>✈️ {language === 'tr' ? 'Temel aerodinamik bilgisi' : 'Fundamentals of aerodynamics'}</li>
            <li>🌤️ {language === 'tr' ? 'Hava koşullarını okuma' : 'Reading weather conditions'}</li>
            <li>📡 {language === 'tr' ? 'Uçuş iletişimi ve takip' : 'Flight communication and tracking'}</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-amber-700 bg-gradient-to-r from-amber-900/20 to-amber-900/10 p-8">
        <h2 className="mb-4 text-2xl font-bold text-amber-100">
          {language === 'tr' ? 'Hava Sporu Rotaları' : 'Air Sport Routes'}
        </h2>
        <p className="text-amber-200">
          {language === 'tr'
            ? 'Kalkış ve iniş noktaları için detaylı bölgesel rehberler yakında eklenecek.'
            : 'Detailed regional guides for launch and landing zones will be added soon.'}
        </p>
      </div>
    </div>
  );
}
