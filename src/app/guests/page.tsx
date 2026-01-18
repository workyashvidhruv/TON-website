'use client';

import { useState, useMemo } from 'react';
import { guests, episodes, getEpisodesForGuest } from '@/lib/data';
import GuestCard from '@/components/GuestCard';

type SortOption = 'name' | 'recent' | 'episodes';

export default function GuestsPage() {
  const [sortBy, setSortBy] = useState<SortOption>('recent');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedGuests = useMemo(() => {
    let filtered = guests.filter(guest =>
      guest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guest.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guest.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortBy) {
      case 'name':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'recent':
        return filtered.sort((a, b) => {
          const aEpisodes = getEpisodesForGuest(a.id);
          const bEpisodes = getEpisodesForGuest(b.id);
          const aLatest = aEpisodes[0]?.publishedAt || '1970-01-01';
          const bLatest = bEpisodes[0]?.publishedAt || '1970-01-01';
          return new Date(bLatest).getTime() - new Date(aLatest).getTime();
        });
      case 'episodes':
        return filtered.sort((a, b) => b.episodes.length - a.episodes.length);
      default:
        return filtered;
    }
  }, [sortBy, searchQuery]);

  const lastUpdated = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Guests</h1>
        <p className="text-muted text-sm">Last updated: {lastUpdated}</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search guests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-muted">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="form-input w-auto"
          >
            <option value="recent">Most Recent</option>
            <option value="name">Name</option>
            <option value="episodes">Most Episodes</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted mb-6">
        {sortedGuests.length} guest{sortedGuests.length !== 1 ? 's' : ''}
      </p>

      {/* Guests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedGuests.map((guest) => {
          const guestEpisodes = getEpisodesForGuest(guest.id);
          const latestEpisode = guestEpisodes[0];
          return (
            <GuestCard
              key={guest.id}
              guest={guest}
              episode={latestEpisode}
            />
          );
        })}
      </div>

      {/* Empty state */}
      {sortedGuests.length === 0 && (
        <div className="card text-center py-12">
          <p className="text-muted">No guests found matching your search.</p>
        </div>
      )}
    </div>
  );
}
