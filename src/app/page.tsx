'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Leaf, Users, Globe } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import StatsSection from '@/components/StatsSection'
import SDGSection from '@/components/SDGSection'
import Gallery from '@/components/Gallery'
import ProjectShowcase from '@/components/ProjectShowcase'
import GoalsSection from '@/components/GoalsSection'
import StrategicFocusSection from '@/components/StrategicFocusSection'
import DonateModal from '@/components/DonateModal'
import ScrollArrows from '@/components/ScrollArrows'
import Link from 'next/link'

export default function Home() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)

  const whyReasons = [
    {
      icon: RecycleIcon,
      title: 'Waste is Wealth',
      description: 'We believe that what others discard holds the potential to create jobs, restore environments, and transform communities.',
      color: 'text-green-500'
    },
    {
      icon: Users,
      title: 'Youth are Solution Providers',
      description: 'We see young people not as beneficiaries but as active drivers of change, innovation, and sustainable development.',
      color: 'text-blue-500'
    },
    {
      icon: Globe,
      title: 'Communities are Agents of Change',
      description: 'Lasting transformation comes from within. We empower communities to lead their own environmental and social development.',
      color: 'text-purple-500'
    },
    {
      icon: Heart,
      title: 'Nature and Human Wellbeing are Connected',
      description: 'A healthy environment is the foundation for healthy, prosperous, and resilient communities.',
      color: 'text-red-500'
    },
    {
      icon: Leaf,
      title: 'Sustainability Begins with Action',
      description: 'Big visions start with small, consistent actions. Every tree planted, every piece of waste recovered, every young person empowered matters.',
      color: 'text-emerald-500'
    },
    {
      icon: Users,
      title: 'Together, We Can Create a Better Future',
      description: 'Collaboration amplifies impact. By working together, we can build a cleaner, greener, and more sustainable Africa.',
      color: 'text-orange-500'
    }
  ]

  function RecycleIcon({ className }: { className?: string }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/>
        <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/>
        <path d="m14 16-3 3 3 3"/>
        <path d="M8.293 13.596 7.196 9.5 3.1 10.598"/>
        <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/>
        <path d="m13.378 9.633 4.096 1.098 1.097-4.096"/>
      </svg>
    )
  }

  return (
    <>
      <HeroSection onOpenDonateModal={() => setIsDonateModalOpen(true)} />
      <FeaturesSection />
      <ProjectShowcase />
      <Gallery preview />
      
      {/* Why Taka Kazi Africa Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Taka Kazi Africa
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Because we believe in the power of community-driven change and sustainable solutions for people and the planet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gray-50 dark:bg-gray-700 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className={`w-8 h-8 ${reason.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/get-involved"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Join Our Movement</span>
              <Leaf className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

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
