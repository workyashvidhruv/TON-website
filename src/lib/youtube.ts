// YouTube utility functions for extracting video information

export interface YouTubeVideoInfo {
  id: string;
  title: string;
  thumbnail: string;
  embedUrl: string;
}

export function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export function getYouTubeThumbnail(videoId: string, quality: 'default' | 'medium' | 'high' | 'max' = 'max'): string {
  const qualityMap = {
    default: 'default',
    medium: 'mqdefault',
    high: 'hqdefault',
    max: 'maxresdefault',
  };

  return `https://i.ytimg.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}

export function getYouTubeEmbedUrl(videoId: string, autoplay: boolean = false): string {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
  });

  if (autoplay) {
    params.set('autoplay', '1');
  }

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

export function getVideoInfoFromId(videoId: string): YouTubeVideoInfo {
  return {
    id: videoId,
    title: '', // Would need API call to get actual title
    thumbnail: getYouTubeThumbnail(videoId),
    embedUrl: getYouTubeEmbedUrl(videoId),
  };
}
