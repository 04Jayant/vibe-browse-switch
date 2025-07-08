
import { useState } from "react";

const SettingsPage = () => {
  const [preferences, setPreferences] = useState({
    notifications: true,
    autoplay: false,
    qualityPreference: 'auto',
    language: 'en',
    darkMode: true,
  });

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSelect = (key: keyof typeof preferences, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section with Settings Theme */}
      <div className="relative mb-12 rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=300&fit=crop')`
          }}
        />
        <div className="relative bg-black/70 backdrop-blur-sm p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Settings</h1>
          <p className="text-gray-300 text-lg">Customize your VidBooks experience</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Account Settings */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Account</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <h3 className="text-white font-medium">Profile</h3>
                <p className="text-gray-400 text-sm">Update your profile information</p>
              </div>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Edit
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <h3 className="text-white font-medium">Subscription</h3>
                <p className="text-gray-400 text-sm">Manage your subscription plan</p>
              </div>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Manage
              </button>
            </div>
          </div>
        </div>

        {/* Playback Settings */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Playback</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <h3 className="text-white font-medium">Autoplay</h3>
                <p className="text-gray-400 text-sm">Automatically play next content</p>
              </div>
              <button
                onClick={() => handleToggle('autoplay')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  preferences.autoplay ? 'bg-gray-600' : 'bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.autoplay ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="text-white font-medium mb-3">Quality Preference</h3>
              <select
                value={preferences.qualityPreference}
                onChange={(e) => handleSelect('qualityPreference', e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gray-400"
              >
                <option value="auto">Auto</option>
                <option value="high">High Quality</option>
                <option value="medium">Medium Quality</option>
                <option value="low">Low Quality</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <h3 className="text-white font-medium">Push Notifications</h3>
                <p className="text-gray-400 text-sm">Get notified about new content</p>
              </div>
              <button
                onClick={() => handleToggle('notifications')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  preferences.notifications ? 'bg-gray-600' : 'bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Language & Region */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Language & Region</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="text-white font-medium mb-3">Language</h3>
              <select
                value={preferences.language}
                onChange={(e) => handleSelect('language', e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gray-400"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-4 bg-gradient-to-r from-gray-600 to-slate-600 text-white font-semibold rounded-2xl hover:from-gray-700 hover:to-slate-700 transition-all duration-300 shadow-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
