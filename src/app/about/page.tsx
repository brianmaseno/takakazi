import { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us | Taka Kazi Africa - Environmental Conservation & Youth Empowerment',
  description: 'Learn about Taka Kazi Africa\'s mission to transform waste into opportunity while empowering communities across Africa. Discover our vision, values, and story of environmental stewardship.',
  keywords: [
    'about taka kazi africa',
    'environmental organization africa',
    'youth empowerment kenya',
    'sustainable development africa',
    'waste management organization',
    'environmental stewardship',
    'community empowerment',
    'african conservation'
  ],
  openGraph: {
    title: 'About Taka Kazi Africa - Our Mission & Vision',
    description: 'Discover how Taka Kazi Africa transforms waste into opportunity while empowering communities across Africa through environmental conservation and youth empowerment.',
    images: ['/gallery/aboutus.jpg'],
  },
  alternates: {
    canonical: 'https://takakazi.africa/about'
  }
}

export default function AboutPage() {
  return <AboutContent />
}
