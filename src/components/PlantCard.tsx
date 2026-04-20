'use client';

import { Plant } from '@/types';
import Link from 'next/link';

interface PlantCardProps {
  plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
  return (
    <div className="group bg-gradient-to-br from-green-900/40 to-green-900/20 border border-green-700 rounded-lg overflow-hidden hover:border-green-500 hover:shadow-lg hover:shadow-green-900/50 transition-all duration-300 hover:scale-105">
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden bg-green-900">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-transparent to-transparent opacity-60" />
        
        {/* Type Badge */}
        <div className="absolute top-3 right-3 bg-green-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {plant.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-green-100 mb-1 line-clamp-2">
          {plant.name}
        </h3>
        <p className="text-sm text-green-300 italic mb-3">
          {plant.scientificName}
        </p>
        
        <p className="text-sm text-green-200 mb-4 line-clamp-3">
          {plant.description}
        </p>

        {/* Climate & Region Tags */}
        <div className="space-y-2 mb-4">
          <div className="flex flex-wrap gap-2">
            {plant.climate.map((c) => (
              <span
                key={c}
                className="inline-block bg-green-800/50 text-green-100 text-xs px-2 py-1 rounded"
              >
                🌡️ {c}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {plant.region.map((r) => (
              <span
                key={r}
                className="inline-block bg-green-700/50 text-green-100 text-xs px-2 py-1 rounded"
              >
                📍 {r}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        {(plant.height || plant.blooming) && (
          <div className="pt-3 border-t border-green-700 space-y-1 text-xs text-green-300">
            {plant.height && <p>📏 Height: {plant.height}</p>}
            {plant.blooming && <p>🌸 Blooming: {plant.blooming}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
