import Image from 'next/image';
import { Sponsor } from '@/lib/types';

interface SponsorCardProps {
  sponsor: Sponsor;
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card hover:bg-white/10 transition-all flex items-center justify-center p-6"
    >
      <div className="text-center">
        {sponsor.logo && sponsor.logo !== '/images/sponsors/placeholder.png' ? (
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={120}
            height={40}
            className="max-h-10 w-auto mx-auto"
          />
        ) : (
          <span className="text-lg font-semibold">{sponsor.name}</span>
        )}
      </div>
    </a>
  );
}
