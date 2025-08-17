'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const GoalsSection = () => {
  const goals = [
    {
      id: 1,
      image: '/gallery/categories/goal1.jpg',
      alt: 'Sustainable Development Goal 1'
    },
    {
      id: 3,
      image: '/gallery/categories/goal3.jpg',
      alt: 'Sustainable Development Goal 3'
    },
    
    {
      id: 2,
      image: '/gallery/categories/goal2.jpg',
      alt: 'Sustainable Development Goal 2'
    },
    {
      id: 4,
      image: '/gallery/categories/goal4.jpg',
      alt: 'Sustainable Development Goal 4'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {goals.map((goal) => (
            <motion.div
              key={goal.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={goal.image}
                  alt={goal.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default GoalsSection