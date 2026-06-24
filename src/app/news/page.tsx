'use client'

import { motion } from 'framer-motion'
import { Newspaper, Calendar, ArrowRight, Users, TreePine, Recycle, Heart } from 'lucide-react'
import Link from 'next/link'
import ScrollArrows from '@/components/ScrollArrows'

const NewsPage = () => {
  const stories = [
    {
      icon: TreePine,
      title: '50,000 Trees and Counting: Our Reforestation Journey',
      date: 'June 2026',
      excerpt: 'Celebrating a major milestone in our tree planting initiative across Kenya and beyond. Communities have come together to restore degraded landscapes and combat climate change.',
      category: 'Environment'
    },
    {
      icon: Users,
      title: 'Empowering 1,000+ Youth Through Green Skills Training',
      date: 'May 2026',
      excerpt: 'Our youth empowerment programs continue to equip young people with skills in waste management, circular economy, and sustainable entrepreneurship.',
      category: 'Youth'
    },
    {
      icon: Recycle,
      title: '42+ Tons of Waste Recovered: A Cleaner Kenya',
      date: 'April 2026',
      excerpt: 'Through community clean-up campaigns and innovative waste management solutions, we have recovered over 42 tons of waste from our environment.',
      category: 'Impact'
    },
    {
      icon: Heart,
      title: 'Green Bees Movement Expands to New Communities',
      date: 'March 2026',
      excerpt: 'Our flagship Green Bees Movement continues to grow, mobilizing young environmental champions in schools and communities across the country.',
      category: 'Initiatives'
    },
    {
      icon: Users,
      title: 'Rusinga Speaks: Young Voices, Powerful Messages',
      date: 'February 2026',
      excerpt: 'The Rusinga Speaks program is empowering young people through public speaking, leadership, and environmental advocacy.',
      category: 'Events'
    },
    {
      icon: TreePine,
      title: 'Partnering for a Greener Future: New Collaborations',
      date: 'January 2026',
      excerpt: 'We are excited to announce new partnerships with organizations committed to environmental conservation and sustainable development.',
      category: 'Partnerships'
    }
  ]

  return (
    <div>
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
            News & Stories
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay informed with the latest news, stories, campaigns, events, and impact updates from Taka Kazi Africa.
          </motion.p>
        </div>
      </section>

      {/* Stories Grid */}
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
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Read inspiring stories, explore our blogs, and discover how communities are transforming waste into opportunity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-green-50 dark:bg-green-900/20">
                      <story.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{story.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {story.excerpt}
                  </p>
                  <span className="inline-flex items-center text-green-600 dark:text-green-400 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Newspaper className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Have a Story to Share?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We love sharing stories of impact and transformation. Reach out to us with your story ideas or to get involved.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <ScrollArrows />
    </div>
  )
}

export default NewsPage
