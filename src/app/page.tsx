
'use client';

import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';
import { Icons, IconWrapper } from '@/lib/icons';

// Grass blades component - curved SVG


function MainCategoryLink({ label, href, icon }: { label: string; href: string; icon: React.ReactNode }) {
  return (
    <Link href={href}>
      <div className="group/link relative inline-flex cursor-pointer items-center gap-2 px-2 py-2">
          <div
            className="pen-ink-ring pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-full border-2 opacity-0 transition-opacity duration-150 group-hover/link:opacity-100"
            style={{
              borderColor: 'rgba(95, 119, 80, 0.84)',
              borderTopWidth: '2.4px',
              borderBottomWidth: '1.8px',
              transform: 'rotate(-4deg)',
            }}
          />
          <div
            className="pen-ink-ring-secondary pointer-events-none absolute -inset-x-1 -inset-y-0.5 rounded-full border opacity-0 transition-opacity duration-150 group-hover/link:opacity-100"
            style={{
              borderColor: 'rgba(143, 106, 69, 0.58)',
              borderLeftWidth: '1.2px',
              borderRightWidth: '0.9px',
              transform: 'rotate(3deg)',
            }}
          />
          <IconWrapper icon={icon} size={20} color="#5a5a5a" />
          <h3 className="relative text-left text-lg font-normal" style={{ color: '#5a5a5a', fontFamily: 'var(--font-kalam), "Segoe Print", "Bradley Hand", cursive' }}>
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

              <div className="pointer-events-none absolute left-[1%] right-[1%] top-[10%] bottom-[10%] bg-[linear-gradient(180deg,#b88d5a_0%,#96683f_48%,#7a5131_100%)] [clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)] shadow-[0_17px_34px_rgba(31,19,10,0.34),inset_0_1px_0_rgba(241,220,186,0.22),inset_0_-10px_18px_rgba(47,29,15,0.42)]" />
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
                  color: '#ffffff',
                  filter: 'url(#bark-distort)',
                  transform: 'translateZ(8px)',
                  textShadow:
                    '0 1px 0 rgba(255,255,255,0.2), 0 2px 5px rgba(55,37,19,0.55), 0 0 18px rgba(255,255,255,0.08)',
                  opacity: 0.98,
                }}
                className="relative text-4xl font-serif sm:text-5xl lg:text-6xl"
              >
                {language === 'tr' ? 'Doğa ve Spor El Kitabı' : 'Nature & Sport Handbook'}
              </h1>
              <p
                style={{
                  color: '#ffffff',
                  filter: 'url(#bark-distort)',
                  transform: 'translateZ(6px)',
                  textShadow: '0 1px 0 rgba(255,255,255,0.16), 0 2px 4px rgba(55,37,19,0.42)',
                  opacity: 0.96,
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
                  <div className="relative mb-5 inline-flex items-baseline gap-3">
                    <span
                      className="text-[0.78rem] uppercase tracking-[0.18em] text-[var(--pencil)]/85"
                      style={{
                        fontFamily: 'var(--font-kalam), "Segoe Print", "Bradley Hand", cursive',
                        transform: 'translateY(-0.06em)'
                      }}
                    >
                      Chapter
                    </span>
                    <span
                      className="inline-block text-[1.1rem] leading-none"
                      style={{
                        fontFamily: 'var(--font-kalam), "Segoe Print", "Bradley Hand", cursive',
                        letterSpacing: '0.08em',
                        transform: 'translateX(0.02em) translateY(-0.04em)',
                        textShadow: '0 1px 0 rgba(255,255,255,0.14)',
                        color: '#5a5a5a',
                        fontWeight: 'bold',
                      }}
                      aria-hidden="true"
                    >
                      Ⅰ
                    </span>
                  </div>
                  <h2
                    style={{ color: '#5a5a5a', fontFamily: 'var(--font-kalam), "Segoe Print", "Bradley Hand", cursive' }}
                    className="text-5xl font-serif sm:text-6xl"
                  >
                    {language === 'tr' ? 'Doğa' : 'Nature'}
                  </h2>
                  <p style={{ color: '#5a5a5a', fontFamily: 'var(--font-kalam), "Segoe Print", "Bradley Hand", cursive' }} className="mt-3 max-w-md text-sm leading-7 font-serif">
                    {language === 'tr'
                      ? 'Hayvanlar, bitkiler, mantarlar ve taşlar hakkında notlar.'
                      : 'Notes about animals, plants, mushrooms, and stones.'}
                  </p>
                  <div className="mt-8 flex flex-col gap-4">
                    <MainCategoryLink label={language === 'tr' ? 'Hayvanlar' : 'Animals'} href="/nature/animals" icon={Icons.deer} />
                    <MainCategoryLink label={language === 'tr' ? 'Bitkiler' : 'Plants'} href="/nature/plants" icon={Icons.leaf} />
                    <MainCategoryLink label={language === 'tr' ? 'Mantarlar' : 'Mushrooms'} href="/nature/mushrooms" icon={Icons.mushroom} />
                    <MainCategoryLink label={language === 'tr' ? 'Taşlar ve Mineraller' : 'Stones & Minerals'} href="/nature/stones" icon={Icons.rock} />
                  </div>
                </div>

                <div className="relative min-h-[28rem] bg-[linear-gradient(195deg,#f0dfb1_0%,#e0c590_100%)] px-6 py-8 shadow-[inset_22px_0_26px_rgba(63,43,19,0.12)] sm:px-10 md:min-h-[34rem] md:pl-12">
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-[linear-gradient(90deg,rgba(108,79,44,0.18),transparent)]" />
                  <div className="relative mb-5 inline-flex items-baseline gap-3">
                    <span
                      className="text-[0.78rem] uppercase tracking-[0.18em] text-[var(--pencil)]/85"
                      style={{
                        fontFamily: 'var(--font-kalam), "Segoe Print", "Bradley Hand", cursive',
                        transform: 'translateY(-0.06em)'
                      }}
                    >
                      Chapter 
                    </span>
                    <span
                      className="inline-block text-[1.1rem] leading-none"
                      style={{
                        fontFamily: 'var(--font-kalam), "Segoe Print", "Bradley Hand", cursive',
                        letterSpacing: '0.08em',
                        transform: 'translateX(0.02em) translateY(-0.04em)',
                        textShadow: '0 1px 0 rgba(255,255,255,0.14)',
                        color: '#5a5a5a',
                        fontWeight: 'bold',
                      }}
                      aria-hidden="true"
                    >
                      Ⅱ
                    </span>
                  </div>
                  <h2
                    style={{ color: '#5a5a5a', fontFamily: 'var(--font-kalam), "Segoe Print", "Bradley Hand", cursive' }}
                    className="text-5xl font-serif sm:text-6xl"
                  >
                    {language === 'tr' ? 'Spor' : 'Sport'}
                  </h2>
                  <p style={{ color: '#5a5a5a', fontFamily: 'var(--font-kalam), "Segoe Print", "Bradley Hand", cursive' }} className="mt-3 max-w-md text-sm leading-7 font-serif">
                    {language === 'tr'
                      ? 'Kara, su ve hava sporları hakkında notlar.'
                      : 'Notes about land, water, and air sports.'}
                  </p>
                  <div className="mt-8 flex flex-col gap-4">
                    <MainCategoryLink label={language === 'tr' ? 'Kara Sporları' : 'Land Sports'} href="/sport/hiking" icon={Icons.hikingBoot} />
                    <MainCategoryLink label={language === 'tr' ? 'Su Sporları' : 'Water Sports'} href="/sport/water-sports" icon={Icons.waves} />
                    <MainCategoryLink label={language === 'tr' ? 'Hava Sporları' : 'Air Sports'} href="/sport/air-sports" icon={Icons.parachute} />
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


