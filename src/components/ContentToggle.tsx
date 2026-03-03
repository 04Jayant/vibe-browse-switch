
import { ContentMode } from "@/pages/Index";

interface ContentToggleProps {
  contentMode: ContentMode;
  setContentMode: (mode: ContentMode) => void;
}

const ContentToggle = ({ contentMode, setContentMode }: ContentToggleProps) => {
  return (
    <div className="relative bg-white/20 backdrop-blur-md p-1 rounded-2xl border border-white/30 shadow-lg">
      <div className="flex">
        <button
          onClick={() => setContentMode('videos')}
          className="relative px-6 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg"
        >
          🎬 Videos
        </button>
      </div>
    </div>
  );
};

export default ContentToggle;
