'use client';

import { getYouTubeEmbedUrl } from '@/lib/youtube';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  autoplay?: boolean;
}

export default function YouTubeEmbed({ videoId, title = 'Video', autoplay = false }: YouTubeEmbedProps) {
  const embedUrl = getYouTubeEmbedUrl(videoId, autoplay);

  return (
    <div className="video-container border border-white/20">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
