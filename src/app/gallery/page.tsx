import { Metadata } from 'next'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'Gallery | Taka Kazi Africa - Environmental Conservation in Action',
  description: 'Explore our photo gallery showcasing environmental conservation activities, tree planting campaigns, youth empowerment programs, and community impact across Africa.',
  keywords: [
    'taka kazi africa gallery',
    'environmental conservation photos',
    'tree planting africa',
    'youth empowerment gallery',
    'community projects africa',
    'conservation activities',
    'environmental impact photos',
    'sustainable development images'
  ],
  openGraph: {
    title: 'Gallery - Taka Kazi Africa Environmental Conservation Photos',
    description: 'See our environmental conservation work in action through photos of tree planting, community empowerment, and sustainability projects across Africa.',
    images: ['/gallery/best.jpg'],
  },
  alternates: {
    canonical: 'https://takakazi.africa/gallery'
  }
}

export default function GalleryPage() {
  return (
    <main className="pt-20">
      <Gallery />
    </main>
  )
}
