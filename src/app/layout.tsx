import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Taka Kazi Africa - Clean. Conserve. Recycle. Empower.",
  description: "Transforming waste into opportunity while empowering communities across Africa to create a cleaner, greener, and more sustainable future.",
  keywords: "environmental conservation, sustainability, Africa, youth empowerment, climate action, waste management, circular economy",
  authors: [{ name: "Taka Kazi Africa" }],
  openGraph: {
    title: "Taka Kazi Africa - Environmental Conservation & Youth Empowerment",
    description: "Join our movement to transform waste into opportunity and build a sustainable future for Africa.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
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
