export default function HikingPage() {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
      <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text mb-8">
        🥾 Hiking Guides & Tips
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-amber-900/40 to-amber-900/20 border border-amber-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-amber-100 mb-4">
            Beginner Tips
          </h2>
          <ul className="space-y-3 text-amber-200">
            <li>✓ Start with well-marked trails</li>
            <li>✓ Wear appropriate footwear</li>
            <li>✓ Bring plenty of water</li>
            <li>✓ Check weather conditions</li>
            <li>✓ Hike with a buddy</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-amber-900/40 to-amber-900/20 border border-amber-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-amber-100 mb-4">
            Essential Gear
          </h2>
          <ul className="space-y-3 text-amber-200">
            <li>🎒 Backpack (20-30L)</li>
            <li>🥾 Hiking Boots</li>
            <li>🗺️ Map & Compass</li>
            <li>🧭 GPS Device</li>
            <li>💧 Water Bottle</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-amber-900/20 to-amber-900/10 border border-amber-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-amber-100 mb-4">
          Popular Hiking Routes
        </h2>
        <p className="text-amber-200 mb-6">
          More hiking routes coming soon! Check back later for detailed guides and maps.
        </p>
      </div>
    </div>
  );
}
