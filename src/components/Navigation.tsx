
import { Home, Search, TrendingUp, Settings } from "lucide-react";
import { ActivePage } from "@/pages/Index";

interface NavigationProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

const Navigation = ({ activePage, setActivePage }: NavigationProps) => {
  const navItems = [
    { id: 'home' as ActivePage, label: 'Home', icon: Home },
    { id: 'explore' as ActivePage, label: 'Explore', icon: Search },
    { id: 'trending' as ActivePage, label: 'Trending', icon: TrendingUp },
    { id: 'settings' as ActivePage, label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-white font-bold text-xl">VidBooks</span>
          </div>
          
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden sm:block">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
