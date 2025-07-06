
import { ContentMode } from "@/pages/Index";

interface ContentCarouselProps {
  contentMode: ContentMode;
}

const ContentCarousel = ({ contentMode }: ContentCarouselProps) => {
  const videoContent = [
    { id: 1, title: "Epic Adventure", genre: "Action", image: "photo-1605810230434-7631ac76ec81" },
    { id: 2, title: "Code Masters", genre: "Documentary", image: "photo-1461749280684-dccba630e2f6" },
    { id: 3, title: "Digital Dreams", genre: "Sci-Fi", image: "photo-1526374965328-7f61d4dc18c5" },
    { id: 4, title: "Ocean Mysteries", genre: "Nature", image: "photo-1518877593221-1f28583780b4" },
    { id: 5, title: "Forest Tales", genre: "Adventure", image: "photo-1500673922987-e212871fec22" },
  ];

  const bookContent = [
    { id: 1, title: "Digital Programming", genre: "Technology", image: "photo-1487058792275-0ad4aaf24ca7" },
    { id: 2, title: "Remote Work Guide", genre: "Business", image: "photo-1649972904349-6e44c42644a7" },
    { id: 3, title: "Laptop Chronicles", genre: "Memoir", image: "photo-1488590528505-98d2b5aba04b" },
    { id: 4, title: "Coding Mastery", genre: "Education", image: "photo-1581091226825-a6a2a5aee158" },
    { id: 5, title: "Nature's Wonder", genre: "Science", image: "photo-1506744038136-46273834b3fb" },
  ];

  const content = contentMode === 'videos' ? videoContent : bookContent;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {content.map((item) => (
        <div
          key={item.id}
          className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10">
            <img
              src={`https://images.unsplash.com/${item.image}?w=300&h=400&fit=crop`}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-gray-300 text-xs">{item.genre}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentCarousel;
