'use client'

import { motion } from 'framer-motion'
import { TreePine, Users, Recycle, Award, TrendingUp } from 'lucide-react'
import ScrollArrows from '@/components/ScrollArrows'

const ImpactPage = () => {
  const sdgGoals = [
    { number: 1, title: 'No Poverty', description: 'Creating green jobs and eco-entrepreneurship opportunities' },
    { number: 3, title: 'Good Health', description: 'Promoting mental health through nature engagement' },
    { number: 4, title: 'Quality Education', description: 'Environmental education and leadership training' },
    { number: 6, title: 'Clean Water', description: 'Water conservation and pollution reduction advocacy' },
    { number: 8, title: 'Decent Work', description: 'Sustainable livelihoods through waste management' },
    { number: 11, title: 'Sustainable Cities', description: 'Urban clean-up campaigns and green spaces' },
    { number: 12, title: 'Responsible Consumption', description: 'Circular economy and waste reduction' },
    { number: 13, title: 'Climate Action', description: 'Tree planting and carbon reduction initiatives' },
    { number: 15, title: 'Life on Land', description: 'Forest restoration and biodiversity conservation' },
    { number: 17, title: 'Partnerships', description: 'Multi-sector collaborations for impact' }
  ]

  const impactMetrics = [
    {
      icon: TreePine,
      value: '50,000+',
      label: 'Trees Planted',
      description: 'Contributing to Kenya\'s 15-billion tree target and ecosystem restoration',
      color: 'text-green-500',
      trend: '+150% this year'
    },
    {
      icon: Users,
      value: '10,000+',
      label: 'Youth Empowered',
      description: 'Young leaders trained in climate action and environmental entrepreneurship',
      color: 'text-blue-500',
      trend: '+200% this year'
    },
    {
      icon: Recycle,
      value: '200+',
      label: 'Clean-up Drives',
      description: 'Community-led environmental clean-up initiatives across urban and rural areas',
      color: 'text-yellow-500',
      trend: '+75% this year'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Active Partnerships',
      description: 'Collaborations with organizations, schools, and communities',
      color: 'text-purple-500',
      trend: '+120% this year'
    }
  ]

  const storyCards = [
    {
      title: 'Green Bees in Action',
      description: 'Young environmental champions leading change in their communities through the Green Bees Movement.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      impact: '500+ youth participants',
      location: 'Nairobi, Kenya'
    },
    {
      title: 'Community Forest Restoration',
      description: 'Restoring degraded landscapes through indigenous tree planting and community engagement.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      impact: '10,000 trees planted',
      location: 'Rusinga Island'
    },
    {
      title: 'Waste-to-Wealth Innovation',
      description: 'Transforming plastic waste into valuable products while creating employment opportunities.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      impact: '15 tons recycled',
      location: 'Multiple locations'
    },
    {
      title: 'Mental Health Through Nature',
      description: 'Eco-therapy sessions connecting mental wellness with environmental conservation.',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      impact: '300+ participants',
      location: 'Various communities'
    }
  ]

  return (
    <div className="pt-20">
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
            Our Impact
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Measuring the difference we&apos;re making in environmental conservation, 
            community empowerment, and sustainable development across Africa.
          </motion.p>
        </div>
      </section>

      {/* Impact Metrics */}
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
              Impact By the Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tangible results from our commitment to environmental stewardship and community transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-white dark:bg-gray-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {metric.value}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {metric.label}
                  </p>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {metric.trend}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
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
              Impact Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real stories of transformation from communities across Africa where we&apos;re making a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {storyCards.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${story.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center text-white">
                      <span className="text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                        {story.impact}
                      </span>
                      <span className="text-sm bg-black/50 px-3 py-1 rounded-full">
                        {story.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
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
              UN SDG Alignment
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our work directly contributes to multiple United Nations Sustainable Development Goals, 
              creating holistic impact across environmental, social, and economic dimensions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {goal.number}
                </div>
                
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {goal.title}
                </h3>
                
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {goal.description}
                </p>
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
              Be Part of Our Impact
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your involvement can amplify our impact and help us reach even more communities 
              across Africa. Join us in creating lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/get-involved" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
              >
                Join Our Movement
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
      
      {/* Scroll Arrows */}
      <ScrollArrows />
    </div>
  )
}

export default ImpactPage
