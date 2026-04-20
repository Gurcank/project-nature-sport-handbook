'use client';

import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';
import type { CSSProperties } from 'react';

// Grass blades component - curved SVG
function GrassBlades({ x, delay }: { x: number; delay: string }) {
  return (
    <svg
      style={{
        '--grass-delay': delay,
        bottom: '-8px',
        left: x,
        width: '16px',
        height: '32px',
      } as CSSProperties}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="grass-sway pointer-events-none absolute"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M 2 20 Q 0 15 1 10 Q 0 5 2 0" stroke="#5d7a3e" strokeWidth="1.2" />
      <path d="M 7 20 Q 7 10 7 0" stroke="#6f8a57" strokeWidth="1.5" />
      <path d="M 12 20 Q 14 15 13 10 Q 14 5 12 0" stroke="#7a9750" strokeWidth="1.2" />
      <path d="M 1 20 Q -1 12 0 5" stroke="#5d7a3e" strokeWidth="0.8" opacity="0.7" />
      <path d="M 13 20 Q 15 12 14 5" stroke="#7a9750" strokeWidth="0.8" opacity="0.7" />
    </svg>
  );
}

function WildFlower({ x, y }: { x: number; y: number }) {
  return (
    <svg
      style={{ left: x, top: y, width: '12px', height: '12px' } as CSSProperties}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute"
    >
      <circle cx="6" cy="2" r="1.2" fill="#e9c5a8" />
      <circle cx="9" cy="3" r="1.2" fill="#e9c5a8" />
      <circle cx="10" cy="6" r="1.2" fill="#e9c5a8" />
      <circle cx="9" cy="9" r="1.2" fill="#e9c5a8" />
      <circle cx="6" cy="10" r="1.2" fill="#e9c5a8" />
      <circle cx="3" cy="9" r="1.2" fill="#e9c5a8" />
      <circle cx="2" cy="6" r="1.2" fill="#e9c5a8" />
      <circle cx="3" cy="3" r="1.2" fill="#e9c5a8" />
      <circle cx="6" cy="6" r="1.5" fill="#d4a574" />
    </svg>
  );
}

function Clover({ x, y }: { x: number; y: number }) {
  return (
    <svg
      style={{ left: x, top: y, width: '14px', height: '14px' } as CSSProperties}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute"
    >
      <ellipse cx="3" cy="5" rx="2" ry="3" fill="#6f8a57" opacity="0.8" />
      <ellipse cx="7" cy="2" rx="2" ry="3" fill="#7a9750" opacity="0.85" />
      <ellipse cx="11" cy="5" rx="2" ry="3" fill="#6f8a57" opacity="0.8" />
      <ellipse cx="7" cy="10" rx="2" ry="3" fill="#7a9750" opacity="0.85" />
      <circle cx="7" cy="7" r="1.5" fill="#5d7a3e" />
    </svg>
  );
}

function Fern({ x, y }: { x: number; y: number }) {
  return (
    <svg
      style={{ left: x, top: y, width: '10px', height: '16px' } as CSSProperties}
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute"
    >
      <path d="M 5 16 Q 5 8 5 0" stroke="#5d7a3e" strokeWidth="0.6" />
      <path d="M 5 14 L 1 13" stroke="#6f8a57" strokeWidth="0.5" opacity="0.8" />
      <path d="M 5 11 L 0 10" stroke="#6f8a57" strokeWidth="0.5" opacity="0.8" />
      <path d="M 5 8 L 1 7" stroke="#6f8a57" strokeWidth="0.5" opacity="0.8" />
      <path d="M 5 5 L 2 4" stroke="#6f8a57" strokeWidth="0.5" opacity="0.8" />
      <path d="M 5 14 L 9 13" stroke="#7a9750" strokeWidth="0.5" opacity="0.8" />
      <path d="M 5 11 L 10 10" stroke="#7a9750" strokeWidth="0.5" opacity="0.8" />
      <path d="M 5 8 L 9 7" stroke="#7a9750" strokeWidth="0.5" opacity="0.8" />
      <path d="M 5 5 L 8 4" stroke="#7a9750" strokeWidth="0.5" opacity="0.8" />
    </svg>
  );
}

function FallingLeafRealistic({ index }: { index: number }) {
  const variants = [
    (key: string) => <ellipse key={key} cx="5" cy="5" rx="4" ry="6" fill="#6f8a57" opacity="0.85" />,
    (key: string) => <path key={key} d="M 5 10 Q 2 8 1 5 Q 2 2 5 2 Q 8 2 9 5 Q 8 8 5 10" fill="#7f9b61" opacity="0.8" />,
    (key: string) => <path key={key} d="M 5 0 L 9 8 L 5 10 L 1 8 Z" fill="#64824a" opacity="0.82" />,
    (key: string) => <circle key={key} cx="5" cy="5" r="5" fill="#7a9750" opacity="0.78" />,
  ];

  const startDelay = index * 0.8;
  const duration = 5.5 + Math.random() * 2.5;
  const xDrift = -50 + Math.random() * 120;

  return (
    <svg
      style={{
        '--fall-start': '0%',
        '--fall-end': '100%',
        '--fall-x': `${xDrift}px`,
        '--fall-duration': `${duration}s`,
        '--fall-delay': `${startDelay}s`,
        position: 'absolute',
        left: `calc(50% + ${Math.random() * 200 - 100}px)`,
        top: '-10px',
        width: '10px',
        height: '10px',
      } as CSSProperties}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="falling-leaf pointer-events-none"
    >
      {variants[index % variants.length](`leaf-${index}`)}
    </svg>
  );
}

function RealisticVine({ side, index }: { side: 'left' | 'right'; index: number }) {
  const isLeft = side === 'left';
  const randomSeed = index * 7 + (isLeft ? 0 : 100);
  const offsetMultiplier = index * (isLeft ? 18 : -18) + (randomSeed % 30 - 15);
  const verticalOffset = index * 15 + (randomSeed % 35 - 17);

  return (
    <svg
      className="vine-curve-left pointer-events-none absolute"
      style={{
        '--vine-rot': isLeft ? '10deg' : '-12deg',
        '--vine-delay': `${index * 75 + 60}ms`,
        [isLeft ? 'left' : 'right']: `calc(-6rem + ${offsetMultiplier}px)`,
        [isLeft ? 'top' : 'bottom']: `calc(-3rem + ${verticalOffset}px)`,
        width: '400px',
        height: '500px',
        opacity: Math.max(0.75, 0.82 + index * 0.02),
        zIndex: -index,
      } as CSSProperties}
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d={isLeft ? `M 20 220 Q ${15 + (randomSeed % 8)} 180 ${25 + (randomSeed % 10)} 140 Q ${35 + (randomSeed % 8)} 100 ${20 + (randomSeed % 6)} 60 Q ${10 + (randomSeed % 7)} 20 ${30 + (randomSeed % 8)} 0` : `M 160 220 Q ${165 - (randomSeed % 8)} 180 ${155 - (randomSeed % 10)} 140 Q ${145 - (randomSeed % 8)} 100 ${160 - (randomSeed % 6)} 60 Q ${170 - (randomSeed % 7)} 20 ${150 - (randomSeed % 8)} 0`} stroke="#2d4620" strokeWidth="3.2" opacity="0.96" />
      <path d={isLeft ? `M 20 220 Q ${15 + (randomSeed % 8)} 180 ${25 + (randomSeed % 10)} 140 Q ${35 + (randomSeed % 8)} 100 ${20 + (randomSeed % 6)} 60 Q ${10 + (randomSeed % 7)} 20 ${30 + (randomSeed % 8)} 0` : `M 160 220 Q ${165 - (randomSeed % 8)} 180 ${155 - (randomSeed % 10)} 140 Q ${145 - (randomSeed % 8)} 100 ${160 - (randomSeed % 6)} 60 Q ${170 - (randomSeed % 7)} 20 ${150 - (randomSeed % 8)} 0`} stroke="#1a2e1a" strokeWidth="4.5" opacity="0.98" />
      <path d={isLeft ? `M ${30 + (randomSeed % 8)} 200 Q ${35 + (randomSeed % 7)} 160 ${25 + (randomSeed % 6)} 120 Q ${15 + (randomSeed % 8)} 80 ${30 + (randomSeed % 7)} 40 Q ${40 + (randomSeed % 6)} 0 ${25 + (randomSeed % 8)} -20` : `M ${150 - (randomSeed % 8)} 200 Q ${145 - (randomSeed % 7)} 160 ${155 - (randomSeed % 6)} 120 Q ${165 - (randomSeed % 8)} 80 ${150 - (randomSeed % 7)} 40 Q ${140 - (randomSeed % 6)} 0 ${155 - (randomSeed % 8)} -20`} stroke="#2d4620" strokeWidth="3.5" opacity="0.93" />
      <ellipse cx={isLeft ? 25 : 155} cy={20} rx="12" ry="17" fill="#2d4620" opacity="0.88" transform={isLeft ? 'rotate(-25 25 20)' : 'rotate(25 155 20)'} />
      <ellipse cx={isLeft ? 15 : 165} cy={35} rx="11" ry="15" fill="#3d5a2a" opacity="0.85" transform={isLeft ? 'rotate(15 15 35)' : 'rotate(-15 165 35)'} />
      <ellipse cx={isLeft ? 40 : 140} cy={40} rx="12" ry="17" fill="#2d4620" opacity="0.86" transform={isLeft ? 'rotate(-35 40 40)' : 'rotate(35 140 40)'} />
      <ellipse cx={isLeft ? 20 : 160} cy={25} rx="10" ry="14" fill="#476335" opacity="0.83" transform={isLeft ? 'rotate(0 20 25)' : 'rotate(0 160 25)'} />
      <ellipse cx={isLeft ? 30 : 150} cy={55} rx="13" ry="18" fill="#1f3a17" opacity="0.89" transform={isLeft ? 'rotate(-20 30 55)' : 'rotate(20 150 55)'} />
      <ellipse cx={isLeft ? 18 : 162} cy={65} rx="11" ry="15" fill="#2d4620" opacity="0.86" transform={isLeft ? 'rotate(25 18 65)' : 'rotate(-25 162 65)'} />
      <ellipse cx={isLeft ? 20 : 160} cy={80} rx="11" ry="15" fill="#3d5a2a" opacity="0.87" transform={isLeft ? 'rotate(20 20 80)' : 'rotate(-20 160 80)'} />
      <ellipse cx={isLeft ? 35 : 145} cy={100} rx="12" ry="17" fill="#2d4620" opacity="0.86" transform={isLeft ? 'rotate(-30 35 100)' : 'rotate(30 145 100)'} />
      <ellipse cx={isLeft ? 15 : 165} cy={120} rx="11" ry="15" fill="#2d4620" opacity="0.87" transform={isLeft ? 'rotate(25 15 120)' : 'rotate(-25 165 120)'} />
      <ellipse cx={isLeft ? 32 : 148} cy={90} rx="10" ry="14" fill="#1f3a17" opacity="0.84" transform={isLeft ? 'rotate(-15 32 90)' : 'rotate(15 148 90)'} />
      <ellipse cx={isLeft ? 22 : 158} cy={140} rx="12" ry="16" fill="#3d5a2a" opacity="0.87" transform={isLeft ? 'rotate(15 22 140)' : 'rotate(-15 158 140)'} />
      <ellipse cx={isLeft ? 38 : 142} cy={150} rx="11" ry="15" fill="#2d4620" opacity="0.85" transform={isLeft ? 'rotate(-25 38 150)' : 'rotate(25 142 150)'} />
      <ellipse cx={isLeft ? 30 : 150} cy={160} rx="12" ry="16" fill="#3d5a2a" opacity="0.87" transform={isLeft ? 'rotate(-20 30 160)' : 'rotate(20 150 160)'} />
      <ellipse cx={isLeft ? 20 : 160} cy={180} rx="11" ry="15" fill="#2d4620" opacity="0.86" transform={isLeft ? 'rotate(30 20 180)' : 'rotate(-30 160 180)'} />
      <ellipse cx={isLeft ? 40 : 140} cy={200} rx="12" ry="17" fill="#3d5a2a" opacity="0.85" transform={isLeft ? 'rotate(-25 40 200)' : 'rotate(25 140 200)'} />
      <path d={isLeft ? 'M 25 140 Q 40 135 45 150 Q 48 165 40 175' : 'M 155 140 Q 140 135 135 150 Q 132 165 140 175'} stroke="#1f3a17" strokeWidth="1.5" opacity="0.83" />
      <path d={isLeft ? 'M 20 100 Q 5 95 0 110' : 'M 160 100 Q 175 95 180 110'} stroke="#2d4620" strokeWidth="1.2" opacity="0.82" />
    </svg>
  );
}

function MainCategoryLink({
  label,
  href,
  language,
  icon,
}: {
  label: string;
  href: string;
  language: string;
  icon: string;
}) {
  return (
    <Link href={href}>
      <div className="group/link relative cursor-pointer py-1">
        <div className="relative inline-flex items-center gap-2 px-2 py-2">
          <div
            className="pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-full border-2 opacity-0 transition-all duration-300 group-hover/link:opacity-100"
            style={{ borderColor: 'rgba(47, 103, 191, 0.9)', transform: 'rotate(-4deg)' }}
          />
          <div
            className="pointer-events-none absolute -inset-x-1 -inset-y-0.5 rounded-full border opacity-0 transition-all duration-300 group-hover/link:opacity-100"
            style={{ borderColor: 'rgba(40, 88, 168, 0.72)', transform: 'rotate(3deg)' }}
          />
          <span className="relative text-lg" aria-hidden="true">
            {icon}
          </span>
          <h3 className="relative text-left text-lg font-normal" style={{ color: '#2d2318' }}>
            {label}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const { language } = useSettings();

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-6xl flex-col items-center justify-start pt-6">
          <div className="relative z-10 text-center">
            <h1 style={{ color: '#3f2d16' }} className="text-5xl font-serif sm:text-6xl lg:text-7xl">
              Nature Handbook
            </h1>
            <p style={{ color: '#7a5c37' }} className="mt-4 text-sm font-serif sm:text-base">
              Field-ready notes for nature explorers
            </p>
          </div>

          <div className="relative mt-10 w-full max-w-5xl">
            <div className="absolute inset-x-4 top-5 h-full rounded-[2.5rem] bg-[#8b6337]/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#6f542f]/45 bg-[linear-gradient(180deg,#f2e6c0_0%,#ead9ab_100%)] shadow-[0_28px_80px_rgba(67,46,20,0.28)]">
              <div className="absolute inset-y-0 left-1/2 w-px bg-[#7a5c37]/30" />
              <div className="absolute inset-x-0 top-0 h-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.45),transparent)]" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(0deg,rgba(79,57,29,0.08),transparent)]" />
              <div className="absolute left-1/2 top-0 h-full w-10 -translate-x-1/2 bg-[radial-gradient(circle,rgba(90,64,31,0.14)_0%,rgba(90,64,31,0.05)_32%,transparent_72%)]" />

              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative min-h-[28rem] border-b border-[#7a5c37]/20 px-6 py-8 sm:px-10 md:min-h-[34rem] md:border-b-0 md:border-r md:border-[#7a5c37]/20 md:pr-12">
                  <div className="mb-4 inline-flex rounded-full border border-[#7a5c37]/30 bg-[#efe2b6]/70 px-4 py-1 text-xs uppercase tracking-[0.35em] text-[#6a4b25]">
                    {language === 'tr' ? 'Bölüm I' : 'Chapter I'}
                  </div>
                  <h2 style={{ color: '#3f2d16' }} className="text-5xl font-serif sm:text-6xl">
                    {language === 'tr' ? 'Doğa' : 'Nature'}
                  </h2>
                  <p style={{ color: '#6f542f' }} className="mt-3 max-w-md text-sm leading-7 font-serif">
                    {language === 'tr'
                      ? 'Hayvanlar, bitkiler, mantarlar ve taslar hakkinda notlarini bu sayfada topla.'
                      : 'Collect notes about animals, plants, mushrooms, and stones on this page.'}
                  </p>
                  <div className="mt-8 flex flex-col gap-4">
                    <MainCategoryLink label={language === 'tr' ? 'Hayvanlar' : 'Animals'} href="/nature/animals" language={language} icon="🦌" />
                    <MainCategoryLink label={language === 'tr' ? 'Bitkiler' : 'Plants'} href="/nature/plants" language={language} icon="🌿" />
                    <MainCategoryLink label={language === 'tr' ? 'Mantarlar' : 'Mushrooms'} href="/nature/mushrooms" language={language} icon="🍄" />
                    <MainCategoryLink label={language === 'tr' ? 'Taşlar' : 'Stones'} href="/nature/stones" language={language} icon="🪨" />
                  </div>
                </div>

                <div className="relative min-h-[28rem] px-6 py-8 sm:px-10 md:min-h-[34rem] md:pl-12">
                  <div className="mb-4 inline-flex rounded-full border border-[#7a5c37]/30 bg-[#efe2b6]/70 px-4 py-1 text-xs uppercase tracking-[0.35em] text-[#6a4b25]">
                    {language === 'tr' ? 'Bölüm II' : 'Chapter II'}
                  </div>
                  <h2 style={{ color: '#3f2d16' }} className="text-5xl font-serif sm:text-6xl">
                    {language === 'tr' ? 'Spor' : 'Sport'}
                  </h2>
                  <p style={{ color: '#6f542f' }} className="mt-3 max-w-md text-sm leading-7 font-serif">
                    {language === 'tr'
                      ? 'Kara, su ve hava sporlarini bu sayfada takip et.'
                      : 'Track land, water, and air sports on this page.'}
                  </p>
                  <div className="mt-8 flex flex-col gap-4">
                    <MainCategoryLink label={language === 'tr' ? 'Kara Sporları' : 'Land Sports'} href="/sport/hiking" language={language} icon="🥾" />
                    <MainCategoryLink label={language === 'tr' ? 'Su Sporları' : 'Water Sports'} href="/sport/water-sports" language={language} icon="🌊" />
                    <MainCategoryLink label={language === 'tr' ? 'Hava Sporları' : 'Air Sports'} href="/sport/air-sports" language={language} icon="🪂" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


