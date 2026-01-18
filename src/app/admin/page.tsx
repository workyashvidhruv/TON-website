'use client';

import { useState } from 'react';
import EpisodeManager from '@/components/admin/EpisodeManager';
import GuestManager from '@/components/admin/GuestManager';
import SiteSettings from '@/components/admin/SiteSettings';
import YouTubeExtractor from '@/components/admin/YouTubeExtractor';

type Tab = 'episodes' | 'guests' | 'settings' | 'youtube';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('episodes');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'episodes', label: 'Episodes' },
    { id: 'guests', label: 'Guests' },
    { id: 'youtube', label: 'YouTube Extractor' },
    { id: 'settings', label: 'Site Settings' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted text-sm">Manage your podcast episodes, guests, and site settings</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-white/20 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white text-black'
                : 'border border-white/50 hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'episodes' && <EpisodeManager />}
        {activeTab === 'guests' && <GuestManager />}
        {activeTab === 'youtube' && <YouTubeExtractor />}
        {activeTab === 'settings' && <SiteSettings />}
      </div>
    </div>
  );
}
