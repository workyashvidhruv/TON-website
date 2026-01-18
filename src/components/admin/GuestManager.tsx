'use client';

import { useState } from 'react';
import { guests, episodes } from '@/lib/data';
import { Guest } from '@/lib/types';

export default function GuestManager() {
  const [guestList, setGuestList] = useState<Guest[]>(guests);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Partial<Guest>>({
    name: '',
    title: '',
    company: '',
    bio: '',
    image: '',
    twitter: '',
    linkedin: '',
    episodes: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newGuest: Guest = {
      id: isEditing || `guest-${String(guestList.length + 1).padStart(3, '0')}`,
      name: formData.name || '',
      title: formData.title || '',
      company: formData.company || '',
      bio: formData.bio || '',
      image: formData.image || '/images/guests/placeholder.jpg',
      twitter: formData.twitter || '',
      linkedin: formData.linkedin || '',
      episodes: formData.episodes || [],
    };

    if (isEditing) {
      setGuestList(guestList.map(g => g.id === isEditing ? newGuest : g));
    } else {
      setGuestList([...guestList, newGuest]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      title: '',
      company: '',
      bio: '',
      image: '',
      twitter: '',
      linkedin: '',
      episodes: [],
    });
    setIsEditing(null);
    setShowForm(false);
  };

  const editGuest = (guest: Guest) => {
    setFormData(guest);
    setIsEditing(guest.id);
    setShowForm(true);
  };

  const deleteGuest = (id: string) => {
    if (confirm('Are you sure you want to delete this guest?')) {
      setGuestList(guestList.filter(g => g.id !== id));
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(guestList, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'guests.json';
    link.click();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Guests ({guestList.length})</h2>
        <div className="flex gap-2">
          <button onClick={exportData} className="btn-outline text-sm">
            Export JSON
          </button>
          <button onClick={() => setShowForm(true)} className="btn-primary text-sm">
            + Add Guest
          </button>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="card mb-8">
          <h3 className="text-lg font-semibold mb-4">
            {isEditing ? 'Edit Guest' : 'Add New Guest'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="form-label">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="form-input"
                  placeholder="Acme Inc"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Job Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="form-input"
                  placeholder="CEO & Founder"
                  required
                />
              </div>
              <div>
                <label className="form-label">Profile Image URL</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="form-input"
                  placeholder="/images/guests/john-doe.jpg"
                />
              </div>
            </div>

            <div>
              <label className="form-label">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="form-input h-24"
                placeholder="Brief biography..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Twitter URL</label>
                <input
                  type="text"
                  value={formData.twitter}
                  onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                  className="form-input"
                  placeholder="https://twitter.com/username"
                />
              </div>
              <div>
                <label className="form-label">LinkedIn URL</label>
                <input
                  type="text"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="form-input"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
            </div>

            <div>
              <label className="form-label">Link to Episodes</label>
              <div className="flex flex-wrap gap-2">
                {episodes.map((episode) => (
                  <label key={episode.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.episodes?.includes(episode.id)}
                      onChange={(e) => {
                        const newEpisodes = e.target.checked
                          ? [...(formData.episodes || []), episode.id]
                          : (formData.episodes || []).filter(id => id !== episode.id);
                        setFormData({ ...formData, episodes: newEpisodes });
                      }}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Ep #{episode.number}: {episode.title}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button type="submit" className="btn-primary">
                {isEditing ? 'Update Guest' : 'Add Guest'}
              </button>
              <button type="button" onClick={resetForm} className="btn-outline">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Guests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {guestList.map((guest) => (
          <div key={guest.id} className="card">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-16 h-16 border border-white/30 bg-white/5 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-muted">
                  {guest.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{guest.name}</h3>
                <p className="text-xs text-muted">{guest.title}</p>
                <p className="text-xs text-muted">{guest.company}</p>
                <p className="text-xs text-muted mt-1">
                  {guest.episodes.length} episode{guest.episodes.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => editGuest(guest)}
                className="text-xs border border-white/50 px-2 py-1 hover:bg-white hover:text-black transition-all"
              >
                Edit
              </button>
              <button
                onClick={() => deleteGuest(guest.id)}
                className="text-xs border border-red-500 text-red-500 px-2 py-1 hover:bg-red-500 hover:text-white transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {guestList.length === 0 && (
        <div className="card text-center py-12">
          <p className="text-muted">No guests yet. Add your first guest!</p>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 p-4 border border-white/20 bg-white/5">
        <h4 className="font-semibold mb-2">How to Update Guests</h4>
        <ol className="text-sm text-muted space-y-1 list-decimal list-inside">
          <li>Add or edit guests using the form above</li>
          <li>Click &quot;Export JSON&quot; to download the updated data</li>
          <li>Replace the file at <code className="bg-white/10 px-1">src/data/guests.json</code></li>
          <li>Commit and push the changes to update your site</li>
        </ol>
      </div>
    </div>
  );
}
