import { siteConfig, guests, getLatestEpisode, getGuestsForEpisode } from '@/lib/data';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import HostCard from '@/components/HostCard';
import GuestCard from '@/components/GuestCard';
import SponsorCard from '@/components/SponsorCard';

export default function Home() {
  const latestEpisode = getLatestEpisode();
  const featuredGuests = latestEpisode ? getGuestsForEpisode(latestEpisode.id) : guests.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video Embed */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="live-dot"></div>
              <span className="text-sm text-muted">{siteConfig.schedule}</span>
            </div>
            <YouTubeEmbed videoId={siteConfig.currentVideoId} title="The Offline Network Live" />
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {siteConfig.tagline}
            </h1>
            <p className="text-lg text-muted mb-6">
              {siteConfig.description}
            </p>
            <p className="text-sm border-l-2 border-white pl-4 text-muted">
              {siteConfig.brandPromise}
            </p>

            {/* Broadcast Platforms */}
            <div className="mt-8">
              <p className="text-xs text-muted mb-3">Watch us on:</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  YouTube
                </a>
                <a
                  href={siteConfig.social.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  Spotify
                </a>
                <a
                  href={siteConfig.social.applePodcasts}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  Apple Podcasts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made Possible By Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6 text-center">Made Possible By</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {siteConfig.sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>
      </section>

      {/* Hosted By Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6 text-center">Hosted By</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {siteConfig.hosts.map((host) => (
            <HostCard key={host.name} host={host} />
          ))}
        </div>
      </section>

      {/* Minds Behind the Mic Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Minds Behind the Mic</h2>
          <a href="/guests" className="text-sm text-muted hover:text-white transition-colors">
            View all guests →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredGuests.slice(0, 4).map((guest) => {
            const guestEpisodes = latestEpisode && guest.episodes.includes(latestEpisode.id)
              ? latestEpisode
              : undefined;
            return (
              <GuestCard key={guest.id} guest={guest} episode={guestEpisodes} />
            );
          })}
        </div>
      </section>

      {/* Join Community Section */}
      <section className="mb-16">
        <div className="card text-center py-12">
          <h2 className="text-xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-muted mb-6 max-w-md mx-auto">
            Connect with fellow tech enthusiasts and stay updated on upcoming episodes.
          </p>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Join WhatsApp Community
          </a>
        </div>
      </section>
    </div>
  );
}
