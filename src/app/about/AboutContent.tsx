'use client'

import { motion } from 'framer-motion'
import { Leaf, Users, Heart, Target, Eye, Shield, Handshake, Lightbulb, Award, Sparkles } from 'lucide-react'
import Image from 'next/image'
import ScrollArrows from '@/components/ScrollArrows'

const AboutContent = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Environmental Stewardship',
      description: 'Caring for our planet as a shared responsibility for current and future generations.',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Acting with transparency, ethics, and accountability in all our endeavors.',
      color: 'text-blue-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Developing creative, sustainable solutions to environmental and social challenges.',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: 'Inclusion and Diversity',
      description: 'Engaging diverse voices and ensuring no one is left behind in our mission.',
      color: 'text-purple-500'
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'Building partnerships and working together to amplify our collective impact.',
      color: 'text-indigo-500'
    },
    {
      icon: Target,
      title: 'Sustainability',
      description: 'Promoting practices that balance people, profit, and the planet for long-term impact.',
      color: 'text-emerald-500'
    },
    {
      icon: Heart,
      title: 'Accountability',
      description: 'Taking responsibility for our actions and measuring our impact with transparency.',
      color: 'text-red-500'
    },
    {
      icon: Award,
      title: 'Service',
      description: 'Putting communities first and serving with dedication and compassion.',
      color: 'text-teal-500'
    },
    {
      icon: Sparkles,
      title: 'Youth Leadership',
      description: 'Empowering young people as drivers of change and solution providers.',
      color: 'text-orange-500'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-conservation">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Who We Are
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Taka Kazi Africa is a Kenyan youth-led social enterprise dedicated to safeguarding humanity, biodiversity, and ecosystems through innovative waste management, environmental education, climate action, sustainable enterprise development, and active community engagement.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                A clean, green, prosperous, and sustainable Africa where people and nature thrive together.
              </p>
              
              {/* Vision Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/gallery/aboutus.jpg"
                    alt="Taka Kazi Africa Vision"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
              
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-green-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To transform waste into wealth through environmental stewardship, innovation, green entrepreneurship, climate action, and sustainable community development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Mission Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/gallery/team.jpg"
                    alt="Taka Kazi Africa Mission"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>

              <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl h-96 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-blue-600/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-3xl font-bold mb-4">Taka Kazi</h3>
                    <p className="text-xl">Turn Trash into Work</p>
                    <p className="text-lg mt-2 opacity-90">Swahili Philosophy</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to environmental 
              and social transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                      <value.icon className={`w-6 h-6 ${value.color}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
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
              Our Story
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Founded by George Ofunja, Taka Kazi Africa believes that waste is not merely a problem—it is an opportunity to create jobs, restore the environment, and improve lives.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Story Images */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery/categories/about3.jpg"
                  alt="Taka Kazi Africa Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery/categories/about4.jpg"
                  alt="Taka Kazi Africa Impact"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery/categories/about1.jpg"
                  alt="Taka Kazi Africa Impact"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery/categories/about2.jpg"
                  alt="Taka Kazi Africa Impact"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300"
            >
              <p className="text-lg leading-relaxed mb-6">
                Taka Kazi Africa was born from a powerful realization: that environmental challenges 
                and social inequalities are deeply interconnected, and that solutions must address 
                both simultaneously. Founded by George Ofunja, our organization emerged from years 
                of working with communities across Africa and witnessing firsthand the transformative 
                potential of turning environmental challenges into economic opportunities.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our journey began with a simple but profound belief: waste is not just waste—it is 
                opportunity. This philosophy, captured in our Swahili name &ldquo;Taka Kazi&rdquo; (Turn Trash 
                into Work), has guided our evolution from a local initiative to a movement spanning 
                multiple countries and impacting thousands of lives.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Today, we stand at the intersection of environmental protection, youth empowerment, 
                mental health advocacy, and sustainable livelihoods. Our work spans from grassroots 
                community projects to policy advocacy, from individual mentorship to large-scale 
                conservation initiatives. Every program we design, every partnership we forge, and 
                every action we take is guided by our commitment to creating a cleaner, greener, 
                and more equitable Africa.
              </p>

              <p className="text-lg leading-relaxed">
                As we look to the future, we remain committed to our founding vision: building a 
                continent where environmental stewardship and human prosperity go hand in hand, 
                where young people are empowered to lead change, and where communities have the 
                tools and opportunities they need to thrive in harmony with nature.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Scroll Arrows */}
      <ScrollArrows />
    </div>
  )
}

export default AboutContent