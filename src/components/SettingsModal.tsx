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

      <div className="relative bg-gradient-to-b from-[#1f5a3b]/95 to-[#14452f]/95 rounded-t-2xl sm:rounded-2xl shadow-2xl max-w-md w-full sm:w-96 max-h-screen overflow-y-auto border border-[#4e8f69]/50">
        <div className="sticky top-0 bg-gradient-to-r from-[#2a6b46]/90 to-[#1f5a3b]/90 border-b border-[#4e8f69]/40 px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">⚙️</span>
            <h2 className="text-2xl font-bold text-[#eefcf3]">
              {t('settings')}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#4e8f69]/20 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-[#b9e6c9]"
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
            <h3 className="text-lg font-semibold text-[#eefcf3] mb-4 flex items-center space-x-2">
              <span className="text-xl">🌐</span>
              <span>{t('language')}</span>
            </h3>

            <div className="space-y-2">
              <button
                onClick={() => setLanguage('en')}
                className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                  language === 'en'
                    ? 'border-[#4e8f69] bg-[#4e8f69]/20'
                    : 'border-[#4e8f69]/30 hover:border-[#4e8f69]/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🇬🇧</span>
                    <span className="font-semibold text-[#eefcf3]">
                      English
                    </span>
                  </div>
                  {language === 'en' && (
                    <span className="text-[#b9e6c9] font-bold">✓</span>
                  )}
                </div>
              </button>

              <button
                onClick={() => setLanguage('tr')}
                className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                  language === 'tr'
                    ? 'border-[#4e8f69] bg-[#4e8f69]/20'
                    : 'border-[#4e8f69]/30 hover:border-[#4e8f69]/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🇹🇷</span>
                    <span className="font-semibold text-[#eefcf3]">
                      Türkçe
                    </span>
                  </div>
                  {language === 'tr' && (
                    <span className="text-[#b9e6c9] font-bold">✓</span>
                  )}
                </div>
              </button>
            </div>

          </div>

          <div className="bg-[#4e8f69]/15 border border-[#4e8f69]/40 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="text-xl">ℹ️</span>
              <div>
                <p className="font-semibold text-[#eefcf3]">
                  {language === 'en' ? 'Your preferences are saved' : 'Tercihleriniz kaydedildi'}
                </p>
                <p className="text-sm text-[#b9e6c9] mt-1">
                  {language === 'en'
                    ? 'Your language setting is automatically saved to your browser.'
                    : 'Dil ayarınız otomatik olarak tarayıcınıza kaydedilir.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#4e8f69]/30 px-6 py-4 bg-[#2a6b46]/50">
          <button
            onClick={onClose}
            className="w-full py-2 px-4 bg-[#4e8f69] hover:bg-[#3f7f5d] text-[#0e2419] font-semibold rounded-lg transition-colors"
          >
            {t('closeSettings')}
          </button>
        </div>
      </div>
    </div>
  );
}
