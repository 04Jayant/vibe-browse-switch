import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EpicAdventurePage = () => {
  const navigate = useNavigate();

  const adventureVideos = [
    {
      id: 1,
      title: "Journey to the Hidden Temple",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
      duration: "2:45:30"
    },
    {
      id: 2,
      title: "Quest of the Fire Mountain",
      thumbnail: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=400&h=300&fit=crop",
      duration: "1:55:20"
    },
    {
      id: 3,
      title: "Secrets of the Lost Galaxy",
      thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop",
      duration: "3:12:45"
    },
    {
      id: 4,
      title: "The Mystic Forest Chronicles",
      thumbnail: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop",
      duration: "2:30:15"
    },
    {
      id: 5,
      title: "Dragon's Realm Expedition",
      thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
      duration: "4:05:10"
    },
    {
      id: 6,
      title: "Valley of Ancient Legends",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      duration: "2:18:30"
    }
  ];

  const handleVideoClick = (video: typeof adventureVideos[0]) => {
    // For now, we'll just log the video. In a real app, this would open a video player
    console.log(`Playing: ${video.title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-purple-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/")}
                className="flex items-center space-x-2 text-white hover:text-orange-300 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
              <h1 className="text-2xl font-bold text-white">Epic Adventure</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-48 bg-gradient-to-r from-orange-800/50 to-red-800/50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Epic Adventure Collection</h2>
          <p className="text-xl text-orange-200">Embark on legendary journeys and discover mystical worlds</p>
        </div>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adventureVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleVideoClick(video)}
              className="group cursor-pointer bg-black/20 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-800">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-orange-600 rounded-full p-3 shadow-lg">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">Epic Adventure Series</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpicAdventurePage;