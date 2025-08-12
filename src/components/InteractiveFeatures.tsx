'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Leaf, Recycle, Users, Award, TreePine, Heart, Star } from 'lucide-react'

const InteractiveFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Smart Eco-Tracking",
      description: "AI-powered system to track your environmental impact in real-time",
      color: "from-green-400 to-emerald-600",
      bgImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Waste-to-Wealth Calculator",
      description: "See how much value you can create from your recycling efforts",
      color: "from-blue-400 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Impact Hub",
      description: "Connect with local eco-warriors and join conservation efforts",
      color: "from-purple-400 to-pink-600",
      bgImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Green Achievements",
      description: "Earn badges and rewards for your environmental contributions",
      color: "from-yellow-400 to-orange-600",
      bgImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Virtual Tree Planting",
      description: "Plant trees virtually and see them grow in our digital forest",
      color: "from-green-500 to-teal-600",
      bgImage: "https://images.unsplash.com/photo-1545224144-b38cd309ef69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wellness Tracker",
      description: "Monitor how nature activities improve your mental health",
      color: "from-red-400 to-rose-600",
      bgImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Revolutionary Eco-Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of environmental conservation with our cutting-edge digital tools
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${feature.bgImage})` }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div className="flex items-center justify-between">
                    <motion.div
                      animate={{
                        rotate: hoveredCard === index ? 360 : 0,
                        scale: hoveredCard === index ? 1.2 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className="p-3 bg-white/20 rounded-full backdrop-blur-sm"
                    >
                      {feature.icon}
                    </motion.div>
                    
                    <motion.div
                      animate={{
                        scale: hoveredCard === index ? [1, 1.2, 1] : 1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Star className="w-6 h-6 text-yellow-300" />
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 text-sm font-medium hover:bg-white/30 transition-colors"
                  >
                    Explore Feature
                  </motion.button>
                </div>
                
                {/* Floating particles effect */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0], 
                          scale: [0, 1, 0],
                          x: Math.random() * 300 - 150,
                          y: Math.random() * 300 - 150
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full"
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50K+", label: "Trees Planted", icon: <TreePine className="w-6 h-6" /> },
            { number: "100+", label: "Communities", icon: <Users className="w-6 h-6" /> },
            { number: "500T", label: "Waste Recycled", icon: <Recycle className="w-6 h-6" /> },
            { number: "15+", label: "SDG Goals", icon: <Award className="w-6 h-6" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-2 text-green-600 dark:text-green-400">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveFeatures
