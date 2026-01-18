import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section
        className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center"
        style={{
          backgroundImage: 'url(/images/bg-home.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Info Section */}
            <div>
              <p className="section-label mb-4">INFO.</p>
              <h1 className="text-hero-sm lg:text-hero font-medium uppercase mb-6 leading-tight">
                {siteConfig.tagline}
              </h1>
              <p className="text-sm lg:text-base text-muted mb-8 max-w-md">
                {siteConfig.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made Possible By Section */}
      <section className="py-8 lg:py-12 border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <p className="section-label text-center mb-6">MADE POSSIBLE BY</p>
          <div className="flex items-center justify-center gap-2 md:gap-6">
            {siteConfig.sponsors.map((sponsor, index) => (
              <div key={sponsor.name} className="flex items-center">
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-8 py-2 hover:opacity-70 transition-opacity"
                >
                  {sponsor.logo && sponsor.logo !== '/images/sponsors/placeholder.png' ? (
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={120}
                      height={40}
                      className="h-6 md:h-8 w-auto"
                    />
                  ) : (
                    <span className="text-sm md:text-base font-medium uppercase">{sponsor.name}</span>
                  )}
                </a>
                {index < siteConfig.sponsors.length - 1 && (
                  <div className="sponsor-divider hidden md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Livestream Section */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <p className="section-label">LIVESTREAMED ON</p>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  title="YouTube"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  title="X"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
            <YouTubeEmbed videoId={siteConfig.currentVideoId} title="The Offline Network Live" />
          </div>
        </div>
      </section>

      {/* Hosted By Section */}
      <section className="py-8 lg:py-12 border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <p className="section-label text-center mb-8">HOSTED BY</p>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {siteConfig.hosts.map((host, index) => (
              <div
                key={host.name}
                className={`host-section py-8 lg:py-12 ${index === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 lg:gap-8`}>
                  {/* Host Image */}
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border border-neutral-200 flex-shrink-0">
                    <Image
                      src={host.image}
                      alt={host.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Host Info */}
                  <div className={`text-center ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <h3 className="text-section-sm lg:text-section font-medium uppercase mb-2">
                      {host.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-muted uppercase tracking-wider mb-4">
                      {host.role}
                    </p>
                    <a
                      href={host.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn inline-flex"
                      title="X"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-8 lg:py-12 border-t border-neutral-200">
        <div className="container mx-auto px-4 text-center">
          <p className="section-label mb-4">JOIN THE CONVERSATION</p>
          <h2 className="text-section-sm lg:text-section font-medium uppercase mb-6">
            Be Part of Our Community
          </h2>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Join WhatsApp Community
          </a>
        </div>
      </section>
    </div>
  );
}
