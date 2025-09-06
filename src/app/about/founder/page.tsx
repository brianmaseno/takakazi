'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, TreePine, Users, Globe, Heart, Target } from 'lucide-react'

export default function FounderPage() {
  const achievements = [
    {
      icon: TreePine,
      number: "50,000+",
      label: "Trees Planted",
      description: "Led community initiatives that planted over 50,000 trees across Africa"
    },
    {
      icon: Users,
      number: "1,000+",
      label: "Youth Empowered",
      description: "Mentored and empowered thousands of young environmental leaders"
    },
    {
      icon: Globe,
      number: "500+",
      label: "Tons Recycled",
      description: "Innovative waste management programs recycled 500+ tons of waste"
    },
    {
      icon: Award,
      number: "Multiple",
      label: "Awards Received",
      description: "Recognition for environmental leadership and sustainable development"
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "Believing that real change happens when communities are empowered to lead their own transformation."
    },
    {
      icon: TreePine,
      title: "Environmental Stewardship",
      description: "Committed to protecting and restoring Africa's natural environment for future generations."
    },
    {
      icon: Target,
      title: "Sustainable Solutions",
      description: "Developing long-term, locally-appropriate solutions that create lasting environmental impact."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Meet{' '}
                <span className="text-green-600 dark:text-green-400">
                  George Otieno Ogola
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Founder & Environmental Conservation Leader
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                George Otieno Ogola is a visionary environmental leader who founded Taka Kazi Africa 
                with a mission to transform waste into opportunity while empowering communities across 
                Africa. His passion for environmental conservation and youth development has led to 
                remarkable achievements in sustainable development and community empowerment.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium">
                  Environmental Leader
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                  Youth Empowerment Advocate
                </span>
                <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-medium">
                  Sustainability Expert
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/founder.jpg"
                  alt="George Otieno Ogola - Founder of Taka Kazi Africa"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Founded in 2020</h3>
                <p className="text-gray-600 dark:text-gray-300">Taka Kazi Africa</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Impact & Achievements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Under George&apos;s leadership, Taka Kazi Africa has achieved remarkable milestones 
              in environmental conservation and community empowerment across Africa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                  <achievement.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.number}
                </h3>
                <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
                  {achievement.label}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Vision & Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              George&apos;s leadership is guided by core values that drive meaningful change 
              in environmental conservation and community development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-green-600 dark:bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl lg:text-3xl font-light italic mb-8 leading-relaxed">
              &ldquo;Our mission is not just about cleaning the environment, but about transforming 
              lives and empowering communities to become stewards of their own sustainable future. 
              Every tree planted, every ton of waste recycled, and every young person empowered 
              brings us closer to the Africa we envision.&rdquo;
            </blockquote>
            <cite className="text-lg font-semibold">
              — George Otieno Ogola, Founder of Taka Kazi Africa
            </cite>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Join George&apos;s Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Be part of the movement that George Otieno Ogola started. Together, we can continue 
              transforming waste into opportunity and building a sustainable future for Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-involved"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Involved
              </a>
              <a
                href="/contact"
                className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}