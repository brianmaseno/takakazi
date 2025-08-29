import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import Analytics from '@/components/Analytics'
import SEOOptimizer from '@/components/SEOOptimizer'

export const metadata: Metadata = {
  metadataBase: new URL('https://takakaziafrica.org'),
  title: "Taka Kazi Africa - Clean. Conserve. Recycle. Empower.",
  description: "Transforming waste into opportunity while empowering communities across Africa to create a cleaner, greener, and more sustainable future through environmental conservation and youth empowerment.",
  keywords: [
    "environmental conservation Africa",
    "sustainability Kenya",
    "youth empowerment",
    "climate action",
    "waste management",
    "circular economy",
    "tree planting",
    "community development",
    "green initiatives",
    "environmental education",
    "SDG goals",
    "carbon footprint reduction",
    "plastic waste recycling",
    "environmental stewardship",
    "conservation projects Africa"
  ],
  authors: [{ name: "Taka Kazi Africa", url: "https://takakaziafrica.org" }],
  creator: "Taka Kazi Africa",
  publisher: "Taka Kazi Africa",
  category: "Environmental Conservation",
  classification: "Non-Profit Organization",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Taka Kazi Africa - Environmental Conservation & Youth Empowerment",
    description: "Join our movement to transform waste into opportunity and build a sustainable future for Africa. 50,000+ trees planted, 500+ tons waste recycled.",
    siteName: "Taka Kazi Africa",
    url: "https://takakaziafrica.org",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Taka Kazi Africa Logo - Environmental Conservation Organization",
      },
      {
        url: "/gallery/best.jpg",
        width: 1200,
        height: 630,
        alt: "Taka Kazi Africa environmental conservation activities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taka Kazi Africa - Clean. Conserve. Recycle. Empower.",
    description: "Transforming waste into opportunity across Africa. Join our environmental conservation movement today!",
    creator: "@TakaKaziAfrica",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.png",
        color: "#16a34a"
      }
    ]
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://takakaziafrica.org",
    languages: {
      'en-US': 'https://takakaziafrica.org',
      'sw-KE': 'https://takakaziafrica.org/sw'
    }
  },
  verification: {
    google: "-RHGT-9sqamapfinMC9fo5clLsVBZQRCeDUPGTE9KTI",
    other: {
      "msvalidate.01": "your-bing-verification-code"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Taka Kazi Africa" />
        <meta name="format-detection" content="telephone=no" />
        <JsonLd />
        <Analytics gaId="G-WNQM8H5L8C" />
      </head>
      <body className="antialiased">
        <SEOOptimizer />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
