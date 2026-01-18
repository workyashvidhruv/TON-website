import { siteConfig } from '@/lib/data';

interface SocialLinksProps {
  compact?: boolean;
}

export default function SocialLinks({ compact = false }: SocialLinksProps) {
  const links = [
    { name: 'X', url: siteConfig.social.twitter, icon: 'X' },
    { name: 'YouTube', url: siteConfig.social.youtube, icon: 'YT' },
    { name: 'Instagram', url: siteConfig.social.instagram, icon: 'IG' },
    { name: 'LinkedIn', url: siteConfig.social.linkedin, icon: 'LI' },
    { name: 'Spotify', url: siteConfig.social.spotify, icon: 'SP' },
    { name: 'Apple', url: siteConfig.social.applePodcasts, icon: 'AP' },
  ];

  const displayLinks = compact ? links.slice(0, 4) : links;

  return (
    <div className="flex items-center gap-3">
      {displayLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 border border-white/50 flex items-center justify-center text-xs hover:bg-white hover:text-black transition-all"
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
