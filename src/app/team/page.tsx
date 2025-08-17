import { Metadata } from 'next'
import TeamSection from '@/components/TeamSection'

export const metadata: Metadata = {
  title: 'Meet Our Team | Taka Kazi Africa - Environmental Leaders & Change Makers',
  description: 'Meet the dedicated team behind Taka Kazi Africa\'s environmental conservation and youth empowerment mission. Learn about our leaders, activists, and change makers.',
  keywords: [
    'taka kazi africa team',
    'environmental leaders africa',
    'conservation team',
    'youth empowerment leaders',
    'environmental activists africa',
    'sustainability experts',
    'community leaders',
    'george otieno ogola'
  ],
  openGraph: {
    title: 'Meet Our Team - Taka Kazi Africa Environmental Leaders',
    description: 'Discover the passionate team driving environmental conservation and youth empowerment across Africa through innovative sustainability programs.',
    images: ['/gallery/team.jpg'],
  },
  alternates: {
    canonical: 'https://takakazi.africa/team'
  }
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <TeamSection />
    </main>
  )
}