
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <main className="pt-20">
        {renderActivePage()}
      </main>
    </div>
  );
};

export default Index;
