export default function TrekkingPage() {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
      <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text mb-8">
        🏔️ Trekking Adventures
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-amber-900/40 to-amber-900/20 border border-amber-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-amber-100 mb-4">
            Trekking vs Hiking
          </h2>
          <p className="text-amber-200 mb-4">
            Trekking involves longer journeys through remote areas, typically over multiple days, with minimal infrastructure and higher terrain difficulty.
          </p>
          <ul className="space-y-3 text-amber-200">
            <li>📍 Remote Locations</li>
            <li>⏱️ Multi-day Expeditions</li>
            <li>🏕️ Camping Required</li>
            <li>🧗 Higher Difficulty</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-amber-900/40 to-amber-900/20 border border-amber-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-amber-100 mb-4">
            Advanced Gear
          </h2>
          <ul className="space-y-3 text-amber-200">
            <li>🎒 Large Backpack (50-70L)</li>
            <li>⛺ Four-Season Tent</li>
            <li>🛗 Climbing Equipment</li>
            <li>🧭 Advanced Navigation</li>
            <li>🏕️ Camping Stove</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-amber-900/20 to-amber-900/10 border border-amber-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-amber-100 mb-4">
          Featured Trek Routes
        </h2>
        <p className="text-amber-200">
          Detailed trekking routes and multi-day expedition guides coming soon!
        </p>
      </div>
    </div>
  );
}
