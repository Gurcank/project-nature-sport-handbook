'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useSettings } from '@/context/SettingsContext';

const categoryContent = {
  trees: {
    tr: {
      title: 'Ağaçlar',
      intro: 'Orman ekosistemlerinde önemli rol oynayan ağaç türleri.',
      items: [
        { name: 'Meşe', note: 'Dayanıklı yapısı ve uzun ömrü ile bilinir.' },
        { name: 'Çam', note: 'İğne yapraklı, reçineli ve dört mevsim yeşil.' },
        { name: 'Kayın', note: 'Geniş yapraklı, nemli bölgelerde yaygın.' },
        { name: 'Sedir', note: 'Yüksek rakımda gelişen güçlü gövdeli tür.' },
      ],
    },
    en: {
      title: 'Trees',
      intro: 'Tree species that play a key role in forest ecosystems.',
      items: [
        { name: 'Oak', note: 'Known for durability and long lifespan.' },
        { name: 'Pine', note: 'Needle-leaf evergreen with resin-rich bark.' },
        { name: 'Beech', note: 'Broadleaf species common in humid regions.' },
        { name: 'Cedar', note: 'Strong trunk species in higher altitudes.' },
      ],
    },
  },
  flowers: {
    tr: {
      title: 'Çiçekli Bitkiler',
      intro: 'Tohum ve çiçek oluşturan bitkiler grubu.',
      items: [
        { name: 'Gül', note: 'Süs bitkileri içinde en popüler türlerden.' },
        { name: 'Lale', note: 'Soğanlı, mevsimlik çiçekli tür.' },
      ],
    },
    en: {
      title: 'Flowering Plants',
      intro: 'Plant group that produces flowers and seeds.',
      items: [
        { name: 'Rose', note: 'One of the most popular ornamental flowers.' },
        { name: 'Tulip', note: 'Seasonal bulbous flowering species.' },
      ],
    },
  },
  shrubs: {
    tr: {
      title: 'Çalılar & Fundalar',
      intro: 'Kısa boylu odunsu bitkiler.',
      items: [
        { name: 'Lavanta', note: 'Kuraklığa dayanıklı aromatik tür.' },
        { name: 'Biberiye', note: 'Akdeniz ikliminde yaygın çalı formu.' },
      ],
    },
    en: {
      title: 'Shrubs & Heath',
      intro: 'Low-height woody plant forms.',
      items: [
        { name: 'Lavender', note: 'Aromatic species tolerant to dry climates.' },
        { name: 'Rosemary', note: 'Common shrub in Mediterranean habitats.' },
      ],
    },
  },
  herbs: {
    tr: {
      title: 'Otlar & Bitkiler',
      intro: 'Yumuşak gövdeli, çoğu mevsimsel otsu bitkiler.',
      items: [
        { name: 'Nane', note: 'Aromatik yapraklarıyla yaygın kullanım.' },
        { name: 'Kekik', note: 'Kurak bölgelerde yetişen dayanıklı tür.' },
      ],
    },
    en: {
      title: 'Herbs',
      intro: 'Soft-stem herbaceous plants, often seasonal.',
      items: [
        { name: 'Mint', note: 'Widely used aromatic leaf plant.' },
        { name: 'Thyme', note: 'Hardy species thriving in dry areas.' },
      ],
    },
  },
  aquatic: {
    tr: {
      title: 'Su Bitkileri',
      intro: 'Tatlı su ve kıyı habitatlarında yaşayan türler.',
      items: [
        { name: 'Nilüfer', note: 'Yüzeyde yaprak açan sucul bitki.' },
        { name: 'Saz', note: 'Sulak alanlarda kümeler halinde büyür.' },
      ],
    },
    en: {
      title: 'Aquatic Plants',
      intro: 'Species living in freshwater and shoreline habitats.',
      items: [
        { name: 'Water Lily', note: 'Aquatic plant with floating leaves.' },
        { name: 'Reed', note: 'Grows in dense groups in wetlands.' },
      ],
    },
  },
  mosses: {
    tr: {
      title: 'Eğreltiler & Yosunlar',
      intro: 'Nemli bölgelerde görülen sporlu bitki toplulukları.',
      items: [
        { name: 'Orman Eğreltisi', note: 'Gölge alanlarda sık görülür.' },
        { name: 'Kaya Yosunu', note: 'Nemli taş yüzeylerinde gelişir.' },
      ],
    },
    en: {
      title: 'Ferns & Mosses',
      intro: 'Spore-based plants common in humid regions.',
      items: [
        { name: 'Forest Fern', note: 'Common in shaded woodland areas.' },
        { name: 'Rock Moss', note: 'Develops on humid stone surfaces.' },
      ],
    },
  },
} as const;

export default function PlantSubCategoryPage() {
  const { language } = useSettings();
  const params = useParams<{ category: string }>();
  const key = params.category as keyof typeof categoryContent;
  const content = categoryContent[key];

  if (!content) {
    return (
      <div className="flex-1 mx-auto w-full max-w-5xl px-4 py-12">
        <div className="rounded-2xl border border-red-300/40 bg-black/35 p-6 backdrop-blur-sm">
          <h1 className="mb-3 text-3xl font-bold text-red-200">{language === 'tr' ? 'Kategori bulunamadı' : 'Category not found'}</h1>
          <Link href="/nature/plants" className="text-red-100 underline underline-offset-4">
            {language === 'tr' ? 'Bitki kategorilerine dön' : 'Back to plant categories'}
          </Link>
        </div>
      </div>
    );
  }

  const text = content[language];

  return (
    <div className="flex-1 mx-auto w-full max-w-6xl px-4 py-12">
      <section className="rounded-2xl border border-green-300/45 bg-black/35 p-6 backdrop-blur-sm">
        <h1 className="mb-2 text-4xl font-bold text-green-100">🌿 {text.title}</h1>
        <p className="mb-6 text-green-50/85">{text.intro}</p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {text.items.map((item) => (
            <article key={item.name} className="rounded-xl border border-green-200/35 bg-green-900/30 p-4">
              <h2 className="text-2xl font-semibold text-green-100">{item.name}</h2>
              <p className="mt-1 text-green-50/80">{item.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/nature/plants"
            className="rounded-lg border border-green-200/60 bg-green-100/15 px-4 py-2 font-medium text-green-100 transition hover:bg-green-100/25"
          >
            {language === 'tr' ? 'Bitki kategorilerine dön' : 'Back to plant categories'}
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-green-200/60 bg-green-100/15 px-4 py-2 font-medium text-green-100 transition hover:bg-green-100/25"
          >
            {language === 'tr' ? 'Ana sayfaya dön' : 'Back to home'}
          </Link>
        </div>
      </section>
    </div>
  );
}
