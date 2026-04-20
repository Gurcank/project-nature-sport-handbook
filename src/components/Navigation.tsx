'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSettings } from '@/context/SettingsContext';
import SettingsModal from './SettingsModal';
import { translations } from '@/lib/translations';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language } = useSettings();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const t = (key: keyof typeof translations.en) => 
    (translations[language] as Record<string, string>)[key] || key;
  const brandTitle = language === 'tr' ? 'Doga El Kitabi' : 'Nature Handbook';

  const navSurfaceClasses =
    isScrolled
      ? 'bg-[#2d2318]/82 border-[#7a5c37]/65 backdrop-blur-md'
      : 'bg-[linear-gradient(90deg,rgba(58,44,29,0.92),rgba(41,31,21,0.9),rgba(52,40,27,0.92))] border-[#7a5c37]/70 backdrop-blur-xl';

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="sticky top-0 z-40">
        <div className={`absolute inset-0 border-b transition-all duration-300 ${navSurfaceClasses}`} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(150,170,120,0.12),transparent_30%),radial-gradient(circle_at_82%_80%,rgba(210,170,110,0.1),transparent_36%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-[#8baa6b]/35 blur-sm opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative rounded-lg border border-[#7a6a44]/70 bg-[linear-gradient(175deg,#efe4bf_0%,#dbc996_100%)] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition-all group-hover:border-[#6f8a57]">
                  <span className="text-xl font-black text-[#4f3a1f]">
                    🌿
                  </span>
                </div>
              </div>
              <span className="hidden rounded-md border border-[#7a6a44]/70 bg-[linear-gradient(175deg,#efe5c4_0%,#ddcd9d_100%)] px-2.5 py-1 text-sm font-semibold tracking-wide text-[#4b361b] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] sm:inline">
                {brandTitle}
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="px-4 py-2 text-[#e7d9b9] hover:text-[#f4ebd5] font-medium transition-all duration-300 relative group"
              >
                <span className="relative z-10">{t('home')}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9bbb74] to-[#d0b070] group-hover:w-full transition-all duration-300" />
              </Link>

              {/* Nature Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('nature')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-[#e7d9b9] hover:text-[#f4ebd5] font-medium transition-all duration-300 flex items-center relative group/btn">
                  <span className="relative z-10">{t('nature')}</span>
                  <span className="ml-1.5 transform group-hover/btn:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9bbb74] to-[#7ea15f] group-hover/btn:w-full transition-all duration-300" />
                </button>

                {/* Dropdown Menu with Animation */}
                <div className="absolute left-0 mt-0 w-52 rounded-lg shadow-2xl shadow-black/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:scale-y-100 scale-y-95">
                  <div className="absolute inset-0 rounded-lg border border-[#8ba874]/45 bg-[linear-gradient(180deg,#e9dfbe_0%,#ddd4af_100%)]" />
                  <div className="relative space-y-1 p-3">
                    <Link
                      href="/nature/plants"
                      className="block px-4 py-3 text-[#4a612f] hover:text-[#3f5428] rounded-lg hover:bg-[#cddaad]/60 transition-all duration-200 font-medium group/item"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-xl transform group-hover/item:scale-125 transition-transform">🌱</span>
                        <span>{language === 'tr' ? 'Bitkiler' : 'Plants'}</span>
                      </span>
                    </Link>
                    <Link
                      href="/nature/animals"
                      className="block px-4 py-3 text-[#4a612f] hover:text-[#3f5428] rounded-lg hover:bg-[#cddaad]/60 transition-all duration-200 font-medium group/item"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-xl transform group-hover/item:scale-125 transition-transform">🦌</span>
                        <span>{language === 'tr' ? 'Hayvanlar' : 'Animals'}</span>
                      </span>
                    </Link>
                    <Link
                      href="/nature/stones"
                      className="block px-4 py-3 text-[#4a612f] hover:text-[#3f5428] rounded-lg hover:bg-[#cddaad]/60 transition-all duration-200 font-medium group/item"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-xl transform group-hover/item:scale-125 transition-transform">💎</span>
                        <span>{language === 'tr' ? 'Taşlar' : 'Stones'}</span>
                      </span>
                    </Link>
                    <Link
                      href="/nature/mushrooms"
                      className="block px-4 py-3 text-[#4a612f] hover:text-[#3f5428] rounded-lg hover:bg-[#cddaad]/60 transition-all duration-200 font-medium group/item"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-xl transform group-hover/item:scale-125 transition-transform">🍄</span>
                        <span>{language === 'tr' ? 'Mantarlar' : 'Mushrooms'}</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sport Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('sport')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-[#e7d9b9] hover:text-[#f4ebd5] font-medium transition-all duration-300 flex items-center relative group/btn">
                  <span className="relative z-10">{t('sport')}</span>
                  <span className="ml-1.5 transform group-hover/btn:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d2a15f] to-[#9bbb74] group-hover/btn:w-full transition-all duration-300" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-0 w-52 rounded-lg shadow-2xl shadow-black/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:scale-y-100 scale-y-95">
                  <div className="absolute inset-0 rounded-lg border border-[#b28a52]/45 bg-[linear-gradient(180deg,#ead8b0_0%,#dfc597_100%)]" />
                  <div className="relative space-y-1 p-3">
                    <Link
                      href="/sport/hiking"
                      className="block px-4 py-3 text-[#6e5229] hover:text-[#5f4520] rounded-lg hover:bg-[#e4c98d]/55 transition-all duration-200 font-medium group/item"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-xl transform group-hover/item:scale-125 transition-transform">🥾</span>
                        <span>{language === 'tr' ? 'Kara Sporları' : 'Land Sports'}</span>
                      </span>
                    </Link>
                    <Link
                      href="/sport/water-sports"
                      className="block px-4 py-3 text-[#6e5229] hover:text-[#5f4520] rounded-lg hover:bg-[#e4c98d]/55 transition-all duration-200 font-medium group/item"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-xl transform group-hover/item:scale-125 transition-transform">🌊</span>
                        <span>{t('waterSports')}</span>
                      </span>
                    </Link>
                    <Link
                      href="/sport/air-sports"
                      className="block px-4 py-3 text-[#6e5229] hover:text-[#5f4520] rounded-lg hover:bg-[#e4c98d]/55 transition-all duration-200 font-medium group/item"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-xl transform group-hover/item:scale-125 transition-transform">🪂</span>
                        <span>{language === 'tr' ? 'Hava Sporları' : 'Air Sports'}</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Settings Button */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 ml-4 rounded-lg border border-[#7a6a44]/70 bg-[#f0e3c0]/10 hover:border-[#9bbb74] transition-all group"
              >
                <svg
                  className="w-5 h-5 text-[#e7d9b9] group-hover:text-[#f4ebd5] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Right Section */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Settings Button Mobile */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 rounded-lg border border-[#7a6a44]/70 bg-[#f0e3c0]/10 hover:border-[#9bbb74] transition-all group"
              >
                <svg
                  className="w-5 h-5 text-[#e7d9b9] group-hover:text-[#f4ebd5] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg border border-[#7a6a44]/70 bg-[#f0e3c0]/10 hover:border-[#9bbb74] transition-all group"
              >
                <svg
                  className="w-6 h-6 text-[#e7d9b9] group-hover:text-[#f4ebd5] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-[#8ba874]/40 mt-2">
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <Link
                  href="/"
                  className="block px-4 py-3 text-[#4a612f] hover:bg-[#cfddb3]/60 rounded-lg transition-all"
                >
                  {t('home')}
                </Link>
                <div className="px-4 py-2">
                  <p className="text-[#4a612f] font-semibold mb-3 text-sm uppercase tracking-wider">
                    {t('nature')}
                  </p>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/nature/plants"
                      className="block text-[#4a612f] hover:text-[#3f5428] text-sm transition-colors"
                    >
                      🌱 {language === 'tr' ? 'Bitkiler' : 'Plants'}
                    </Link>
                    <Link
                      href="/nature/animals"
                      className="block text-[#4a612f] hover:text-[#3f5428] text-sm transition-colors"
                    >
                      🦌 {language === 'tr' ? 'Hayvanlar' : 'Animals'}
                    </Link>
                    <Link
                      href="/nature/stones"
                      className="block text-[#4a612f] hover:text-[#3f5428] text-sm transition-colors"
                    >
                      💎 {language === 'tr' ? 'Taşlar' : 'Stones'}
                    </Link>
                    <Link
                      href="/nature/mushrooms"
                      className="block text-[#4a612f] hover:text-[#3f5428] text-sm transition-colors"
                    >
                      🍄 {language === 'tr' ? 'Mantarlar' : 'Mushrooms'}
                    </Link>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <p className="text-[#6e5229] font-semibold mb-3 text-sm uppercase tracking-wider">
                    {t('sport')}
                  </p>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/sport/hiking"
                      className="block text-amber-800 hover:text-amber-700 text-sm transition-colors"
                    >
                      🥾 {language === 'tr' ? 'Kara Sporları' : 'Land Sports'}
                    </Link>
                    <Link
                      href="/sport/water-sports"
                      className="block text-amber-800 hover:text-amber-700 text-sm transition-colors"
                    >
                      🌊 {t('waterSports')}
                    </Link>
                    <Link
                      href="/sport/air-sports"
                      className="block text-amber-800 hover:text-amber-700 text-sm transition-colors"
                    >
                      🪂 {language === 'tr' ? 'Hava Sporları' : 'Air Sports'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Settings Modal */}
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
}
