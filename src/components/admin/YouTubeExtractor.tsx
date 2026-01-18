'use client';

import { useState } from 'react';
import { extractVideoId, getYouTubeThumbnail, getYouTubeEmbedUrl } from '@/lib/youtube';

interface ExtractedInfo {
  id: string;
  thumbnail: string;
  embedUrl: string;
  watchUrl: string;
}

export default function YouTubeExtractor() {
  const [url, setUrl] = useState('');
  const [extractedInfo, setExtractedInfo] = useState<ExtractedInfo | null>(null);
  const [error, setError] = useState('');

  const handleExtract = () => {
    setError('');
    setExtractedInfo(null);

    const videoId = extractVideoId(url);
    if (!videoId) {
      setError('Could not extract video ID. Please enter a valid YouTube URL.');
      return;
    }

    setExtractedInfo({
      id: videoId,
      thumbnail: getYouTubeThumbnail(videoId),
      embedUrl: getYouTubeEmbedUrl(videoId),
      watchUrl: `https://youtube.com/watch?v=${videoId}`,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">YouTube Video Extractor</h2>

      <p className="text-muted mb-6">
        Paste a YouTube URL to extract the video ID and get embed information.
        Use this when adding new episodes.
      </p>

      {/* Input */}
      <div className="card mb-6">
        <label className="form-label">YouTube URL</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="form-input flex-1"
            placeholder="https://www.youtube.com/watch?v=..."
          />
          <button onClick={handleExtract} className="btn-primary">
            Extract
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </div>

      {/* Results */}
      {extractedInfo && (
        <div className="card">
          <h3 className="font-semibold mb-4">Extracted Information</h3>

          {/* Preview */}
          <div className="mb-6">
            <label className="form-label">Thumbnail Preview</label>
            <img
              src={extractedInfo.thumbnail}
              alt="Video Thumbnail"
              className="w-full max-w-md border border-white/20"
            />
          </div>

          {/* Video ID */}
          <div className="mb-4">
            <label className="form-label">Video ID</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={extractedInfo.id}
                readOnly
                className="form-input flex-1 bg-white/5"
              />
              <button
                onClick={() => copyToClipboard(extractedInfo.id)}
                className="btn-outline text-sm"
              >
                Copy
              </button>
            </div>
            <p className="text-xs text-muted mt-1">
              Use this in the &quot;videoId&quot; field when adding episodes
            </p>
          </div>

          {/* Thumbnail URL */}
          <div className="mb-4">
            <label className="form-label">Thumbnail URL (Max Quality)</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={extractedInfo.thumbnail}
                readOnly
                className="form-input flex-1 bg-white/5"
              />
              <button
                onClick={() => copyToClipboard(extractedInfo.thumbnail)}
                className="btn-outline text-sm"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Embed URL */}
          <div className="mb-4">
            <label className="form-label">Embed URL</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={extractedInfo.embedUrl}
                readOnly
                className="form-input flex-1 bg-white/5"
              />
              <button
                onClick={() => copyToClipboard(extractedInfo.embedUrl)}
                className="btn-outline text-sm"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Watch URL */}
          <div className="mb-4">
            <label className="form-label">Watch URL</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={extractedInfo.watchUrl}
                readOnly
                className="form-input flex-1 bg-white/5"
              />
              <button
                onClick={() => copyToClipboard(extractedInfo.watchUrl)}
                className="btn-outline text-sm"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Embed Preview */}
          <div>
            <label className="form-label">Video Preview</label>
            <div className="video-container">
              <iframe
                src={extractedInfo.embedUrl}
                title="Video Preview"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Supported Formats */}
      <div className="mt-8 p-4 border border-white/20 bg-white/5">
        <h4 className="font-semibold mb-2">Supported URL Formats</h4>
        <ul className="text-sm text-muted space-y-1 list-disc list-inside">
          <li>https://www.youtube.com/watch?v=VIDEO_ID</li>
          <li>https://youtu.be/VIDEO_ID</li>
          <li>https://www.youtube.com/embed/VIDEO_ID</li>
          <li>Just the video ID (11 characters)</li>
        </ul>
      </div>
    </div>
  );
}
