
import { useState } from "react";
import { ContentMode } from "@/pages/Index";
import ContentCarousel from "./ContentCarousel";

interface ExplorePageProps {
  contentMode: ContentMode;
}

const ExplorePage = ({ contentMode }: ExplorePageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const videoCategories = [
    { id: 'all', name: 'All Categories', emoji: '🎬' },
    { id: 'action', name: 'Action', emoji: '💥' },
    { id: 'documentary', name: 'Documentary', emoji: '📺' },
    { id: 'sci-fi', name: 'Sci-Fi', emoji: '🚀' },
    { id: 'nature', name: 'Nature', emoji: '🌿' },
    { id: 'comedy', name: 'Comedy', emoji: '😄' },
  ];

  const bookCategories = [
    { id: 'all', name: 'All Categories', emoji: '📚' },
    { id: 'fiction', name: 'Fiction', emoji: '📖' },
    { id: 'technology', name: 'Technology', emoji: '💻' },
    { id: 'business', name: 'Business', emoji: '💼' },
    { id: 'science', name: 'Science', emoji: '🔬' },
    { id: 'biography', name: 'Biography', emoji: '👤' },
  ];

  const categories = contentMode === 'videos' ? videoCategories : bookCategories;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section with Explore Theme */}
      <div className="relative mb-12 rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=300&fit=crop')`
          }}
        />
        <div className="relative bg-black/50 backdrop-blur-sm p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore {contentMode === 'videos' ? 'Videos' : 'Books'}
          </h1>
          <p className="text-gray-300 text-lg">
            Browse by category and discover your next favorite {contentMode === 'videos' ? 'video' : 'book'}
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-2xl transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-md border border-white/10'
            }`}
          >
            <span className="mr-2">{category.emoji}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">
            {selectedCategory === 'all' ? 'Popular' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <ContentCarousel contentMode={contentMode} page="explore" />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">New Releases</h2>
          <ContentCarousel contentMode={contentMode} page="explore" />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Editor's Choice</h2>
          <ContentCarousel contentMode={contentMode} page="explore" />
        </section>
      </div>
    </div>
  );
};

export default ExplorePage;
