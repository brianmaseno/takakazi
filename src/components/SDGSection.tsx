'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const SDGSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const sdgs = [
    {
      number: 1,
      title: "No Poverty",
      description: "Creating green jobs and eco-entrepreneurship opportunities",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-red-500 to-red-600"
    },
    {
      number: 2,
      title: "Zero Hunger",
      description: "Promoting climate-smart agriculture and reducing food waste",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      number: 3,
      title: "Good Health and Well-being",
      description: "Advancing healthcare access and mental health support",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-green-500 to-green-600"
    },
    {
      number: 4,
      title: "Quality Education",
      description: "Environmental education and green skills development",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: 5,
      title: "Gender Equality",
      description: "Equal participation in green economy initiatives",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-pink-500 to-pink-600"
    },
    {
      number: 6,
      title: "Clean Water and Sanitation",
      description: "Water conservation and pollution reduction",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      number: 7,
      title: "Affordable and Clean Energy",
      description: "Promoting renewable energy and efficiency",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      description: "Creating green jobs and sustainable industries",
      image: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: 9,
      title: "Industry, Innovation and Infrastructure",
      description: "Building resilient infrastructure with green technologies",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-orange-500 to-orange-600"
    },
    {
      number: 10,
      title: "Reduced Inequalities",
      description: "Promoting inclusion and equal opportunities",
      image: "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-pink-600 to-purple-600"
    },
    {
      number: 11,
      title: "Sustainable Cities and Communities",
      description: "Promoting eco-friendly and resilient cities",
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      number: 12,
      title: "Responsible Consumption and Production",
      description: "Encouraging recycling and sustainable production",
      image: "https://images.unsplash.com/photo-1565373674782-fab26e7d8320?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-yellow-600 to-amber-700"
    },
    {
      number: 13,
      title: "Climate Action",
      description: "Leading tree planting and carbon reduction initiatives",
      image: "https://images.unsplash.com/photo-1545224144-b38cd309ef69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-green-600 to-emerald-700"
    },
    {
      number: 14,
      title: "Life Below Water",
      description: "Protecting oceans and marine biodiversity",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-blue-600 to-blue-800"
    },
    {
      number: 15,
      title: "Life on Land",
      description: "Restoring forests and protecting biodiversity",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-emerald-500 to-green-700"
    },
    {
      number: 16,
      title: "Peace, Justice and Strong Institutions",
      description: "Strengthening governance and community safety",
      image: "https://images.unsplash.com/photo-1485774539563-4ba1a1cd0c86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-gray-700 to-gray-900"
    },
    {
      number: 17,
      title: "Partnerships for the Goals",
      description: "Strengthening global and local partnerships",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-indigo-600 to-purple-600"
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Aligned with UN{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Sustainable Development Goals
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our initiatives directly contribute to achieving the Global Goals for sustainable development
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {sdgs.map((sdg) => (
            <motion.div
              key={sdg.number}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* SDG Number Badge */}
              <div className={`absolute top-4 left-4 z-10 w-12 h-12 rounded-full bg-gradient-to-br ${sdg.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {sdg.number}
              </div>
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={sdg.image}
                  alt={sdg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {sdg.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {sdg.description}
                </p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Be Part of the Global Movement
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join us in creating a sustainable future and contributing to the achievement of all 17 SDGs through collective action.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About SDGs
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SDGSection
