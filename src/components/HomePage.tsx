
import { useState } from "react";
import { Search } from "lucide-react";
import { ContentMode } from "@/pages/Index";
import ContentToggle from "./ContentToggle";
import ContentCarousel from "./ContentCarousel";

interface HomePageProps {
  contentMode: ContentMode;
  setContentMode: (mode: ContentMode) => void;
}

const HomePage = ({ contentMode, setContentMode }: HomePageProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section with Background Image */}
      <div className="relative mb-12 rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=400&fit=crop')`
          }}
        />
        <div className="relative bg-black/40 backdrop-blur-sm p-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Amazing{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {contentMode === 'videos' ? 'Videos' : 'Books'}
            </span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            {contentMode === 'videos' 
              ? 'Stream the latest movies, documentaries, and series'
              : 'Read bestsellers, classics, and discover new authors'
            }
          </p>
          
          {/* Content Toggle */}
          <div className="flex justify-center mb-8">
            <ContentToggle contentMode={contentMode} setContentMode={setContentMode} />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder={`Search for ${contentMode}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
          />
        </div>
      </div>

      {/* Recommended Content */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Recommended for You</h2>
        <ContentCarousel contentMode={contentMode} page="home" />
      </section>

      {/* Recently Added */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Recently Added</h2>
        <ContentCarousel contentMode={contentMode} page="home" />
      </section>
    </div>
  );
};

export default HomePage;
