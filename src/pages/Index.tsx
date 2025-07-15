
import { useState } from "react";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import ExplorePage from "@/components/ExplorePage";
import TrendingPage from "@/components/TrendingPage";
import SettingsPage from "@/components/SettingsPage";

export type ContentMode = 'videos' | 'books';
export type ActivePage = 'home' | 'explore' | 'trending' | 'settings';

const Index = () => {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [contentMode, setContentMode] = useState<ContentMode>('videos');

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage contentMode={contentMode} setContentMode={setContentMode} />;
      case 'explore':
        return <ExplorePage contentMode={contentMode} />;
      case 'trending':
        return <TrendingPage contentMode={contentMode} />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage contentMode={contentMode} setContentMode={setContentMode} />;
    }
  };

  const getBackgroundClass = () => {
    switch (activePage) {
      case 'home':
        return 'bg-black';
      case 'explore':
        return 'bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900';
      case 'trending':
        return 'bg-gradient-to-br from-red-900 via-rose-900 to-slate-900';
      case 'settings':
        return 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900';
      default:
        return 'bg-black';
    }
  };

  return (
    <div className={`min-h-screen ${getBackgroundClass()}`}>
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <main className="pt-20">
        {renderActivePage()}
      </main>
    </div>
  );
};

export default Index;
