import Link from 'next/link';
import type { CSSProperties } from 'react';

export type NotebookNote = {
  key: string;
  title: string;
  desc: string;
  href: string;
  tone: string;
  pin: string;
  top: string;
  side: string;
  rotate: string;
};

type NotebookSpreadProps = {
  leftNotes: NotebookNote[];
  rightNotes: NotebookNote[];
  size?: 'b6' | 'regular';
};

function StickyNote({
  note,
  side,
  mobileRotate,
}: {
  note: NotebookNote;
  side: 'left' | 'right';
  mobileRotate: string;
}) {
  const desktopStyle: CSSProperties = {
    top: note.top,
    width: '43%',
    height: '18%',
    transform: `rotate(${note.rotate})`,
    [side]: note.side,
  };

  return (
    <Link
      href={note.href}
      className={`group relative block rounded-sm border p-3 shadow-[0_8px_14px_rgba(46,34,20,0.24)] transition duration-300 hover:-translate-y-0.5 hover:rotate-0 hover:shadow-[0_12px_18px_rgba(46,34,20,0.3)] ${note.tone}`}
      style={desktopStyle}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
        style={{ backgroundColor: note.pin }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-5 rounded-t-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0))]" />
      <h2 className="mt-3 text-lg leading-tight font-semibold text-[#3f2d16]">{note.title}</h2>
      <p className="mt-1 text-sm leading-5 text-[#6a4f2d]">{note.desc}</p>

      <div
        className="md:hidden"
        style={{ transform: `rotate(${mobileRotate})` }}
      />
    </Link>
  );
}

export default function NotebookSpread({
  leftNotes,
  rightNotes,
  size = 'b6',
}: NotebookSpreadProps) {
  const isB6 = size === 'b6';
  const desktopContainerMax = isB6 ? 'max-w-[58rem]' : 'max-w-[52rem]';
  const notebookMaxWidth = isB6 ? 'min(58rem, calc((100vh - 8rem) * 1.4205))' : undefined;

  return (
    <section className={`relative mx-auto w-full ${desktopContainerMax}`} style={{ maxWidth: notebookMaxWidth }}>
      <div className="pointer-events-none absolute -inset-x-4 top-[18px] h-[calc(100%-18px)] rounded-[2.7rem] border border-[#7a5c37]/24 bg-[linear-gradient(180deg,#e8d8aa_0%,#d8bd88_100%)] opacity-90 shadow-[0_14px_34px_rgba(60,38,17,0.2)]">
        <div className="absolute inset-y-0 left-1/2 w-[34px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(155,120,77,0.1)_34%,rgba(102,72,40,0.22)_46%,rgba(66,40,19,0.5)_50%,rgba(102,72,40,0.22)_54%,rgba(155,120,77,0.1)_66%,transparent_100%)]" />
      </div>
      <div className="pointer-events-none absolute -inset-x-3 top-[12px] h-[calc(100%-12px)] rounded-[2.72rem] border border-[#7a5c37]/28 bg-[linear-gradient(180deg,#eadbb0_0%,#dbc190_100%)] opacity-92 shadow-[0_18px_42px_rgba(60,38,17,0.22)]">
        <div className="absolute inset-y-0 left-1/2 w-[38px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(160,124,81,0.12)_30%,rgba(106,76,43,0.28)_45%,rgba(68,42,20,0.58)_50%,rgba(106,76,43,0.28)_55%,rgba(160,124,81,0.12)_70%,transparent_100%)]" />
      </div>
      <div className="pointer-events-none absolute -inset-x-2 top-[6px] h-[calc(100%-6px)] rounded-[2.75rem] border border-[#7a5c37]/32 bg-[linear-gradient(180deg,#ecdeb4_0%,#ddc595_100%)] opacity-94 shadow-[0_24px_50px_rgba(60,38,17,0.24)]">
        <div className="absolute inset-y-0 left-1/2 w-[44px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(168,132,88,0.14)_28%,rgba(112,80,46,0.34)_44%,rgba(71,43,21,0.68)_50%,rgba(112,80,46,0.34)_56%,rgba(168,132,88,0.14)_72%,transparent_100%)]" />
      </div>

      <div className="relative overflow-visible rounded-[2.75rem] border border-[#6f542f]/60 bg-[linear-gradient(180deg,#ecdcb0_0%,#dcc08d_100%)] shadow-[0_34px_90px_rgba(51,33,14,0.38),inset_0_2px_0_rgba(255,248,229,0.45),inset_0_-12px_24px_rgba(75,52,24,0.14)] md:aspect-[250/176]">
        <div className="pointer-events-none absolute inset-y-5 left-4 w-3 rounded-full bg-[linear-gradient(90deg,rgba(143,108,63,0.35),rgba(255,255,255,0.0))]" />
        <div className="pointer-events-none absolute inset-y-5 right-4 w-3 rounded-full bg-[linear-gradient(270deg,rgba(143,108,63,0.35),rgba(255,255,255,0.0))]" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-[48px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(173,136,88,0.14)_24%,rgba(127,92,50,0.4)_40%,rgba(78,48,24,0.82)_48%,rgba(58,33,13,0.98)_50%,rgba(78,48,24,0.82)_52%,rgba(127,92,50,0.4)_60%,rgba(173,136,88,0.14)_76%,transparent_100%)]" />

        <div className="grid gap-0 md:h-full md:grid-cols-2">
          <div
            className="relative min-h-[27rem] rounded-tl-[2.75rem] rounded-bl-[2.75rem] border-b border-[#7a5c37]/26 bg-[linear-gradient(165deg,#f0dfb1_0%,#e0c590_100%)] px-5 py-6 shadow-[inset_-22px_0_26px_rgba(63,43,19,0.12)] sm:min-h-[30rem] md:h-full md:min-h-0 md:border-b-0 md:border-r md:border-[#7a5c37]/24"
          >
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-[linear-gradient(270deg,rgba(108,79,44,0.18),transparent)]" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:hidden">
              {[...leftNotes, ...rightNotes].map((note, index) => (
                <Link
                  key={note.key}
                  href={note.href}
                  className={`relative block h-36 rounded-sm border p-3 shadow-[0_8px_14px_rgba(46,34,20,0.24)] ${note.tone}`}
                  style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}
                >
                  <div
                    className="pointer-events-none absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                    style={{ backgroundColor: note.pin }}
                  />
                  <h2 className="mt-3 text-xl leading-tight font-semibold text-[#3f2d16]">{note.title}</h2>
                  <p className="mt-1 text-sm leading-5 text-[#6a4f2d]">{note.desc}</p>
                </Link>
              ))}
            </div>

            <div className="relative hidden h-full md:block">
              {leftNotes.map((note) => (
                <StickyNote key={note.key} note={note} side="left" mobileRotate="-2deg" />
              ))}
            </div>
          </div>

          <div
            className="relative hidden rounded-tr-[2.75rem] rounded-br-[2.75rem] bg-[linear-gradient(195deg,#f0dfb1_0%,#e0c590_100%)] px-5 py-6 shadow-[inset_22px_0_26px_rgba(63,43,19,0.12)] md:block md:h-full"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-[linear-gradient(90deg,rgba(108,79,44,0.18),transparent)]" />
            <div className="relative h-full">
              {rightNotes.map((note) => (
                <StickyNote key={note.key} note={note} side="right" mobileRotate="2deg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
