import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-mono relative w-full overflow-x-hidden">
      {/* Hero Section with Background */}
      <section className="relative w-full min-h-screen flex flex-col">
        {/* Background Images */}
        <Image
          src="/bg-home-mobile.webp"
          alt=""
          fill
          className="object-cover object-center lg:hidden"
          priority
        />
        <Image
          src="/bg-home.webp"
          alt=""
          fill
          className="object-cover object-center hidden lg:block"
          priority
        />

        {/* Video Container - No side padding, full width */}
        <div className="relative z-10 w-full">
          <div className="relative w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/8Lrw7-TBfRk?rel=0&modestbranding=1"
              title="The Offline Network"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>

        {/* Scroll to explore */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-8">
          <p className="text-[10px] lg:text-[12px] uppercase tracking-[0.3em] text-muted animate-pulse">
            scroll to explore
          </p>
        </div>
      </section>

      {/* Watch Live Section */}
      <section className="w-full py-4 border-b border-foreground">
        <p className="text-[12px] lg:text-[14px] uppercase tracking-wider text-center">
          Watch live: Mon | Wed | Fri at 4 PM
        </p>
      </section>

      {/* Info Section - Two Column Grid */}
      <section className="w-full pt-12 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Left Column - Info Text */}
            <div className="flex flex-col gap-4">
              <p className="text-[10px] lg:text-[14px] uppercase tracking-[0.2em] text-muted">
                INFO.
              </p>
              <p className="text-[14px] lg:text-[16px] font-medium uppercase leading-relaxed">
                Real-time signal for India&apos;s tech world;<br />
                India&apos;s tech, decoded as it happens.
              </p>
            </div>

            {/* Right Column - Buttons */}
            <div className="flex items-center gap-2 lg:justify-end">
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 text-[12px] lg:text-[14px] lowercase tracking-wider border border-foreground rounded-[40px] hover:bg-foreground hover:text-background transition-all duration-300"
              >
                youtube
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 text-[12px] lg:text-[14px] lowercase tracking-wider border border-foreground rounded-[40px] hover:bg-foreground hover:text-background transition-all duration-300"
              >
                x
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Made Possible By Section */}
      <section className="w-full border-t border-b border-foreground py-6 mt-4">
        <div className="container mx-auto px-4">
          <p className="text-[10px] lg:text-[14px] uppercase tracking-[0.2em] text-muted text-center mb-6">
            made possible by
          </p>
          <div className="flex items-center justify-center gap-2 md:gap-6">
            {siteConfig.sponsors.map((sponsor, index) => (
              <div key={sponsor.name} className="flex items-center gap-2 md:gap-6">
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={48}
                    className="h-8 md:h-12 w-auto"
                  />
                </a>
                {index < siteConfig.sponsors.length - 1 && (
                  <div className="w-[1px] h-6 md:h-9 bg-neutral-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Headline Section */}
      <section className="w-full py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[16px] sm:text-[24px] lg:text-[40px] font-medium uppercase leading-tight">
            We Break down news, tools,<br />
            fundings, policies and trends with<br />
            the people who actually build.
          </h2>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="w-full py-8 border-t border-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] lg:text-[12px] uppercase tracking-[0.15em] text-muted leading-relaxed max-w-4xl mx-auto">
            THE OFFLINE NETWORK IS WHERE FOUNDERS, OPERATORS, AND VCS DECODE WHAT&apos;S REALLY HAPPENING — IN REAL TIME. NO PR. NO POSTURING. JUST SHARP, BUILDER-BRAINED TAKES ON WHAT MATTERS — FROM FUNDRAISES AND POLICY SHIFTS TO WHAT&apos;S BLOWING UP BEHIND THE SCENES.
          </p>
        </div>
      </section>

      {/* Livestreamed On Section */}
      <section className="w-full py-6 border-t border-foreground">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4">
          <p className="text-[12px] lg:text-[14px] uppercase tracking-wider">
            Livestreamed on
          </p>
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-foreground rounded-[10px] lg:rounded-[14px] hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-foreground rounded-[10px] lg:rounded-[14px] hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Hosted By Section */}
      <section className="w-full">
        {/* Hosted By Label */}
        <div className="border-t border-b border-foreground py-4 lg:py-6">
          <p className="text-[10px] lg:text-[18px] uppercase tracking-[0.2em] text-center">
            hosted by
          </p>
        </div>

        {/* Hosts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Host 1 - Utsav: Text LEFT, Image RIGHT on desktop */}
          <div className="border-b border-foreground lg:border-b-0 lg:border-r py-8 lg:py-12">
            <div className="px-4 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                {/* Image - Shows first on mobile */}
                <div className="w-[200px] h-[250px] lg:w-[280px] lg:h-[350px] flex-shrink-0 order-1 lg:order-2">
                  <Image
                    src="/hosts/utsav.png"
                    alt="Utsav Somani"
                    width={280}
                    height={350}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Text - Shows second on mobile, first on desktop */}
                <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                  <h3 className="text-[18px] lg:text-[35px] font-medium uppercase mb-2">
                    utsav somani
                  </h3>
                  <p className="text-[10px] lg:text-[14px] uppercase tracking-wider text-muted mb-4">
                    CEO - Offline
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <a
                      href="https://twitter.com/utsavsomani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-foreground rounded-[10px] hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/utsavsomani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-foreground rounded-[10px] hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Host 2 - Dhruv: Image LEFT, Text RIGHT on desktop (reversed) */}
          <div className="py-8 lg:py-12">
            <div className="px-4 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                {/* Image - Shows first on mobile and desktop */}
                <div className="w-[200px] h-[250px] lg:w-[280px] lg:h-[350px] flex-shrink-0">
                  <Image
                    src="/hosts/dhruv.png"
                    alt="Dhruv Sharma"
                    width={280}
                    height={350}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Text */}
                <div className="flex-1 text-center lg:text-right">
                  <h3 className="text-[18px] lg:text-[35px] font-medium uppercase mb-2">
                    dhruv sharma
                  </h3>
                  <p className="text-[10px] lg:text-[14px] uppercase tracking-wider text-muted mb-4">
                    CEO - AngelList India
                  </p>
                  <div className="flex items-center justify-center lg:justify-end gap-2">
                    <a
                      href="https://twitter.com/dhaborthy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-foreground rounded-[10px] hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/dhruvsharma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-foreground rounded-[10px] hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minds Behind the Mic Section */}
      <section className="w-full border-t border-foreground py-12 lg:py-16">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4 text-center">
          <p className="text-[10px] lg:text-[14px] uppercase tracking-[0.2em] text-muted">
            the Minds Behind the Mic
          </p>
          <h2 className="text-[16px] lg:text-[32px] font-medium uppercase leading-[22px] lg:leading-[38px] max-w-4xl">
            FROM BREAKOUT FOUNDERS TO SHARP VCs — WE&apos;VE HAD THE PEOPLE SHAPING INDIA&apos;S TECH FUTURE ON THE SHOW.
          </h2>
          <Link
            href="/guests"
            className="inline-flex items-center gap-2 px-6 py-2 text-[12px] lg:text-[14px] lowercase tracking-wider border border-foreground rounded-[40px] hover:bg-foreground hover:text-background transition-all duration-300 mt-4"
          >
            explore all guests
          </Link>
        </div>
      </section>

      {/* Join WhatsApp Community Section */}
      <section className="w-full border-t border-foreground py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-[12px] lg:text-[14px] lowercase tracking-wider bg-foreground text-background border border-foreground rounded-[40px] hover:bg-background hover:text-foreground transition-all duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            join our whatsapp community
          </a>
        </div>
      </section>
    </main>
  );
}
