'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play, Sparkles, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import Link from 'next/link'

interface HeroSectionProps {
  onOpenDonateModal?: () => void
}

const HeroSection = ({ onOpenDonateModal }: HeroSectionProps) => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const floatingElements = [
    { icon: <Sparkles className="w-6 h-6 text-green-400" />, delay: 0, x: "10%", y: "20%" },
    { icon: <ArrowDown className="w-6 h-6 text-blue-400" />, delay: 0.5, x: "80%", y: "30%" },
    { icon: <Play className="w-6 h-6 text-emerald-400" />, delay: 1, x: "20%", y: "70%" },
    { icon: <ArrowRight className="w-6 h-6 text-cyan-400" />, delay: 1.5, x: "70%", y: "60%" },
    { icon: <Sparkles className="w-6 h-6 text-green-300" />, delay: 2, x: "90%", y: "80%" },
  ]

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ 
          y, 
          opacity,
          backgroundImage: "url('/gallery/best.jpg')"
        }}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-green-900/30 to-blue-900/50" />
      
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0.8, 1],
            scale: [0, 1.2, 0.8, 1],
            y: [0, -20, 0, -10, 0]
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute pointer-events-none z-10 hidden lg:block"
          style={{ left: element.x, top: element.y }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-20 text-center text-white w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.2] tracking-tight"
        >
          <span className="text-white block">
            Transforming Waste into Wealth
          </span>
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent block mt-2">
            for People and Planet
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl mb-10 text-gray-200 font-light max-w-4xl mx-auto leading-relaxed"
        >
          <span className="block">
            Taka Kazi Africa is a youth-led social enterprise and environmental movement committed to building cleaner, greener, and more resilient communities through circular economy solutions, climate action, green jobs, environmental education, and sustainable livelihoods.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-16"
        >
          {onOpenDonateModal && (
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(234, 88, 12, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenDonateModal}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Donate</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          )}
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 148, 58, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Shop</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <Link href="/get-involved">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Join the Movement</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <Link href="/partner">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto"
        >
          {[
            { number: "50,000+", label: "Trees Planted" },
            { number: "42+", label: "Tons Waste Recovered" },
            { number: "1,000+", label: "Youth Empowered" },
            { number: "100+", label: "Communities Reached" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Particle Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${10 + (i * 15)}%`,
              y: `${20 + (i * 10)}%`,
              opacity: 0
            }}
            animate={{ 
              y: [`${20 + (i * 10)}%`, `${10 + (i * 10)}%`],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.8
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
