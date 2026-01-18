import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-white/20 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left - Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-white flex items-center justify-center font-bold text-sm">
                TON
              </div>
              <span className="text-sm">{siteConfig.siteName}</span>
            </div>
            <p className="text-xs text-muted">{siteConfig.copyright}</p>
          </div>

          {/* Center - Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="hover:opacity-70 transition-opacity text-muted">
              Privacy
            </Link>
            <Link href="/terms" className="hover:opacity-70 transition-opacity text-muted">
              Terms
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="hover:opacity-70 transition-opacity text-muted">
              Contact
            </a>
          </div>

          {/* Right - Social */}
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
