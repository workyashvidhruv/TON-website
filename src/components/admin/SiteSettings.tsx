'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/data';
import { SiteConfig } from '@/lib/types';

export default function SiteSettings() {
  const [config, setConfig] = useState<SiteConfig>(siteConfig);
  const [saved, setSaved] = useState(false);

  const handleChange = (field: keyof SiteConfig, value: string) => {
    setConfig({ ...config, [field]: value });
    setSaved(false);
  };

  const handleSocialChange = (field: string, value: string) => {
    setConfig({
      ...config,
      social: { ...config.social, [field]: value },
    });
    setSaved(false);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(config, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'site-config.json';
    link.click();
    setSaved(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Site Settings</h2>
        <button onClick={exportData} className="btn-primary text-sm">
          Export JSON
        </button>
      </div>

      {saved && (
        <div className="mb-4 p-3 border border-green-500 text-green-500 text-sm">
          Settings exported! Download the file and replace <code className="bg-white/10 px-1">src/data/site-config.json</code>
        </div>
      )}

      {/* Basic Settings */}
      <div className="card mb-6">
        <h3 className="font-semibold mb-4">Basic Information</h3>
        <div className="space-y-4">
          <div>
            <label className="form-label">Site Name</label>
            <input
              type="text"
              value={config.siteName}
              onChange={(e) => handleChange('siteName', e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Tagline</label>
            <input
              type="text"
              value={config.tagline}
              onChange={(e) => handleChange('tagline', e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Description</label>
            <input
              type="text"
              value={config.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Brand Promise</label>
            <input
              type="text"
              value={config.brandPromise}
              onChange={(e) => handleChange('brandPromise', e.target.value)}
              className="form-input"
            />
          </div>
        </div>
      </div>

      {/* Broadcast Settings */}
      <div className="card mb-6">
        <h3 className="font-semibold mb-4">Broadcast Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="form-label">Schedule Text</label>
            <input
              type="text"
              value={config.schedule}
              onChange={(e) => handleChange('schedule', e.target.value)}
              className="form-input"
              placeholder="Watch live: Mon | Wed | Fri at 4 PM"
            />
          </div>
          <div>
            <label className="form-label">Current Live Video ID</label>
            <input
              type="text"
              value={config.currentVideoId}
              onChange={(e) => handleChange('currentVideoId', e.target.value)}
              className="form-input"
              placeholder="YouTube video ID for the live embed"
            />
            <p className="text-xs text-muted mt-1">
              This is the video shown on the homepage. Update this for each new live stream.
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="card mb-6">
        <h3 className="font-semibold mb-4">Social Media Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="form-label">Twitter/X</label>
            <input
              type="text"
              value={config.social.twitter}
              onChange={(e) => handleSocialChange('twitter', e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">YouTube</label>
            <input
              type="text"
              value={config.social.youtube}
              onChange={(e) => handleSocialChange('youtube', e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Instagram</label>
            <input
              type="text"
              value={config.social.instagram}
              onChange={(e) => handleSocialChange('instagram', e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">LinkedIn</label>
            <input
              type="text"
              value={config.social.linkedin}
              onChange={(e) => handleSocialChange('linkedin', e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Spotify</label>
            <input
              type="text"
              value={config.social.spotify}
              onChange={(e) => handleSocialChange('spotify', e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Apple Podcasts</label>
            <input
              type="text"
              value={config.social.applePodcasts}
              onChange={(e) => handleSocialChange('applePodcasts', e.target.value)}
              className="form-input"
            />
          </div>
          <div className="md:col-span-2">
            <label className="form-label">WhatsApp Community</label>
            <input
              type="text"
              value={config.social.whatsapp}
              onChange={(e) => handleSocialChange('whatsapp', e.target.value)}
              className="form-input"
            />
          </div>
        </div>
      </div>

      {/* Contact & Legal */}
      <div className="card mb-6">
        <h3 className="font-semibold mb-4">Contact & Legal</h3>
        <div className="space-y-4">
          <div>
            <label className="form-label">Contact Email</label>
            <input
              type="email"
              value={config.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Copyright Text</label>
            <input
              type="text"
              value={config.copyright}
              onChange={(e) => handleChange('copyright', e.target.value)}
              className="form-input"
            />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="p-4 border border-white/20 bg-white/5">
        <h4 className="font-semibold mb-2">How to Update Settings</h4>
        <ol className="text-sm text-muted space-y-1 list-decimal list-inside">
          <li>Modify the settings above as needed</li>
          <li>Click &quot;Export JSON&quot; to download the updated config</li>
          <li>Replace the file at <code className="bg-white/10 px-1">src/data/site-config.json</code></li>
          <li>Commit and push the changes to update your site</li>
        </ol>
      </div>
    </div>
  );
}
