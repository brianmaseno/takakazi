'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const FounderSection = () => {
  return (
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
            Meet Our Founder
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Visionary leadership driving transformative environmental change across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl">
                <Image
                  src="/founder.jpg"
                  alt="George Ofunja - Founder of Taka Kazi Africa"
                  width={400}
                  height={500}
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Founder Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-green-500 opacity-20" />
              <blockquote className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white italic leading-relaxed">
                "We believe waste is not just waste—it is opportunity. Our vision is to create 
                a cleaner, greener Africa where people and planet thrive together."
              </blockquote>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                George Ofunja
              </h3>
              <p className="text-lg text-green-600 dark:text-green-400 font-semibold mb-4">
                Founder & Environmental Advocate
              </p>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                George Ofunja is an environmental conservation enthusiast, mentor, and youth advocate 
                who founded Taka Kazi Africa with a mission to transform waste into opportunity while 
                empowering communities across Africa.
              </p>
              <p>
                With deep expertise in environmental stewardship, climate action, and sustainable 
                development, George leads initiatives that bridge the gap between environmental 
                protection and economic empowerment, particularly focusing on youth engagement 
                and community-led solutions.
              </p>
              <p>
                His work spans multiple areas including circular economy innovation, mental health 
                advocacy through nature engagement, and building partnerships across sectors to 
                create lasting environmental and social impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Environmental Stewardship', 'Youth Mentorship', 'Climate Advocacy', 'Community Development'].map((expertise) => (
                <span
                  key={expertise}
                  className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium"
                >
                  {expertise}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FounderSection
