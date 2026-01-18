export interface Host {
  name: string;
  role: string;
  image: string;
  twitter: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

export interface SocialLinks {
  twitter: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  spotify: string;
  applePodcasts: string;
  whatsapp: string;
}

export interface SiteConfig {
  siteName: string;
  tagline: string;
  description: string;
  brandPromise: string;
  schedule: string;
  timezone: string;
  email: string;
  copyright: string;
  currentVideoId: string;
  social: SocialLinks;
  hosts: Host[];
  sponsors: Sponsor[];
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  description: string;
  videoId: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
  guests: string[];
  isLive: boolean;
  tags: string[];
}

export interface Guest {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
  twitter: string;
  linkedin: string;
  episodes: string[];
}
