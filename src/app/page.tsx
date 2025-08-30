'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import StatsSection from '@/components/StatsSection'
import InteractiveFeatures from '@/components/InteractiveFeatures'
import SDGSection from '@/components/SDGSection'
import Gallery from '@/components/Gallery'
import ProjectShowcase from '@/components/ProjectShowcase'
import GoalsSection from '@/components/GoalsSection'
import StrategicFocusSection from '@/components/StrategicFocusSection'
import DonateModal from '@/components/DonateModal'
import ScrollArrows from '@/components/ScrollArrows'

// Note: Since this is a client component, metadata is handled by the layout

export default function Home() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)

  return (
    <>
      <HeroSection onOpenDonateModal={() => setIsDonateModalOpen(true)} />
      <InteractiveFeatures />
      <FeaturesSection />
      <ProjectShowcase />
      <Gallery />
      <SDGSection />
      <StrategicFocusSection />
      <StatsSection />
      <GoalsSection />
      
      {/* Scroll Arrows */}
      <ScrollArrows />
      
      {/* Donate Modal */}
      <DonateModal 
        isOpen={isDonateModalOpen} 
        onClose={() => setIsDonateModalOpen(false)} 
      />
    </>
  );
}
