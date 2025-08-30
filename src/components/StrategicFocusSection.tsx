'use client'

import { motion } from 'framer-motion'
import { Users, Heart, ShoppingBag, Calendar, Target, Handshake } from 'lucide-react'

const StrategicFocusSection = () => {
  const focusAreas = [
    {
      icon: Target,
      title: "Partnerships & Collaboration",
      description: "We work with governments, NGOs, academic institutions, corporates, SMEs, and community groups to create shared value. Our programs are designed to integrate into partners' CSR, ESG, and sustainability strategies, providing visibility, impact metrics, and storytelling opportunities.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Volunteer with us",
      description: "Inviting individuals and groups to contribute their time, skills, and resources to our projects, gaining hands-on experience in environmental conservation while expanding our collective impact.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: ShoppingBag,
      title: "Sale of branded environmental merchandise",
      description: "Offering eco-conscious, high-quality products—such as reusable bottles, tote bags, T-shirts, and stationery—designed with powerful environmental messages to inspire action while generating revenue to sustain our initiatives.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Event sponsorship packages and partnerships",
      description: "Collaborating with businesses, institutions, and philanthropists through tiered sponsorship models, giving partners branding visibility, engagement opportunities, and measurable social impact at our events and programs.",
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Strategic Focus Areas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive approach to sustainable development and environmental conservation through strategic partnerships and community engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-start space-x-6">
                <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${area.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Call to Action
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              We invite you to join Taka Kazi Africa in building a movement of action and hope—where cleaning the environment, conserving resources, recycling waste, and empowering people are part of everyday life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="/get-involved" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg"
              >
                Join Our Movement
              </motion.a>
              <motion.a 
                href="/contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
              >
                Partner With Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StrategicFocusSection