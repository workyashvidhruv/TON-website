import { siteConfig } from '@/lib/data';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-invert space-y-6 text-muted">
        <p>
          Last updated: January 2025
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
        <p>
          {siteConfig.siteName} is a podcast and live show platform. We may collect information you provide when you:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Subscribe to our newsletter</li>
          <li>Join our WhatsApp community</li>
          <li>Contact us via email</li>
          <li>Interact with our social media accounts</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Send you updates about new episodes</li>
          <li>Respond to your inquiries</li>
          <li>Improve our content and services</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Third-Party Services</h2>
        <p>
          Our website uses third-party services including:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>YouTube for video embedding</li>
          <li>Spotify for podcast distribution</li>
          <li>Apple Podcasts for podcast distribution</li>
        </ul>
        <p>
          These services have their own privacy policies that govern their use of your data.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Cookies</h2>
        <p>
          We use minimal cookies necessary for website functionality. Third-party embeds (like YouTube) may set their own cookies.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-white underline">
            {siteConfig.email}
          </a>
        </p>
      </div>
    </div>
  );
}
