'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, HandHeart, Building, ShoppingBag, Calendar, DollarSign, Target, Globe } from 'lucide-react'
import DonateModal from '@/components/DonateModal'
import ScrollArrows from '@/components/ScrollArrows'

// Note: Since this is a client component, metadata should be handled by the layout or parent

const GetInvolvedPage = () => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)

  const handleDonateClick = () => {
    setIsDonateModalOpen(true)
  }
  const opportunities = [
    {
      icon: Users,
      title: 'Volunteer with Us',
      description: 'Join our community of passionate volunteers making a direct impact through hands-on environmental conservation activities.',
      features: [
        'Tree planting campaigns',
        'Community clean-up drives',
        'Educational program support',
        'Event organization assistance'
      ],
      action: 'Become a Volunteer',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Building,
      title: 'Corporate Partnership',
      description: 'Partner with us to create shared value through CSR initiatives that align with your sustainability goals and ESG commitments.',
      features: [
        'Custom CSR program design',
        'Employee engagement activities',
        'Sustainability reporting support',
        'Brand visibility opportunities'
      ],
      action: 'Partner With Us',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      isDonateAction: true
    },
    {
      icon: ShoppingBag,
      title: 'Purchase Eco-Merchandise',
      description: 'Support our mission while promoting environmental awareness with our branded, eco-conscious products.',
      features: [
        'Reusable water bottles',
        'Eco-friendly tote bags',
        'Sustainable T-shirts',
        'Environmental awareness stationery'
      ],
      action: 'Shop Now',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Calendar,
      title: 'Event Sponsorship',
      description: 'Gain visibility and demonstrate your commitment to sustainability by sponsoring our impactful events and programs.',
      features: [
        'Tree planting events',
        'Environmental festivals',
        'Youth leadership workshops',
        'Community clean-up drives'
      ],
      action: 'Sponsor Events',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: DollarSign,
      title: 'Financial Support',
      description: 'Make a direct contribution to our environmental and social impact through financial donations.',
      features: [
        'Monthly giving programs',
        'Project-specific funding',
        'Equipment and materials',
        'Scholarship opportunities'
      ],
      action: 'Donate Now',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      isDonateAction: true
    },
    {
      icon: Target,
      title: 'Skills-Based Volunteering',
      description: 'Contribute your professional expertise to help us grow our impact and organizational capacity.',
      features: [
        'Marketing and communications',
        'Web and graphic design',
        'Financial management',
        'Strategic planning'
      ],
      action: 'Offer Skills',
      color: 'text-teal-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20'
    }
  ]

  const impactAreas = [
    {
      icon: Globe,
      title: 'Environmental Impact',
      stats: ['50,000+ trees planted', '200+ clean-up drives', '15 tons of waste recycled'],
      color: 'text-green-500'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      stats: ['10,000+ youth trained', '100+ communities reached', '500+ jobs created'],
      color: 'text-blue-500'
    },
    {
      icon: HandHeart,
      title: 'Social Transformation',
      stats: ['25+ partnerships formed', '1000+ volunteers engaged', '50+ events organized'],
      color: 'text-purple-500'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-youth-empowerment">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get Involved
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the movement of action and hope. Together, we can create a cleaner, 
            greener, and more sustainable future for Africa.
          </motion.p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Your Impact Matters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how your involvement can contribute to our growing impact across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-gray-50 dark:bg-gray-800 mb-6">
                  <area.icon className={`w-8 h-8 ${area.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {area.title}
                </h3>
                
                <div className="space-y-3">
                  {area.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-gray-600 dark:text-gray-300">
                      {stat}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ways to Get Involved
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose how you&apos;d like to contribute to our mission of environmental stewardship 
              and community empowerment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <div className={`inline-flex p-4 rounded-xl ${opportunity.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <opportunity.icon className={`w-8 h-8 ${opportunity.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {opportunity.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {opportunity.description}
                </p>
                
                <div className="space-y-2 mb-8">
                  {opportunity.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${opportunity.color.replace('text-', 'bg-')}`}></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {opportunity.isDonateAction ? (
                  <button
                    onClick={handleDonateClick}
                    className={`inline-flex items-center justify-center w-full px-6 py-3 ${opportunity.color.replace('text-', 'bg-').replace('-500', '-600')} hover:${opportunity.color.replace('text-', 'bg-').replace('-500', '-700')} text-white font-semibold rounded-lg transition-colors duration-300 cursor-pointer`}
                  >
                    {opportunity.action}
                  </button>
                ) : (
                  <a
                    href="/contact"
                    className={`inline-flex items-center justify-center w-full px-6 py-3 ${opportunity.color.replace('text-', 'bg-').replace('-500', '-600')} hover:${opportunity.color.replace('text-', 'bg-').replace('-500', '-700')} text-white font-semibold rounded-lg transition-colors duration-300`}
                  >
                    {opportunity.action}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-conservation relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Take Action?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Every action counts in our mission to create a sustainable future. 
              Join thousands of others who are already making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
              >
                Start Your Journey
              </a>
              <a 
                href="/about" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Donate Modal */}
      <DonateModal 
        isOpen={isDonateModalOpen} 
        onClose={() => setIsDonateModalOpen(false)} 
      />
      
      {/* Scroll Arrows */}
      <ScrollArrows />
    </div>
  )
}

export default GetInvolvedPage
