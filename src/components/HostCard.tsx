import Image from 'next/image';
import { Host } from '@/lib/types';

interface HostCardProps {
  host: Host;
}

export default function HostCard({ host }: HostCardProps) {
  return (
    <div className="card text-center">
      {/* Host Image */}
      <div className="w-24 h-24 mx-auto mb-4 border border-white/30 bg-white/5 flex items-center justify-center">
        {host.image && host.image !== '/images/hosts/placeholder.jpg' ? (
          <Image
            src={host.image}
            alt={host.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-xl font-bold text-muted">
            {host.name.split(' ').map(n => n[0]).join('')}
          </span>
        )}
      </div>

      {/* Host Info */}
      <h3 className="font-semibold mb-1">{host.name}</h3>
      <p className="text-sm text-muted mb-3">{host.role}</p>

      {/* Social Link */}
      {host.twitter && (
        <a
          href={host.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs border border-white/50 px-3 py-1 hover:bg-white hover:text-black transition-all inline-block"
        >
          @{host.twitter.split('/').pop()}
        </a>
      )}
    </div>
  );
}
