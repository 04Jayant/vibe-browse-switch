
import { TrendingUp } from "lucide-react";
import { ContentMode } from "@/pages/Index";
import ContentCarousel from "./ContentCarousel";

interface TrendingPageProps {
  contentMode: ContentMode;
}

const TrendingPage = ({ contentMode }: TrendingPageProps) => {
  const trendingStats = [
    { label: 'Trending Now', count: contentMode === 'videos' ? '2.3M views' : '45K reads' },
    { label: 'This Week', count: contentMode === 'videos' ? '15.7M views' : '230K reads' },
    { label: 'This Month', count: contentMode === 'videos' ? '89.2M views' : '1.2M reads' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section with Trending Theme */}
      <div className="relative mb-12 rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=300&fit=crop')`
          }}
        />
        <div className="relative bg-black/60 backdrop-blur-sm p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trending {contentMode === 'videos' ? 'Videos' : 'Books'}
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Discover what everyone is {contentMode === 'videos' ? 'watching' : 'reading'} right now
          </p>
          
          {/* Trending Stats */}
          <div className="flex justify-center gap-8">
            {trendingStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.count}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Content Sections */}
      <div className="space-y-12">
        <section>
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mr-3">
              <span className="text-white font-bold text-sm">🔥</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Hot Right Now</h2>
          </div>
          <ContentCarousel contentMode={contentMode} page="trending" />
        </section>

        <section>
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3">
              <TrendingUp className="text-white" size={16} />
            </div>
            <h2 className="text-2xl font-bold text-white">Rising Fast</h2>
          </div>
          <ContentCarousel contentMode={contentMode} page="trending" />
        </section>

        <section>
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-3">
              <span className="text-white font-bold text-sm">⭐</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Top Rated This Week</h2>
          </div>
          <ContentCarousel contentMode={contentMode} page="trending" />
        </section>

        <section>
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3">
              <span className="text-white font-bold text-sm">👑</span>
            </div>
            <h2 className="text-2xl font-bold text-white">All-Time Favorites</h2>
          </div>
          <ContentCarousel contentMode={contentMode} page="trending" />
        </section>
      </div>
    </div>
  );
};

export default TrendingPage;
