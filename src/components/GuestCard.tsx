import Image from 'next/image';
import Link from 'next/link';
import { Guest, Episode } from '@/lib/types';

interface GuestCardProps {
  guest: Guest;
  episode?: Episode;
}

export default function GuestCard({ guest, episode }: GuestCardProps) {
  return (
    <div className="card">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Guest Image */}
        <div className="w-24 h-24 md:w-32 md:h-32 border border-white/30 flex-shrink-0 bg-white/5 flex items-center justify-center">
          {guest.image && guest.image !== '/images/guests/placeholder.jpg' ? (
            <Image
              src={guest.image}
              alt={guest.name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-2xl font-bold text-muted">
              {guest.name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>

        {/* Guest Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{guest.name}</h3>
          <p className="text-sm text-muted mb-2">
            {guest.title}, {guest.company}
          </p>

          {episode && (
            <div className="mb-3">
              <p className="text-xs text-muted">Episode #{episode.number}</p>
              <p className="text-sm">{episode.title}</p>
            </div>
          )}

          <p className="text-sm text-muted mb-3 line-clamp-2">{guest.bio}</p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {guest.twitter && (
              <a
                href={guest.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-white/50 px-2 py-1 hover:bg-white hover:text-black transition-all"
              >
                X
              </a>
            )}
            {guest.linkedin && (
              <a
                href={guest.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-white/50 px-2 py-1 hover:bg-white hover:text-black transition-all"
              >
                LinkedIn
              </a>
            )}
            {episode && (
              <a
                href={`https://youtube.com/watch?v=${episode.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-white/50 px-2 py-1 hover:bg-white hover:text-black transition-all"
              >
                Watch Episode
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
