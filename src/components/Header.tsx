'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { Clock } from './Clock';
import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header className="border-b border-white/20 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 border border-white flex items-center justify-center font-bold text-lg">
              TON
            </div>
            <span className="text-sm font-medium hidden sm:block">
              {siteConfig.siteName}
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/guests" className="hover:opacity-70 transition-opacity">
              Guests
            </Link>
            <Link href="/admin" className="hover:opacity-70 transition-opacity">
              Admin
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Clock />
            <SocialLinks compact />
          </div>
        </div>
      </div>
    </header>
  );
}
