'use client';

import { useSettings } from '@/context/SettingsContext';
import { translations } from '@/lib/translations';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { language, setLanguage } = useSettings();
  const t = (key: keyof typeof translations.en) =>
    (translations[language] as Record<string, string>)[key] || key;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-gradient-to-b from-emerald-50 to-green-50 rounded-t-2xl sm:rounded-2xl shadow-2xl max-w-md w-full sm:w-96 max-h-screen overflow-y-auto border border-green-200">
        <div className="sticky top-0 bg-gradient-to-r from-green-100 to-emerald-100 border-b border-green-200 px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">⚙️</span>
            <h2 className="text-2xl font-bold text-green-900">
              {t('settings')}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-green-200 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-green-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center space-x-2">
              <span className="text-xl">🌐</span>
              <span>{t('language')}</span>
            </h3>

            <div className="space-y-2">
              <button
                onClick={() => setLanguage('en')}
                className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                  language === 'en'
                    ? 'border-green-600 bg-green-100'
                    : 'border-green-200 hover:border-green-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🇬🇧</span>
                    <span className="font-semibold text-green-900">
                      English
                    </span>
                  </div>
                  {language === 'en' && (
                    <span className="text-green-700 font-bold">✓</span>
                  )}
                </div>
              </button>

              <button
                onClick={() => setLanguage('tr')}
                className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                  language === 'tr'
                    ? 'border-green-600 bg-green-100'
                    : 'border-green-200 hover:border-green-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🇹🇷</span>
                    <span className="font-semibold text-green-900">
                      Türkçe
                    </span>
                  </div>
                  {language === 'tr' && (
                    <span className="text-green-700 font-bold">✓</span>
                  )}
                </div>
              </button>
            </div>

            <p className="text-sm text-green-700 mt-3">
              {language === 'en' ? '✓ English is active' : '✓ Türkçe aktif'}
            </p>
          </div>

          <div className="bg-green-100/80 border border-green-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="text-xl">ℹ️</span>
              <div>
                <p className="font-semibold text-green-900">
                  {language === 'en' ? 'Your preferences are saved' : 'Tercihleriniz kaydedildi'}
                </p>
                <p className="text-sm text-green-800 mt-1">
                  {language === 'en'
                    ? 'Your language setting is automatically saved to your browser.'
                    : 'Dil ayarınız otomatik olarak tarayıcınıza kaydedilir.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-200 px-6 py-4 bg-green-100/70">
          <button
            onClick={onClose}
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            {t('closeSettings')}
          </button>
        </div>
      </div>
    </div>
  );
}
