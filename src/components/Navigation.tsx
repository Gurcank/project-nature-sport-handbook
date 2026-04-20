'use client';

import Link from 'next/link';
import { useState, useEffect, FormEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSettings } from '@/context/SettingsContext';
import SettingsModal from './SettingsModal';
import { translations } from '@/lib/translations';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { language } = useSettings();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const t = (key: keyof typeof translations.en) => 
    (translations[language] as Record<string, string>)[key] || key;
  const brandTitle = language === 'tr' ? 'Doğa ve Spor El Kitabı' : 'Nature & Sport Handbook';
  const searchPlaceholder =
    language === 'tr' ? 'Bitki, hayvan, spor ara...' : 'Search plants, animals, sports...';

  const normalizeText = (value: string) =>
    value
      .toLocaleLowerCase(language === 'tr' ? 'tr-TR' : 'en-US')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();

  const searchableRoutes = [
    {
      href: '/',
      keywords: ['home', 'homepage', 'ana sayfa', 'doğa', 'nature', 'sport', 'spor', 'handbook'],
    },
    {
      href: '/nature/plants',
      keywords: ['plants', 'plant', 'bitki', 'bitkiler', 'flora', 'nature plants'],
    },
    {
      href: '/nature/animals',
      keywords: ['animals', 'animal', 'hayvan', 'hayvanlar', 'fauna'],
    },
    {
      href: '/nature/mushrooms',
      keywords: ['mushrooms', 'mushroom', 'mantar', 'mantarlar', 'fungi'],
    },
    {
      href: '/nature/stones',
      keywords: ['stones', 'stone', 'rock', 'rocks', 'taş', 'taşlar', 'minerals', 'mineral'],
    },
    {
      href: '/sport/hiking',
      keywords: ['hiking', 'hike', 'yürüyüş', 'kara sporları', 'land sports', 'trek'],
    },
    {
      href: '/sport/water-sports',
      keywords: ['water sports', 'su sporları', 'canoe', 'kano', 'kayak', 'rafting'],
    },
    {
      href: '/sport/air-sports',
      keywords: ['air sports', 'hava sporları', 'paragliding', 'flight', 'uçuş', 'yamaç paraşütü'],
    },
  ] as const;

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = normalizeText(searchQuery);
    if (!query) return;

    const match = searchableRoutes.find((route) =>
      route.keywords.some((keyword) => {
        const normalizedKeyword = normalizeText(keyword);
        return normalizedKeyword.includes(query) || query.includes(normalizedKeyword);
      })
    );

    if (match) {
      router.push(match.href);
      setSearchQuery('');
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  const openDropdown = (dropdown: 'nature' | 'sport') => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const scheduleDropdownClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      closeTimerRef.current = null;
    }, 180);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full">
        {/* Background with blur - Dark Green */}
        <div className="absolute inset-0 border-b bg-gradient-to-r from-[#14452f]/95 via-[#18392b]/93 to-[#14452f]/95 border-[#366f4f]/50 backdrop-blur-xl" />
        
        {/* Decorative gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#3f7f5d]/8 via-transparent to-[#2f6a49]/7" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-[#4e8f69]/40 to-[#366f4f]/30 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-lg border border-[#3f7f5d]/70 bg-gradient-to-br from-[#4e8f69] to-[#3f7f5d] px-3 py-2 shadow-lg">
                  <span className="text-2xl">🌿</span>
                </div>
              </div>
              <span className="hidden sm:block text-sm font-bold tracking-tight text-[#d7f5e3] group-hover:text-[#eefcf3] transition-colors">
                {brandTitle}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {/* Home Link */}
              <Link
                href="/"
                className="px-4 py-2 text-[#b9e6c9] hover:text-[#eefcf3] font-medium transition-colors duration-300 relative group"
              >
                <span>{t('home')}</span>
                <div className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4e8f69] to-[#366f4f] group-hover:w-full transition-all duration-300" />
              </Link>

              {/* Nature Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => openDropdown('nature')}
                onMouseLeave={scheduleDropdownClose}
              >
                <button className="px-4 py-2 text-[#b9e6c9] hover:text-[#eefcf3] font-medium transition-colors duration-300 flex items-center gap-1.5 relative group/btn">
                  <span className="text-sm transition-transform duration-500 group-hover/btn:-translate-y-0.5 group-hover/btn:rotate-12">🍃</span>
                  <span>{t('nature')}</span>
                  <div className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4e8f69] to-[#366f4f] group-hover/btn:w-full transition-all duration-300" />
                </button>

                {/* Nature Dropdown Menu */}
                <div
                  className={`absolute left-1/2 mt-1 w-[30rem] -translate-x-1/2 pt-2 transition-all duration-300 origin-top ${
                    activeDropdown === 'nature'
                      ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto'
                      : 'opacity-0 invisible -translate-y-1 scale-95 pointer-events-none'
                  }`}
                  onMouseEnter={() => openDropdown('nature')}
                  onMouseLeave={scheduleDropdownClose}
                >
                  <div className="relative rounded-2xl border border-[#4e8f69]/50 bg-gradient-to-b from-[#1f5a3b]/95 to-[#14452f]/95 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden">
                    <div className="pointer-events-none absolute -right-3 -top-3 text-2xl opacity-70 animate-pulse">🍀</div>
                    <div className="p-4 grid grid-cols-4 gap-2">
                      <Link
                        href="/nature/plants"
                        className="h-12 rounded-lg border border-[#4e8f69]/45 bg-gradient-to-b from-[#1b5438]/88 to-[#123e2b]/88 text-[#b9e6c9] hover:text-[#eefcf3] hover:border-[#6aa885]/65 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center px-2 overflow-hidden"
                      >
                        <span className="flex items-center justify-center gap-1 min-w-0 w-full">
                          <span aria-hidden="true">🌿</span>
                          <span className="font-medium text-sm whitespace-nowrap truncate">{language === 'tr' ? 'Bitkiler' : 'Plants'}</span>
                        </span>
                      </Link>
                      <Link
                        href="/nature/animals"
                        className="h-12 rounded-lg border border-[#4e8f69]/45 bg-gradient-to-b from-[#1b5438]/88 to-[#123e2b]/88 text-[#b9e6c9] hover:text-[#eefcf3] hover:border-[#6aa885]/65 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center px-2 overflow-hidden"
                      >
                        <span className="flex items-center justify-center gap-1 min-w-0 w-full">
                          <span aria-hidden="true">🦌</span>
                          <span className="font-medium text-sm whitespace-nowrap truncate">{language === 'tr' ? 'Hayvanlar' : 'Animals'}</span>
                        </span>
                      </Link>
                      <Link
                        href="/nature/mushrooms"
                        className="h-12 rounded-lg border border-[#4e8f69]/45 bg-gradient-to-b from-[#1b5438]/88 to-[#123e2b]/88 text-[#b9e6c9] hover:text-[#eefcf3] hover:border-[#6aa885]/65 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center px-2 overflow-hidden"
                      >
                        <span className="flex items-center justify-center gap-1 min-w-0 w-full">
                          <span aria-hidden="true">🍄</span>
                          <span className="font-medium text-sm whitespace-nowrap truncate">{language === 'tr' ? 'Mantarlar' : 'Mushrooms'}</span>
                        </span>
                      </Link>
                      <Link
                        href="/nature/stones"
                        className="h-12 rounded-lg border border-[#4e8f69]/45 bg-gradient-to-b from-[#1b5438]/88 to-[#123e2b]/88 text-[#b9e6c9] hover:text-[#eefcf3] hover:border-[#6aa885]/65 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center px-2 overflow-hidden"
                      >
                        <span className="flex items-center justify-center gap-1 min-w-0 w-full">
                          <span aria-hidden="true">🪨</span>
                          <span className="font-medium text-sm whitespace-nowrap truncate">{language === 'tr' ? 'Taşlar' : 'Stones'}</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sport Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => openDropdown('sport')}
                onMouseLeave={scheduleDropdownClose}
              >
                <button className="px-4 py-2 text-[#b9e6c9] hover:text-[#eefcf3] font-medium transition-colors duration-300 flex items-center gap-1.5 relative group/btn">
                  <span className="text-sm transition-transform duration-500 group-hover/btn:rotate-90">🧍</span>
                  <span>{t('sport')}</span>
                  <div className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4e8f69] to-[#366f4f] group-hover/btn:w-full transition-all duration-300" />
                </button>

                {/* Sport Dropdown Menu */}
                <div
                  className={`absolute left-1/2 mt-1 w-[24rem] -translate-x-1/2 pt-2 transition-all duration-300 origin-top ${
                    activeDropdown === 'sport'
                      ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto'
                      : 'opacity-0 invisible -translate-y-1 scale-95 pointer-events-none'
                  }`}
                  onMouseEnter={() => openDropdown('sport')}
                  onMouseLeave={scheduleDropdownClose}
                >
                  <div className="relative rounded-2xl border border-[#4e8f69]/50 bg-gradient-to-b from-[#1f5a3b]/95 to-[#14452f]/95 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden">
                    <div className="p-4 grid grid-cols-3 gap-2">
                      <Link
                        href="/sport/hiking"
                        className="h-12 rounded-lg border border-[#4e8f69]/45 bg-gradient-to-b from-[#1b5438]/88 to-[#123e2b]/88 text-[#b9e6c9] hover:text-[#eefcf3] hover:border-[#6aa885]/65 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center px-2 overflow-hidden"
                      >
                        <span className="flex items-center justify-center gap-1 min-w-0 w-full">
                          <span aria-hidden="true">🥾</span>
                          <span className="font-medium text-sm whitespace-nowrap">{language === 'tr' ? 'Kara Sporları' : 'Land Sports'}</span>
                        </span>
                      </Link>
                      <Link
                        href="/sport/water-sports"
                        className="h-12 rounded-lg border border-[#4e8f69]/45 bg-gradient-to-b from-[#1b5438]/88 to-[#123e2b]/88 text-[#b9e6c9] hover:text-[#eefcf3] hover:border-[#6aa885]/65 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center px-2 overflow-hidden"
                      >
                        <span className="flex items-center justify-center gap-1 min-w-0 w-full">
                          <span aria-hidden="true">🌊</span>
                          <span className="font-medium text-sm whitespace-nowrap">{t('waterSports')}</span>
                        </span>
                      </Link>
                      <Link
                        href="/sport/air-sports"
                        className="h-12 rounded-lg border border-[#4e8f69]/45 bg-gradient-to-b from-[#1b5438]/88 to-[#123e2b]/88 text-[#b9e6c9] hover:text-[#eefcf3] hover:border-[#6aa885]/65 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center px-2 overflow-hidden"
                      >
                        <span className="flex items-center justify-center gap-1 min-w-0 w-full">
                          <span aria-hidden="true">🪂</span>
                          <span className="font-medium text-sm whitespace-nowrap">{language === 'tr' ? 'Hava Sporları' : 'Air Sports'}</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <form
                onSubmit={handleSearchSubmit}
                className="hidden md:flex items-center gap-2 rounded-xl border border-[#4e8f69]/45 bg-[#18392b]/60 px-2 py-1.5 backdrop-blur-sm"
              >
                <svg
                  className="w-4 h-4 text-[#8fd6ad]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.5 5.5a7.5 7.5 0 0011.15 11.15z"
                  />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-36 lg:w-48 bg-transparent text-sm text-[#d7f5e3] placeholder:text-[#8fd6ad]/75 focus:outline-none"
                />
              </form>

              {/* Settings Button */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 rounded-lg text-[#b9e6c9] hover:text-[#eefcf3] border border-[#4e8f69]/40 hover:border-[#4e8f69]/80 hover:bg-[#4e8f69]/10 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5"
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
                className="md:hidden p-2 rounded-lg text-[#b9e6c9] hover:text-[#eefcf3] border border-[#4e8f69]/40 hover:border-[#4e8f69]/80 hover:bg-[#4e8f69]/10 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
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
            <div className="md:hidden pb-4 border-t border-[#4e8f69]/30 mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <form onSubmit={handleSearchSubmit} className="px-4 pt-3 pb-1">
                <div className="flex items-center gap-2 rounded-xl border border-[#4e8f69]/45 bg-[#18392b]/55 px-3 py-2">
                  <svg
                    className="w-4 h-4 text-[#8fd6ad]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.5 5.5a7.5 7.5 0 0011.15 11.15z"
                    />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder={searchPlaceholder}
                    className="min-w-0 flex-1 bg-transparent text-sm text-[#d7f5e3] placeholder:text-[#8fd6ad]/75 focus:outline-none"
                  />
                </div>
              </form>

              <Link
                href="/"
                className="block px-4 py-3 text-[#b9e6c9] hover:text-[#eefcf3] hover:bg-[#4e8f69]/10 rounded-lg transition-all"
              >
                {t('home')}
              </Link>

              {/* Mobile Nature Menu */}
              <div className="px-4 py-2 mt-2">
                <p className="text-[#4e8f69] font-semibold mb-3 text-xs uppercase tracking-widest">
                  {t('nature')}
                </p>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/nature/plants"
                    className="flex items-center gap-2 text-[#b9e6c9] hover:text-[#eefcf3] text-sm transition-colors"
                  >
                    🌿 {language === 'tr' ? 'Bitkiler' : 'Plants'}
                  </Link>
                  <Link
                    href="/nature/animals"
                    className="flex items-center gap-2 text-[#b9e6c9] hover:text-[#eefcf3] text-sm transition-colors"
                  >
                    🦌 {language === 'tr' ? 'Hayvanlar' : 'Animals'}
                  </Link>
                  <Link
                    href="/nature/mushrooms"
                    className="flex items-center gap-2 text-[#b9e6c9] hover:text-[#eefcf3] text-sm transition-colors"
                  >
                    🍄 {language === 'tr' ? 'Mantarlar' : 'Mushrooms'}
                  </Link>
                  <Link
                    href="/nature/stones"
                    className="flex items-center gap-2 text-[#b9e6c9] hover:text-[#eefcf3] text-sm transition-colors"
                  >
                    🪨 {language === 'tr' ? 'Taşlar' : 'Stones'}
                  </Link>
                </div>
              </div>

              {/* Mobile Sport Menu */}
              <div className="px-4 py-2">
                <p className="text-[#4e8f69] font-semibold mb-3 text-xs uppercase tracking-widest">
                  {t('sport')}
                </p>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/sport/hiking"
                    className="flex items-center gap-2 text-[#b9e6c9] hover:text-[#eefcf3] text-sm transition-colors"
                  >
                    🥾 {language === 'tr' ? 'Kara Sporları' : 'Land Sports'}
                  </Link>
                  <Link
                    href="/sport/water-sports"
                    className="flex items-center gap-2 text-[#b9e6c9] hover:text-[#eefcf3] text-sm transition-colors"
                  >
                    🌊 {t('waterSports')}
                  </Link>
                  <Link
                    href="/sport/air-sports"
                    className="flex items-center gap-2 text-[#b9e6c9] hover:text-[#eefcf3] text-sm transition-colors"
                  >
                    🪂 {language === 'tr' ? 'Hava Sporları' : 'Air Sports'}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div aria-hidden="true" className="h-16" />

      {/* Settings Modal */}
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
}
