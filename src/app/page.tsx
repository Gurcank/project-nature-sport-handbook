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
      <div className="group/link relative inline-flex cursor-pointer items-center gap-2 px-2 py-2">
          <div
            className="pen-ink-ring pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-full border-2 opacity-0 transition-opacity duration-150 group-hover/link:opacity-100"
            style={{
              borderColor: 'rgba(38, 92, 176, 0.86)',
              borderTopWidth: '2.4px',
              borderBottomWidth: '1.8px',
              transform: 'rotate(-4deg)',
            }}
          />
          <div
            className="pen-ink-ring-secondary pointer-events-none absolute -inset-x-1 -inset-y-0.5 rounded-full border opacity-0 transition-opacity duration-150 group-hover/link:opacity-100"
            style={{
              borderColor: 'rgba(33, 80, 157, 0.62)',
              borderLeftWidth: '1.2px',
              borderRightWidth: '0.9px',
              transform: 'rotate(3deg)',
            }}
          />
          <span className="relative text-lg" aria-hidden="true">
            {icon}
          </span>
          <h3 className="relative text-left text-lg font-normal" style={{ color: '#2d2318' }}>
            {label}
          </h3>
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
          <div className="relative z-10 w-full max-w-4xl px-2 text-center">
            <div
              className="relative mx-auto max-w-3xl px-8 py-10 sm:px-12 sm:py-12"
              style={{ transform: 'rotate(-0.6deg)' }}
            >
              <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true" focusable="false">
                <defs>
                  <filter id="bark-distort" x="-15%" y="-15%" width="130%" height="130%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.018 0.11" numOctaves="2" seed="8" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
              </svg>

              <div className="pointer-events-none absolute left-[1%] right-[1%] top-[10%] bottom-[10%] bg-[linear-gradient(180deg,#be8d55_0%,#a3733f_48%,#86582e_100%)] [clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)] shadow-[0_17px_34px_rgba(31,19,10,0.34),inset_0_1px_0_rgba(241,220,186,0.22),inset_0_-10px_18px_rgba(47,29,15,0.42)]" />
              <div className="pointer-events-none absolute left-[1%] right-[1%] top-[10%] bottom-[10%] opacity-70 bg-[repeating-linear-gradient(84deg,rgba(193,145,90,0.22)_0px,rgba(193,145,90,0.22)_12px,rgba(145,98,54,0.34)_12px,rgba(145,98,54,0.34)_24px,rgba(106,69,39,0.26)_24px,rgba(106,69,39,0.26)_36px)] [clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]" />
              <div className="pointer-events-none absolute left-[1%] right-[1%] top-[10%] bottom-[10%] opacity-58 bg-[repeating-linear-gradient(96deg,rgba(63,43,24,0.14)_0px,rgba(63,43,24,0.14)_2px,transparent_2px,transparent_28px),radial-gradient(ellipse_at_18%_25%,rgba(239,215,174,0.2),transparent_36%),radial-gradient(ellipse_at_69%_70%,rgba(88,56,29,0.33),transparent_44%)] [clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]" />
              <div className="pointer-events-none absolute left-[1%] right-[1%] top-[10%] bottom-[10%] opacity-46 bg-[linear-gradient(180deg,rgba(78,102,55,0.14)_0%,transparent_18%,rgba(64,84,45,0.13)_36%,transparent_58%,rgba(39,56,31,0.24)_100%),radial-gradient(circle_at_8%_78%,rgba(84,106,62,0.34),transparent_20%),radial-gradient(circle_at_30%_82%,rgba(72,95,54,0.28),transparent_18%),radial-gradient(circle_at_84%_80%,rgba(70,92,52,0.24),transparent_16%)] [clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]" />
              <div className="pointer-events-none absolute left-[1%] right-[1%] top-[10%] bottom-[10%] opacity-44 bg-[linear-gradient(180deg,rgba(32,23,15,0)_0%,rgba(32,23,15,0.07)_28%,rgba(32,23,15,0.16)_58%,rgba(32,23,15,0.28)_100%),repeating-linear-gradient(96deg,transparent_0px,transparent_32px,rgba(41,28,16,0.16)_32px,rgba(41,28,16,0.16)_34px),repeating-linear-gradient(180deg,transparent_0px,transparent_20px,rgba(61,44,27,0.12)_20px,rgba(61,44,27,0.12)_27px)] [clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]" />
              <div className="pointer-events-none absolute left-[1%] right-[1%] top-[10%] bottom-[10%] opacity-36 bg-[radial-gradient(ellipse_at_26%_16%,rgba(244,224,190,0.22),transparent_32%),radial-gradient(ellipse_at_58%_18%,rgba(236,211,171,0.2),transparent_30%),radial-gradient(ellipse_at_76%_24%,rgba(230,203,162,0.15),transparent_28%),radial-gradient(ellipse_at_86%_62%,rgba(70,46,24,0.28),transparent_24%)] [clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]" />
              <div className="pointer-events-none absolute left-[1%] right-[1%] top-[10%] bottom-[10%] opacity-50 bg-[linear-gradient(90deg,rgba(58,35,17,0.22)_0%,transparent_3%,transparent_97%,rgba(58,35,17,0.26)_100%),linear-gradient(180deg,rgba(248,232,200,0.2)_0%,transparent_4%,transparent_95%,rgba(42,25,12,0.32)_100%)] [clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]" />
              <div className="pointer-events-none absolute left-[1%] top-[10%] h-[2px] opacity-55 bg-[linear-gradient(90deg,rgba(248,230,198,0.3),rgba(248,230,198,0.08),rgba(248,230,198,0.28))]" style={{ width: 'calc(87% - 2px)' }} />
              <div className="pointer-events-none absolute left-[1%] bottom-[10%] h-[2px] opacity-90 bg-[linear-gradient(90deg,rgba(54,33,16,0.44),rgba(54,33,16,0.18),rgba(54,33,16,0.4))]" style={{ width: 'calc(87% - 2px)' }} />
              <div className="pointer-events-none absolute left-[5.8%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#55310f]/78 shadow-[inset_0_1px_0_rgba(197,166,124,0.24),0_1px_1px_rgba(26,15,7,0.52)]" />
              <div className="pointer-events-none absolute left-[5.8%] bottom-[22%] h-2.5 w-2.5 rounded-full bg-[#55310f]/78 shadow-[inset_0_1px_0_rgba(197,166,124,0.24),0_1px_1px_rgba(26,15,7,0.52)]" />
              <div className="pointer-events-none absolute right-[12.8%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#55310f]/78 shadow-[inset_0_1px_0_rgba(197,166,124,0.24),0_1px_1px_rgba(26,15,7,0.52)]" />
              <div className="pointer-events-none absolute right-[12.8%] bottom-[22%] h-2.5 w-2.5 rounded-full bg-[#55310f]/78 shadow-[inset_0_1px_0_rgba(197,166,124,0.24),0_1px_1px_rgba(26,15,7,0.52)]" />

              <h1
                style={{
                  color: '#efe7d8',
                  filter: 'url(#bark-distort)',
                  transform: 'translateZ(8px)',
                  textShadow:
                    '0 1px 0 rgba(255,255,255,0.24), 0 1px 2px rgba(130,101,71,0.24), 0 3px 5px rgba(43,28,14,0.46)',
                  opacity: 0.9,
                }}
                className="relative text-4xl font-serif sm:text-5xl lg:text-6xl"
              >
                {language === 'tr' ? 'Doğa ve Spor El Kitabı' : 'Nature & Sport Handbook'}
              </h1>
              <p
                style={{
                  color: '#ded4c1',
                  filter: 'url(#bark-distort)',
                  transform: 'translateZ(6px)',
                  textShadow: '0 1px 0 rgba(255,255,255,0.18), 0 2px 3px rgba(74,50,25,0.4)',
                  opacity: 0.86,
                }}
                className="relative mt-4 text-sm font-serif sm:text-base"
              >
                {language === 'tr'
                  ? 'Doga ve spor kasifleri icin araziye hazir notlar'
                  : 'Field-ready notes for nature and sport explorers'}
              </p>
            </div>
          </div>

          <div className="relative mt-10 w-full max-w-5xl">
            {/* Back stacked pages */}
            <div className="pointer-events-none absolute -inset-x-3 top-[16px] h-[calc(100%-16px)] rounded-[2.5rem] border border-[#7a5c37]/24 bg-[linear-gradient(180deg,#e8d8aa_0%,#d8bd88_100%)] opacity-90 shadow-[0_12px_30px_rgba(60,38,17,0.2)]">
              <div className="absolute inset-y-0 left-1/2 w-[30px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(155,120,77,0.1)_34%,rgba(102,72,40,0.22)_46%,rgba(66,40,19,0.5)_50%,rgba(102,72,40,0.22)_54%,rgba(155,120,77,0.1)_66%,transparent_100%)]" />
            </div>
            <div className="pointer-events-none absolute -inset-x-2 top-[12px] h-[calc(100%-12px)] rounded-[2.55rem] border border-[#7a5c37]/28 bg-[linear-gradient(180deg,#eadbb0_0%,#dbc190_100%)] opacity-92 shadow-[0_16px_40px_rgba(60,38,17,0.22)]">
              <div className="absolute inset-y-0 left-1/2 w-[34px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(160,124,81,0.12)_30%,rgba(106,76,43,0.28)_45%,rgba(68,42,20,0.58)_50%,rgba(106,76,43,0.28)_55%,rgba(160,124,81,0.12)_70%,transparent_100%)]" />
            </div>
            <div className="pointer-events-none absolute -inset-x-1 top-[8px] h-[calc(100%-8px)] rounded-[2.58rem] border border-[#7a5c37]/32 bg-[linear-gradient(180deg,#ecdeb4_0%,#ddc595_100%)] opacity-94 shadow-[0_22px_48px_rgba(60,38,17,0.24)]">
              <div className="absolute inset-y-0 left-1/2 w-[40px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(168,132,88,0.14)_28%,rgba(112,80,46,0.34)_44%,rgba(71,43,21,0.68)_50%,rgba(112,80,46,0.34)_56%,rgba(168,132,88,0.14)_72%,transparent_100%)]" />
            </div>

            <div className="absolute inset-x-6 top-8 h-full rounded-[2.7rem] bg-[#4e3418]/24 blur-2xl" />

            <div className="relative mx-1 overflow-hidden rounded-[2.6rem] border border-[#6f542f]/60 bg-[linear-gradient(180deg,#ecdcb0_0%,#dcc08d_100%)] shadow-[0_34px_90px_rgba(51,33,14,0.38),inset_0_2px_0_rgba(255,248,229,0.45),inset_0_-12px_24px_rgba(75,52,24,0.14)]">
              <div className="pointer-events-none absolute inset-y-5 left-4 w-3 rounded-full bg-[linear-gradient(90deg,rgba(143,108,63,0.35),rgba(255,255,255,0.0))]" />
              <div className="pointer-events-none absolute inset-y-5 right-4 w-3 rounded-full bg-[linear-gradient(270deg,rgba(143,108,63,0.35),rgba(255,255,255,0.0))]" />

              <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-[46px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(173,136,88,0.14)_24%,rgba(127,92,50,0.4)_40%,rgba(78,48,24,0.82)_48%,rgba(58,33,13,0.98)_50%,rgba(78,48,24,0.82)_52%,rgba(127,92,50,0.4)_60%,rgba(173,136,88,0.14)_76%,transparent_100%)]" />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.05)_70%,transparent)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(0deg,rgba(72,50,23,0.2),transparent)]" />

              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(97,70,35,0.05)_0px,rgba(97,70,35,0.05)_1px,transparent_1px,transparent_32px)]" />

              {/* Layered paper edges */}
              <div className="pointer-events-none absolute bottom-[-7px] left-[3%] h-3 w-[44%] rounded-b-[1rem] bg-[#d7bc86] shadow-[0_2px_0_rgba(109,78,38,0.32)]" />
              <div className="pointer-events-none absolute bottom-[-11px] left-[4%] h-3 w-[42%] rounded-b-[1rem] bg-[#ceb177] shadow-[0_2px_0_rgba(109,78,38,0.28)]" />
              <div className="pointer-events-none absolute bottom-[-15px] left-[5%] h-[2px] w-[40%] rounded-b bg-[#b39157]/70" />
              <div className="pointer-events-none absolute bottom-[-7px] right-[3%] h-3 w-[44%] rounded-b-[1rem] bg-[#d7bc86] shadow-[0_2px_0_rgba(109,78,38,0.32)]" />
              <div className="pointer-events-none absolute bottom-[-11px] right-[4%] h-3 w-[42%] rounded-b-[1rem] bg-[#ceb177] shadow-[0_2px_0_rgba(109,78,38,0.28)]" />
              <div className="pointer-events-none absolute bottom-[-15px] right-[5%] h-[2px] w-[40%] rounded-b bg-[#b39157]/70" />

              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative min-h-[28rem] border-b border-[#7a5c37]/26 bg-[linear-gradient(165deg,#f0dfb1_0%,#e0c590_100%)] px-6 py-8 shadow-[inset_-22px_0_26px_rgba(63,43,19,0.12)] sm:px-10 md:min-h-[34rem] md:border-b-0 md:border-r md:border-[#7a5c37]/24 md:pr-12">
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-[linear-gradient(270deg,rgba(108,79,44,0.18),transparent)]" />
                  <div className="mb-4 inline-flex rounded-full border border-[#7a5c37]/30 bg-[#efe2b6]/70 px-4 py-1 text-xs uppercase tracking-[0.35em] text-[#6a4b25]">
                    {language === 'tr' ? 'Bölüm I' : 'Chapter I'}
                  </div>
                  <h2 style={{ color: '#3f2d16' }} className="text-5xl font-serif sm:text-6xl">
                    {language === 'tr' ? 'Doğa' : 'Nature'}
                  </h2>
                  <p style={{ color: '#6f542f' }} className="mt-3 max-w-md text-sm leading-7 font-serif">
                    {language === 'tr'
                      ? 'Hayvanlar, bitkiler, mantarlar ve taşlar hakkında notlar.'
                      : 'Notes about animals, plants, mushrooms, and stones.'}
                  </p>
                  <div className="mt-8 flex flex-col gap-4">
                    <MainCategoryLink label={language === 'tr' ? 'Hayvanlar' : 'Animals'} href="/nature/animals" language={language} icon="🦌" />
                    <MainCategoryLink label={language === 'tr' ? 'Bitkiler' : 'Plants'} href="/nature/plants" language={language} icon="🌿" />
                    <MainCategoryLink label={language === 'tr' ? 'Mantarlar' : 'Mushrooms'} href="/nature/mushrooms" language={language} icon="🍄" />
                    <MainCategoryLink label={language === 'tr' ? 'Taşlar' : 'Stones'} href="/nature/stones" language={language} icon="🪨" />
                  </div>
                </div>

                <div className="relative min-h-[28rem] bg-[linear-gradient(195deg,#f0dfb1_0%,#e0c590_100%)] px-6 py-8 shadow-[inset_22px_0_26px_rgba(63,43,19,0.12)] sm:px-10 md:min-h-[34rem] md:pl-12">
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-[linear-gradient(90deg,rgba(108,79,44,0.18),transparent)]" />
                  <div className="mb-4 inline-flex rounded-full border border-[#7a5c37]/30 bg-[#efe2b6]/70 px-4 py-1 text-xs uppercase tracking-[0.35em] text-[#6a4b25]">
                    {language === 'tr' ? 'Bölüm II' : 'Chapter II'}
                  </div>
                  <h2 style={{ color: '#3f2d16' }} className="text-5xl font-serif sm:text-6xl">
                    {language === 'tr' ? 'Spor' : 'Sport'}
                  </h2>
                  <p style={{ color: '#6f542f' }} className="mt-3 max-w-md text-sm leading-7 font-serif">
                    {language === 'tr'
                      ? 'Kara, su ve hava sporları hakkında notlar.'
                      : 'Notes about land, water, and air sports.'}
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


