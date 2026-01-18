import { siteConfig } from '@/lib/data';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <div className="prose prose-invert space-y-6 text-muted">
        <p>
          Last updated: January 2025
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using {siteConfig.siteName}, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Use License</h2>
        <p>
          Permission is granted to temporarily view the materials (information or content) on {siteConfig.siteName} for personal, non-commercial use only.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Disclaimer</h2>
        <p>
          The materials on {siteConfig.siteName} are provided on an &apos;as is&apos; basis. {siteConfig.siteName} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Limitations</h2>
        <p>
          In no event shall {siteConfig.siteName} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {siteConfig.siteName}.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Content</h2>
        <p>
          All content including podcast episodes, videos, and articles are the intellectual property of {siteConfig.siteName} and its creators. Unauthorized reproduction, distribution, or use of this content is prohibited.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Guest Appearances</h2>
        <p>
          Opinions expressed by guests on our shows are their own and do not necessarily reflect the views of {siteConfig.siteName} or its hosts.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Modifications</h2>
        <p>
          {siteConfig.siteName} may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. Contact</h2>
        <p>
          For any questions regarding these terms, please contact us at{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-white underline">
            {siteConfig.email}
          </a>
        </p>
      </div>
    </div>
  );
}
