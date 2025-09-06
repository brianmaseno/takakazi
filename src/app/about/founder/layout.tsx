import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'George Otieno Ogola - Founder of Taka Kazi Africa | Environmental Leader',
  description: 'Meet George Otieno Ogola, the visionary founder of Taka Kazi Africa. Environmental conservation leader who has planted 50,000+ trees, recycled 500+ tons of waste, and empowered thousands of young people across Africa.',
  keywords: [
    'George Otieno Ogola',
    'Taka Kazi Africa founder',
    'environmental leader Africa',
    'sustainability expert Kenya',
    'youth empowerment advocate',
    'tree planting Kenya',
    'waste management Africa',
    'environmental conservation leader',
    'climate action advocate Africa',
    'sustainable development Kenya'
  ],
  openGraph: {
    title: 'George Otieno Ogola - Founder of Taka Kazi Africa | Environmental Leader',
    description: 'Meet the visionary behind Taka Kazi Africa. George Otieno Ogola has led environmental initiatives that planted 50,000+ trees and empowered thousands across Africa.',
    images: ['/founder.jpg'],
    url: 'https://takakaziafrica.org/about/founder'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'George Otieno Ogola - Founder of Taka Kazi Africa',
    description: 'Environmental leader who founded Taka Kazi Africa. 50,000+ trees planted, 500+ tons recycled across Africa.',
    images: ['/founder.jpg']
  }
}

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}