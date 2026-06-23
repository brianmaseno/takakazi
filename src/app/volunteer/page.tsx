'use client'

import { motion } from 'framer-motion'
import { Users, TreePine, Recycle, Megaphone, GraduationCap, Leaf, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ScrollArrows from '@/components/ScrollArrows'

const VolunteerPage = () => {
  const activities = [
    {
      icon: TreePine,
      title: 'Tree Planting Activities',
      description: 'Join our community tree planting events and help restore degraded ecosystems while combating climate change.',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Recycle,
      title: 'Community Clean-Ups',
      description: 'Participate in neighborhood, beach, and river clean-up campaigns to reduce pollution and create cleaner communities.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Megaphone,
      title: 'Environmental Campaigns',
      description: 'Help raise awareness about environmental issues through campaigns, social media, and community outreach.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      icon: Users,
      title: 'Youth Programs',
      description: 'Mentor and support young environmental champions through our Green Bees Movement and leadership programs.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Leaf,
      title: 'Climate Action Projects',
      description: 'Contribute to initiatives that address climate change through practical, community-driven solutions.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    {
      icon: GraduationCap,
      title: 'Awareness & Education Initiatives',
      description: 'Support environmental education in schools and communities, inspiring behavior change and sustainable practices.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-conservation">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex p-6 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Users className="w-12 h-12 text-green-400" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Become a Green Champion
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join our growing community of volunteers and changemakers. Together, we can build cleaner, greener, and healthier communities.
          </motion.p>
        </div>
      </section>

      {/* Volunteer Activities */}
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
              Ways to Volunteer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose how you would like to contribute your time, skills, and energy to our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <div className={`inline-flex p-4 rounded-xl ${activity.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className={`w-8 h-8 ${activity.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Sign up to become a volunteer and start making an impact in your community today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              <span>Sign Up to Volunteer</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <ScrollArrows />
    </div>
  )
}

export default VolunteerPage
