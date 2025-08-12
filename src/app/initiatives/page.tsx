'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TreePine, Users, Mic, Calendar, Palette, GraduationCap, Heart, Building } from 'lucide-react'

const InitiativesPage = () => {
  const flagshipInitiatives = [
    {
      icon: Users,
      title: 'Green Bees Movement',
      description: 'Mobilizing children and youth as "eco-pollinators" who spread awareness and take practical action on conservation.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Youth Leadership Training', 'Environmental Education', 'Community Action Projects', 'Peer-to-Peer Learning']
    },
    {
      icon: Mic,
      title: 'Rusinga Speaks',
      description: 'Public speaking and leadership program nurturing articulate, environmentally conscious young citizens.',
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Public Speaking Skills', 'Environmental Advocacy', 'Leadership Development', 'Communication Training']
    },
    {
      icon: Building,
      title: 'People & Planet Initiative',
      description: 'A multi-stakeholder platform advancing climate action, biodiversity conservation, and green innovation.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Climate Action', 'Biodiversity Conservation', 'Green Innovation', 'Multi-stakeholder Collaboration']
    },
    {
      icon: Mic,
      title: 'Taka Speak Dialogues',
      description: 'A podcast and dialogue forum bringing together thought leaders, innovators, and grassroots voices for sustainable solutions.',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Thought Leadership', 'Solution-driven Conversations', 'Innovation Showcase', 'Community Voices']
    }
  ]

  const keyActivities = [
    {
      icon: TreePine,
      title: 'Monthly Tree Planting',
      description: 'Supporting Kenya\'s 15-billion tree target through community mobilization.',
      frequency: 'Monthly',
      impact: '50,000+ trees planted'
    },
    {
      icon: Users,
      title: 'Clean-up Drives',
      description: 'Coordinated clean-ups in markets, beaches, rivers, estates, and rural villages.',
      frequency: 'Bi-monthly',
      impact: '200+ drives completed'
    },
    {
      icon: GraduationCap,
      title: 'Youth Leadership Workshops',
      description: 'Capacity-building sessions on climate action and entrepreneurship.',
      frequency: 'Monthly',
      impact: '10,000+ youth trained'
    },
    {
      icon: Palette,
      title: 'Eco-Culture Festivals',
      description: 'Celebrating creativity as a driver of environmental change.',
      frequency: 'Seasonal',
      impact: '25+ festivals organized'
    },
    {
      icon: Heart,
      title: 'Eco-therapy Retreats',
      description: 'Promoting mental health through nature engagement and mindfulness.',
      frequency: 'Quarterly',
      impact: '500+ participants'
    },
    {
      icon: Calendar,
      title: 'Educational Programs',
      description: 'Experiential learning activities combining education and environmental advocacy.',
      frequency: 'Ongoing',
      impact: '100+ programs delivered'
    }
  ]

  return (
    <div className="pt-20">
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
            Our Initiatives
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative programs transforming communities through environmental action, 
            youth empowerment, and sustainable development.
          </motion.p>
        </div>
      </section>

      {/* Flagship Initiatives */}
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
              Flagship Initiatives
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our signature programs that are creating lasting impact across communities in Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {flagshipInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${initiative.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <initiative.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {initiative.description}
                  </p>
                  
                  <div className="space-y-2">
                    {initiative.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Activities */}
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
              Key Activities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Regular programs and activities that drive consistent impact in communities across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-green-50 dark:bg-green-900/20 mr-4">
                    <activity.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">
                      {activity.frequency}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {activity.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {activity.description}
                </p>
                
                <div className="inline-flex items-center px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {activity.impact}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-recycling relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Initiatives
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of the movement that's transforming communities and creating 
              a sustainable future for Africa. Every action counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/get-involved" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
              >
                Get Involved Today
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default InitiativesPage
