import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Images */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
          style={{ backgroundImage: 'url(/bg-home-mobile.webp)' }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
          style={{ backgroundImage: 'url(/bg-home.webp)' }}
        />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          {/* YouTube Video Embed - Full Width */}
          <div className="w-full">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/8Lrw7-TBfRk?rel=0&modestbranding=1"
                title="The Offline Network"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Scroll to explore + Schedule */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
            <p className="text-[10px] lg:text-xs uppercase tracking-[0.3em] text-muted mb-4">
              scroll to explore
            </p>
            <p className="text-xs lg:text-sm uppercase tracking-wider">
              Watch live: Mon | Wed | Fri at 4 PM
            </p>
          </div>
        </div>
      </section>

      {/* Info Section - Two Column */}
      <section className="py-12 lg:py-20 border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Info Text */}
            <div>
              <p className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted mb-4">
                INFO.
              </p>
              <h2 className="text-base lg:text-xl font-medium leading-relaxed">
                Real-time signal for India&apos;s tech world; India&apos;s tech, decoded as it happens.
              </h2>
            </div>

            {/* Right - Buttons */}
            <div className="flex items-center justify-start lg:justify-end gap-3">
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Made Possible By Section */}
      <section className="py-8 lg:py-12 border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <p className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted text-center mb-8">
            made possible by
          </p>
          <div className="flex items-center justify-center">
            {siteConfig.sponsors.map((sponsor, index) => (
              <div key={sponsor.name} className="flex items-center">
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 lg:px-8 hover:opacity-70 transition-opacity"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={40}
                    className="h-6 lg:h-10 w-auto"
                  />
                </a>
                {index < siteConfig.sponsors.length - 1 && (
                  <div className="w-px h-8 lg:h-12 bg-neutral-200 mx-2 lg:mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 lg:py-20 border-b border-neutral-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-lg lg:text-3xl font-medium uppercase leading-tight mb-8 max-w-4xl mx-auto">
            India&apos;s real tech pulse — unfiltered and on the clock.
          </h2>
          <p className="text-[10px] lg:text-xs uppercase tracking-wider text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
            THE OFFLINE NETWORK IS WHERE FOUNDERS, OPERATORS, AND VCS DECODE WHAT&apos;S REALLY HAPPENING — IN REAL TIME. NO PR. NO POSTURING. JUST SHARP, BUILDER-BRAINED TAKES ON WHAT MATTERS — FROM FUNDRAISES AND POLICY SHIFTS TO WHAT&apos;S BLOWING UP BEHIND THE SCENES.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Breakdown Section */}
      <section className="py-12 lg:py-20 border-b border-neutral-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm lg:text-lg font-medium uppercase leading-relaxed max-w-3xl mx-auto">
            We Break down news, tools, fundings, policies and trends with the people who actually build.
          </p>
        </div>
      </section>

      {/* Hosted By Section */}
      <section className="border-b border-neutral-200">
        {/* Hosted By Label */}
        <div className="border-b border-neutral-200 py-4">
          <p className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted text-center">
            hosted by
          </p>
        </div>

        {/* Hosts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Host 1 - Utsav */}
          <div className="border-b lg:border-b-0 lg:border-r border-neutral-200 py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Text - Left on desktop */}
                <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                  <h3 className="text-xl lg:text-3xl font-medium uppercase mb-2">
                    Utsav Somani
                  </h3>
                  <p className="text-[10px] lg:text-xs uppercase tracking-wider text-muted mb-6">
                    CEO - Offline
                  </p>
                  <a
                    href="https://twitter.com/utsavsomani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn inline-flex"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
                {/* Image - Right on desktop */}
                <div className="w-[200px] h-[250px] lg:w-[280px] lg:h-[350px] order-1 lg:order-2">
                  <Image
                    src="/hosts/utsav.png"
                    alt="Utsav Somani"
                    width={280}
                    height={350}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Host 2 - Dhruv */}
          <div className="py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8">
                {/* Text - Right on desktop */}
                <div className="flex-1 text-center lg:text-right order-2 lg:order-1">
                  <h3 className="text-xl lg:text-3xl font-medium uppercase mb-2">
                    Dhruv Sharma
                  </h3>
                  <p className="text-[10px] lg:text-xs uppercase tracking-wider text-muted mb-6">
                    CEO - AngelList India
                  </p>
                  <a
                    href="https://twitter.com/dhaborthy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn inline-flex"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
                {/* Image - Left on desktop */}
                <div className="w-[200px] h-[250px] lg:w-[280px] lg:h-[350px] order-1 lg:order-2">
                  <Image
                    src="/hosts/dhruv.png"
                    alt="Dhruv Sharma"
                    width={280}
                    height={350}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minds Behind the Mic Section */}
      <section className="py-12 lg:py-20 border-b border-neutral-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted mb-6">
            the Minds Behind the Mic
          </p>
          <h2 className="text-sm lg:text-lg font-medium uppercase leading-relaxed max-w-3xl mx-auto mb-8">
            FROM BREAKOUT FOUNDERS TO SHARP VCs — WE&apos;VE HAD THE PEOPLE SHAPING INDIA&apos;S TECH FUTURE ON THE SHOW.
          </h2>
          <Link href="/guests" className="btn-outline">
            View All Guests
          </Link>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Join WhatsApp Community
          </a>
        </div>
      </section>
    </div>
  );
}
