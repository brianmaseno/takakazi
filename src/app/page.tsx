import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import FounderSection from '@/components/FounderSection'
import StatsSection from '@/components/StatsSection'
import InteractiveFeatures from '@/components/InteractiveFeatures'
import SDGSection from '@/components/SDGSection'
import Gallery from '@/components/Gallery'

export default function Home() {
  return (
    <>
      <HeroSection />
      <InteractiveFeatures />
      <FeaturesSection />
      <Gallery />
      <SDGSection />
      <StatsSection />
      <FounderSection />
    </>
  );
}
