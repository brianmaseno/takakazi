'use client'

import { motion } from 'framer-motion'
import { Mic, Play, Headphones, Share2, ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import ScrollArrows from '@/components/ScrollArrows'

const PodcastPage = () => {
  const episodes = [
    {
      title: 'The Future of Waste Management in Africa',
      date: 'June 2026',
      duration: '45 min',
      description: 'Exploring innovative approaches to waste management and how communities are turning trash into treasure.',
      category: 'Sustainability'
    },
    {
      title: 'Youth Leadership in Climate Action',
      date: 'May 2026',
      duration: '38 min',
      description: 'Young leaders share their experiences and insights on driving climate action in their communities.',
      category: 'Youth'
    },
    {
      title: 'Mental Health and Nature Connection',
      date: 'April 2026',
      duration: '42 min',
      description: 'Discussing the powerful connection between mental wellbeing and spending time in nature.',
      category: 'Wellness'
    },
    {
      title: 'Green Entrepreneurship: Building Sustainable Businesses',
      date: 'March 2026',
      duration: '50 min',
      description: 'Entrepreneurs share how they are building successful businesses while protecting the environment.',
      category: 'Business'
    },
    {
      title: 'Community-Led Conservation Success Stories',
      date: 'February 2026',
      duration: '35 min',
      description: 'Inspiring stories of communities taking charge of environmental conservation and creating lasting impact.',
      category: 'Community'
    },
    {
      title: 'The Role of Education in Environmental Stewardship',
      date: 'January 2026',
      duration: '40 min',
      description: 'How environmental education is shaping the next generation of eco-conscious citizens and leaders.',
      category: 'Education'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-recycling">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex p-6 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Mic className="w-12 h-12 text-green-400" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Taka Speak Podcast
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Thought-provoking conversations on sustainability, climate action, youth leadership, innovation, and creating a better future for people and planet.
          </motion.p>
        </div>
      </section>

      {/* Episodes */}
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
              Latest Episodes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Listen. Learn. Inspire. Act. Tune in to our latest conversations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-green-100 dark:bg-green-900/30">
                    <Headphones className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                    {episode.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {episode.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {episode.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {episode.date}
                    </span>
                    <span className="flex items-center">
                      <Play className="w-4 h-4 mr-1" />
                      {episode.duration}
                    </span>
                  </div>
                  <button className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-800/30 transition-colors">
                    <Play className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Share2 className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be Our Guest
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Have a story to tell or expertise to share? Join us on the Taka Speak Podcast and inspire change.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <ScrollArrows />
    </div>
  )
}

export default PodcastPage
