'use client'

import { motion } from 'framer-motion'
import { TreePine, Users, Recycle, Award } from 'lucide-react'

const StatsSection = () => {
  const stats = [
    {
      icon: TreePine,
      number: '50,000+',
      label: 'Trees Planted',
      description: 'Contributing to Kenya\'s 15-billion tree target',
      color: 'text-green-500'
    },
    {
      icon: Users,
      number: '5,000+',
      label: 'Youth Empowered',
      description: 'Young leaders trained in climate action',
      color: 'text-blue-500'
    },
    {
      icon: Recycle,
      number: '150+',
      label: 'Clean-up Drives',
      description: 'Community clean-up initiatives completed',
      color: 'text-yellow-500'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Partnerships',
      description: 'Collaborations with organizations',
      color: 'text-purple-500'
    }
  ]

  return (
    <section className="py-20 bg-conservation relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Measurable results from our commitment to environmental stewardship and community empowerment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-xl font-semibold text-gray-200 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {stat.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
