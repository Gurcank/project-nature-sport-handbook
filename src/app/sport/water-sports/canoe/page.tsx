'use client';

import { useSettings } from '@/context/SettingsContext';
import { translations } from '@/lib/translations';

export default function CanoePage() {
  const { language } = useSettings();
  const t = (key: keyof typeof translations.en) =>
    (translations[language] as Record<string, string>)[key] || key;

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
      <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text mb-8">
        🛶 {t('canoe')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-amber-900/40 to-amber-900/20 border border-amber-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-amber-100 mb-4">
            {language === 'en' ? 'Beginner Skills' : 'Baslangic Becerileri'}
          </h2>
          <ul className="space-y-3 text-amber-200">
            <li>✓ {language === 'en' ? 'Paddle stroke basics' : 'Temel kurek vuruslari'}</li>
            <li>✓ {language === 'en' ? 'Entry and exit balance' : 'Giris ve cikis dengesi'}</li>
            <li>✓ {language === 'en' ? 'Turn and stop control' : 'Donus ve durus kontrolu'}</li>
            <li>✓ {language === 'en' ? 'Safe posture and breathing' : 'Guvenli durus ve nefes'}</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-amber-900/40 to-amber-900/20 border border-amber-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-amber-100 mb-4">
            {language === 'en' ? 'Safety Checklist' : 'Guvenlik Kontrol Listesi'}
          </h2>
          <ul className="space-y-3 text-amber-200">
            <li>🦺 {language === 'en' ? 'Life jacket (PFD)' : 'Can yelegi (PFD)'}</li>
            <li>🪖 {language === 'en' ? 'Helmet for moving water' : 'Akan suda kask'}</li>
            <li>🌦️ {language === 'en' ? 'Check weather and water flow' : 'Hava ve akis kontrolu'}</li>
            <li>📍 {language === 'en' ? 'Share route with a friend' : 'Rotayi biriyle paylas'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
