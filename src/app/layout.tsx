
import type { Metadata } from 'next';
import { Inter, Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const siteConfig = {
  name: 'AWS Ascend',
  description: 'Join us for AWS Ascend, a deep dive into AWS, Data Lakes, and Generative AI with the Q CLI. A hands-on workshop hosted by AWS Community Builders & CloudX-SRMIST.',
  url: 'https://aws-ascend.cloudx.community',
  ogImage: 'https://aws-ascend.cloudx.community/og.png',
  author: 'CloudX-SRMIST',
  keywords: 'AWS, Cloud Computing, Data Lake, Generative AI, Amazon Q, Workshop, SRMIST, CloudX',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: `@${siteConfig.author}`,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          'font-body antialiased',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
