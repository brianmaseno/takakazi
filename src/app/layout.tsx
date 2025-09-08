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
  title: "Taka Kazi Africa | Environmental Conservation NGO Kenya | George Ofunja Founder",
  description: "Taka Kazi Africa is Kenya's leading environmental conservation NGO founded by George Ofunja. We transform waste into opportunity across Africa with 50,000+ trees planted, 500+ tons recycled. Join our climate action movement for sustainable development in Kenya and Africa.",
  keywords: [
    "Taka Kazi Africa",
    "takakazi africa",
    "taka kazi africa",
    "TAKA KAZI AFRICA",
    "TakaKazi Africa",
    "environmental NGO Kenya",
    "George Ofunja",
    "George Ofunja founder",
    "environmental conservation Kenya",
    "sustainability Kenya Africa",
    "climate action Kenya",
    "waste management Kenya",
    "tree planting Kenya",
    "youth empowerment Africa",
    "environmental education Kenya",
    "green initiatives Africa",
    "circular economy Kenya",
    "carbon footprint reduction Africa",
    "plastic waste recycling Kenya",
    "environmental stewardship Africa",
    "conservation projects Kenya",
    "SDG implementation Kenya",
    "community development Kenya",
    "environmental activism Africa",
    "sustainable development Kenya",
    "Kenya environmental organizations",
    "Africa environmental conservation",
    "takakazi.africa",
    "takakaziafrica.org"
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
    title: "Taka Kazi Africa | George Ofunja Environmental Conservation Kenya | Tree Planting Waste Management",
    description: "Founded by environmental leader George Ofunja, Taka Kazi Africa leads climate action across Africa. 50,000+ trees planted, 500+ tons recycled. Join our environmental movement in Kenya and beyond.",
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
    title: "Taka Kazi Africa - Founded by George Ofunja | Environmental Leader Africa",
    description: "Founded by George Ofunja, transforming waste into opportunity across Africa. 50,000+ trees planted. Join our climate action movement!",
    creator: "@TakaKaziAfrica",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [
      { url: "/logo-180.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/logo-32.png"
      },
      {
        rel: "icon",
        type: "image/png", 
        sizes: "16x16",
        url: "/logo-16.png"
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
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-180.png" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="msapplication-TileImage" content="/logo-180.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Taka Kazi Africa" />
        <meta name="application-name" content="Taka Kazi Africa" />
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
