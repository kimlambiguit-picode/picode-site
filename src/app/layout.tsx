import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { site } from '@/lib/site';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackgroundEffects } from '@/components/background-effects';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: site.name,
              description: site.description,
              url: site.url,
              email: site.contact.email,
              telephone: site.contact.phone,
              address: {
                '@type': 'PostalAddress',
                streetAddress: site.contact.address.street,
                addressLocality: site.contact.address.city,
                addressRegion: site.contact.address.state,
                postalCode: site.contact.address.zip,
                addressCountry: site.contact.address.country,
              },
              sameAs: [
                site.socials.linkedin
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <BackgroundEffects />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
