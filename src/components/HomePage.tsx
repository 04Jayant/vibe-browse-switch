
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
      {/* Header Section */}
      <div className="text-center mb-12">
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
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
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

      {/* Content Toggle */}
      <div className="flex justify-center mb-12">
        <ContentToggle contentMode={contentMode} setContentMode={setContentMode} />
      </div>

      {/* Recommended Content */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Recommended for You</h2>
        <ContentCarousel contentMode={contentMode} />
      </section>

      {/* Recently Added */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Recently Added</h2>
        <ContentCarousel contentMode={contentMode} />
      </section>
    </div>
  );
};

export default HomePage;
