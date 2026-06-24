'use client'

import { motion } from 'framer-motion'
import { Recycle, TreePine, Users, GraduationCap, Heart, Leaf } from 'lucide-react'
import Link from 'next/link'
import ScrollArrows from '@/components/ScrollArrows'

const WhatWeDoPage = () => {
  const focusAreas = [
    {
      icon: Recycle,
      title: 'Circular Economy and Waste Management',
      description: 'We promote innovative waste collection, segregation, recycling, and upcycling solutions that turn waste into economic opportunities and contribute to cleaner communities.',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: TreePine,
      title: 'Climate Action and Ecosystem Restoration',
      description: 'We restore ecosystems through tree growing, community clean-up campaigns, and nature-based solutions that build climate resilience and protect biodiversity.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Users,
      title: 'Green Jobs and Entrepreneurship',
      description: 'We empower youth and women with green skills, entrepreneurship opportunities, and sustainable livelihood solutions that create jobs and improve incomes.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      icon: GraduationCap,
      title: 'Environmental Education and Awareness',
      description: 'We inspire behavior change through environmental education, public engagement, schools programs, campaigns, and community outreach.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Leaf,
      title: 'Youth Leadership and Capacity Building',
      description: 'We nurture young changemakers and provide platforms that equip youth with leadership, communication, innovation, and problem-solving skills.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    {
      icon: Heart,
      title: 'Mental Health and Nature',
      description: 'We promote the connection between people and nature to improve wellbeing, resilience, and healthy communities.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-conservation">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What We Do
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming communities through circular economy solutions, climate action, green jobs, environmental education, and sustainable livelihoods.
          </motion.p>
        </div>
      </section>

      {/* Focus Areas */}
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
              Our Focus Areas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Through these six key areas, we create holistic solutions that address environmental and social challenges across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <div className={`inline-flex p-4 rounded-xl ${area.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className={`w-8 h-8 ${area.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 dark:bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of the movement transforming waste into wealth and building a sustainable future for people and the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
              >
                Get Involved
              </Link>
              <Link
                href="/partner"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ScrollArrows />
    </div>
  )
}

export default WhatWeDoPage
