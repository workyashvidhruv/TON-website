'use client';

import { useState } from 'react';
import { episodes, guests } from '@/lib/data';
import { Episode } from '@/lib/types';
import { extractVideoId, getYouTubeThumbnail } from '@/lib/youtube';

export default function EpisodeManager() {
  const [episodeList, setEpisodeList] = useState<Episode[]>(episodes);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Partial<Episode>>({
    title: '',
    description: '',
    videoId: '',
    duration: '',
    tags: [],
    guests: [],
    isLive: false,
  });

  const handleVideoUrlChange = (url: string) => {
    const videoId = extractVideoId(url);
    if (videoId) {
      setFormData({
        ...formData,
        videoId,
        thumbnail: getYouTubeThumbnail(videoId),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEpisode: Episode = {
      id: isEditing || `ep-${String(episodeList.length + 1).padStart(3, '0')}`,
      number: isEditing
        ? episodeList.find(ep => ep.id === isEditing)?.number || episodeList.length + 1
        : episodeList.length + 1,
      title: formData.title || '',
      description: formData.description || '',
      videoId: formData.videoId || '',
      thumbnail: formData.thumbnail || '',
      publishedAt: formData.publishedAt || new Date().toISOString(),
      duration: formData.duration || '00:00',
      guests: formData.guests || [],
      isLive: formData.isLive || false,
      tags: formData.tags || [],
    };

    if (isEditing) {
      setEpisodeList(episodeList.map(ep => ep.id === isEditing ? newEpisode : ep));
    } else {
      setEpisodeList([...episodeList, newEpisode]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      videoId: '',
      duration: '',
      tags: [],
      guests: [],
      isLive: false,
    });
    setIsEditing(null);
    setShowForm(false);
  };

  const editEpisode = (episode: Episode) => {
    setFormData(episode);
    setIsEditing(episode.id);
    setShowForm(true);
  };

  const deleteEpisode = (id: string) => {
    if (confirm('Are you sure you want to delete this episode?')) {
      setEpisodeList(episodeList.filter(ep => ep.id !== id));
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(episodeList, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'episodes.json';
    link.click();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Episodes ({episodeList.length})</h2>
        <div className="flex gap-2">
          <button onClick={exportData} className="btn-outline text-sm">
            Export JSON
          </button>
          <button onClick={() => setShowForm(true)} className="btn-primary text-sm">
            + Add Episode
          </button>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="card mb-8">
          <h3 className="text-lg font-semibold mb-4">
            {isEditing ? 'Edit Episode' : 'Add New Episode'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Episode Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="form-input"
                  placeholder="The Future of AI in India"
                  required
                />
              </div>
              <div>
                <label className="form-label">YouTube URL or Video ID</label>
                <input
                  type="text"
                  value={formData.videoId}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.includes('youtube') || value.includes('youtu.be')) {
                      handleVideoUrlChange(value);
                    } else {
                      setFormData({ ...formData, videoId: value });
                    }
                  }}
                  className="form-input"
                  placeholder="https://youtube.com/watch?v=..."
                  required
                />
              </div>
            </div>

            <div>
              <label className="form-label">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="form-input h-24"
                placeholder="Episode description..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="form-label">Duration (mm:ss)</label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="form-input"
                  placeholder="45:30"
                />
              </div>
              <div>
                <label className="form-label">Published Date</label>
                <input
                  type="datetime-local"
                  value={formData.publishedAt ? formData.publishedAt.slice(0, 16) : ''}
                  onChange={(e) => setFormData({ ...formData, publishedAt: e.target.value })}
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">Tags (comma separated)</label>
                <input
                  type="text"
                  value={formData.tags?.join(', ')}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()) })}
                  className="form-input"
                  placeholder="startups, AI, funding"
                />
              </div>
            </div>

            <div>
              <label className="form-label">Select Guests</label>
              <div className="flex flex-wrap gap-2">
                {guests.map((guest) => (
                  <label key={guest.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.guests?.includes(guest.id)}
                      onChange={(e) => {
                        const newGuests = e.target.checked
                          ? [...(formData.guests || []), guest.id]
                          : (formData.guests || []).filter(id => id !== guest.id);
                        setFormData({ ...formData, guests: newGuests });
                      }}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{guest.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isLive"
                checked={formData.isLive}
                onChange={(e) => setFormData({ ...formData, isLive: e.target.checked })}
                className="w-4 h-4"
              />
              <label htmlFor="isLive" className="text-sm cursor-pointer">Mark as Live</label>
            </div>

            {/* Preview */}
            {formData.videoId && (
              <div>
                <label className="form-label">Thumbnail Preview</label>
                <img
                  src={getYouTubeThumbnail(formData.videoId)}
                  alt="Thumbnail"
                  className="w-64 border border-white/20"
                />
              </div>
            )}

            <div className="flex gap-2">
              <button type="submit" className="btn-primary">
                {isEditing ? 'Update Episode' : 'Add Episode'}
              </button>
              <button type="button" onClick={resetForm} className="btn-outline">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Episodes List */}
      <div className="space-y-4">
        {episodeList.map((episode) => (
          <div key={episode.id} className="card flex flex-col md:flex-row gap-4">
            {/* Thumbnail */}
            <div className="w-full md:w-48 flex-shrink-0">
              <img
                src={episode.thumbnail || getYouTubeThumbnail(episode.videoId)}
                alt={episode.title}
                className="w-full aspect-video object-cover border border-white/20"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">
                    Episode #{episode.number}: {episode.title}
                  </h3>
                  <p className="text-sm text-muted mt-1 line-clamp-2">{episode.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs text-muted">Duration: {episode.duration}</span>
                    <span className="text-xs text-muted">|</span>
                    <span className="text-xs text-muted">Guests: {episode.guests.length}</span>
                    {episode.isLive && (
                      <>
                        <span className="text-xs text-muted">|</span>
                        <span className="text-xs text-red-500">LIVE</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => editEpisode(episode)}
                    className="text-sm border border-white/50 px-2 py-1 hover:bg-white hover:text-black transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEpisode(episode.id)}
                    className="text-sm border border-red-500 text-red-500 px-2 py-1 hover:bg-red-500 hover:text-white transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {episodeList.length === 0 && (
        <div className="card text-center py-12">
          <p className="text-muted">No episodes yet. Add your first episode!</p>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 p-4 border border-white/20 bg-white/5">
        <h4 className="font-semibold mb-2">How to Update Episodes</h4>
        <ol className="text-sm text-muted space-y-1 list-decimal list-inside">
          <li>Add or edit episodes using the form above</li>
          <li>Click &quot;Export JSON&quot; to download the updated data</li>
          <li>Replace the file at <code className="bg-white/10 px-1">src/data/episodes.json</code></li>
          <li>Commit and push the changes to update your site</li>
        </ol>
      </div>
    </div>
  );
}
