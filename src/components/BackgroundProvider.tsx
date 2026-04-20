'use client';

import { ReactNode, useState, useEffect } from 'react';

const NATURE_BACKGROUNDS = [
  {
    id: 1,
    url: 'https://picsum.photos/id/1018/1920/1080',
    title: 'Mountain Range',
    photographer: 'Picsum',
  },
  {
    id: 2,
    url: 'https://picsum.photos/id/1015/1920/1080',
    title: 'Forest Sunset',
    photographer: 'Picsum',
  },
  {
    id: 3,
    url: 'https://picsum.photos/id/1016/1920/1080',
    title: 'Lake Landscape',
    photographer: 'Picsum',
  },
  {
    id: 4,
    url: 'https://picsum.photos/id/1024/1920/1080',
    title: 'Alpine Peak',
    photographer: 'Picsum',
  },
  {
    id: 5,
    url: 'https://picsum.photos/id/1020/1920/1080',
    title: 'Ocean Waves',
    photographer: 'Picsum',
  },
  {
    id: 6,
    url: 'https://picsum.photos/id/1039/1920/1080',
    title: 'Birch Forest',
    photographer: 'Picsum',
  },
  {
    id: 7,
    url: 'https://picsum.photos/id/1043/1920/1080',
    title: 'Mountain Vista',
    photographer: 'Picsum',
  },
  {
    id: 8,
    url: 'https://picsum.photos/id/1056/1920/1080',
    title: 'Peak Adventure',
    photographer: 'Picsum',
  },
];

export default function BackgroundProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [backgroundUrl] = useState<string>(() => {
    const randomIndex = Math.floor(Math.random() * NATURE_BACKGROUNDS.length);
    return NATURE_BACKGROUNDS[randomIndex].url;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>{children}</div>;
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url('${backgroundUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark Overlay - Dynamically adjusted for theme */}
      <div
        className="fixed inset-0 pointer-events-none bg-black/28"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
