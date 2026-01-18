import siteConfigData from '@/data/site-config.json';
import episodesData from '@/data/episodes.json';
import guestsData from '@/data/guests.json';
import { SiteConfig, Episode, Guest } from './types';

export const siteConfig: SiteConfig = siteConfigData as SiteConfig;
export const episodes: Episode[] = episodesData as Episode[];
export const guests: Guest[] = guestsData as Guest[];

export function getGuestById(id: string): Guest | undefined {
  return guests.find(guest => guest.id === id);
}

export function getEpisodeById(id: string): Episode | undefined {
  return episodes.find(episode => episode.id === id);
}

export function getGuestsForEpisode(episodeId: string): Guest[] {
  const episode = getEpisodeById(episodeId);
  if (!episode) return [];
  return episode.guests.map(guestId => getGuestById(guestId)).filter(Boolean) as Guest[];
}

export function getEpisodesForGuest(guestId: string): Episode[] {
  return episodes.filter(episode => episode.guests.includes(guestId));
}

export function getLatestEpisode(): Episode | undefined {
  return [...episodes].sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )[0];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
