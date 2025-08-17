import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import StatsSection from '@/components/StatsSection'
import InteractiveFeatures from '@/components/InteractiveFeatures'
import SDGSection from '@/components/SDGSection'
import Gallery from '@/components/Gallery'
import ProjectShowcase from '@/components/ProjectShowcase'
import GoalsSection from '@/components/GoalsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <InteractiveFeatures />
      <FeaturesSection />
      <ProjectShowcase />
      <Gallery />
      <SDGSection />
      <StatsSection />
      <GoalsSection />
    </>
  );
}
