
import { ContentMode } from "@/pages/Index";

interface ContentToggleProps {
  contentMode: ContentMode;
  setContentMode: (mode: ContentMode) => void;
}

const ContentToggle = ({ contentMode, setContentMode }: ContentToggleProps) => {
  return (
    <div className="relative bg-white/10 backdrop-blur-md p-1 rounded-2xl border border-white/20">
      <div className="flex">
        <button
          onClick={() => setContentMode('videos')}
          className={`relative px-6 py-3 rounded-xl transition-all duration-300 ${
            contentMode === 'videos'
              ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          🎬 Videos
        </button>
        <button
          onClick={() => setContentMode('books')}
          className={`relative px-6 py-3 rounded-xl transition-all duration-300 ${
            contentMode === 'books'
              ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          📚 Books
        </button>
      </div>
    </div>
  );
};

export default ContentToggle;
