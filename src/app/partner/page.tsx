'use client'

import { motion } from 'framer-motion'
import { Building2, School, Users, Globe, Microscope, Heart, ArrowRight, Briefcase, Landmark, Newspaper } from 'lucide-react'
import Link from 'next/link'
import ScrollArrows from '@/components/ScrollArrows'

const PartnerPage = () => {
  const partnerCategories = [
    {
      icon: Landmark,
      title: 'Government Institutions',
      description: 'Partner with us to advance national environmental goals and sustainable development policies.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Building2,
      title: 'County Governments',
      description: 'Collaborate on local environmental initiatives, waste management, and community development programs.',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Briefcase,
      title: 'Private Sector Organizations',
      description: 'Align your CSR and ESG goals with impactful environmental and community programs.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: School,
      title: 'Schools and Universities',
      description: 'Engage students in environmental education, research, and hands-on conservation activities.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      icon: Globe,
      title: 'Development Partners',
      description: 'Join forces with international and local development organizations to scale our impact.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: Users,
      title: 'Civil Society Organizations',
      description: 'Strengthen collective advocacy and program delivery through strategic partnerships.',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      icon: Heart,
      title: 'Community Groups',
      description: 'Empower grassroots organizations and community-based groups to lead environmental change.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20'
    },
    {
      icon: Newspaper,
      title: 'Media Organizations',
      description: 'Amplify environmental messages and stories of impact through media partnerships.',
      color: 'text-teal-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20'
    },
    {
      icon: Microscope,
      title: 'Researchers and Innovators',
      description: 'Collaborate on research, innovation, and evidence-based solutions for environmental challenges.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-african-savanna">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Partner With Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let us create impact together. We welcome partnerships that accelerate sustainable development and create shared value for people and the planet.
          </motion.p>
        </div>
      </section>

      {/* Partner Categories */}
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
              Who We Partner With
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We believe in the power of collaboration. Together, we can accelerate sustainable development and create lasting impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <div className={`inline-flex p-4 rounded-xl ${category.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let us Create Impact Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you represent a government institution, private company, school, or community group, we would love to explore how we can work together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              <span>Start a Partnership</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <ScrollArrows />
    </div>
  )
}

export default PartnerPage
