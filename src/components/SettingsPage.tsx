
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
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Settings</h1>
        <p className="text-gray-300 text-lg">Customize your VidBooks experience</p>
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
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Edit
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <h3 className="text-white font-medium">Subscription</h3>
                <p className="text-gray-400 text-sm">Manage your subscription plan</p>
              </div>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
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
                  preferences.autoplay ? 'bg-purple-600' : 'bg-gray-600'
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
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400"
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
                  preferences.notifications ? 'bg-purple-600' : 'bg-gray-600'
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
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400"
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
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
