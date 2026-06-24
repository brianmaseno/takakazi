'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Heart, Leaf, Star } from 'lucide-react'
import Link from 'next/link'
import ScrollArrows from '@/components/ScrollArrows'

const ShopPage = () => {
  const products = [
    { name: 'Branded T-Shirts', description: 'Wear the change with our eco-friendly branded t-shirts.', icon: ShoppingBag, price: 'From KES 1,200' },
    { name: 'Polo Shirts', description: 'Stylish and sustainable polo shirts for every occasion.', icon: ShoppingBag, price: 'From KES 1,500' },
    { name: 'Caps', description: 'Eco-friendly caps to shade you while you make a statement.', icon: ShoppingBag, price: 'From KES 800' },
    { name: 'Hoodies', description: 'Stay warm and stylish while supporting the movement.', icon: ShoppingBag, price: 'From KES 2,000' },
    { name: 'Reusable Bottles', description: 'Reduce plastic waste with our branded reusable bottles.', icon: Leaf, price: 'From KES 600' },
    { name: 'Eco Bags', description: 'Durable, reusable bags for your daily shopping needs.', icon: Leaf, price: 'From KES 400' },
    { name: 'Mugs', description: 'Start your day with purpose using our branded mugs.', icon: Heart, price: 'From KES 500' },
    { name: 'Books', description: 'Educational books on sustainability and environmental stewardship.', icon: Star, price: 'From KES 800' },
    { name: 'Green Art', description: 'Unique art pieces created from recycled and sustainable materials.', icon: Star, price: 'From KES 1,000' },
    { name: 'Corporate Gifts', description: 'Custom eco-friendly corporate gifting solutions for your organization.', icon: ShoppingBag, price: 'Custom Orders' },
    { name: 'Digital Products', description: 'E-books, guides, and digital resources for sustainable living.', icon: Star, price: 'From KES 300' },
    { name: 'Event Tickets', description: 'Access to our eco-festivals, workshops, and special events.', icon: Star, price: 'Varies by Event' },
    { name: 'Eco-friendly Products', description: 'A curated selection of sustainable, planet-friendly products.', icon: Leaf, price: 'Various' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-african-savanna">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shop for Impact
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every purchase supports environmental conservation and community empowerment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Order Now</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products */}
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
              Our Collection
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our collection of eco-friendly products. Wear the Change. Support the Movement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-green-100 dark:bg-green-900/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {product.description}
                </p>
                <span className="inline-block text-green-600 dark:text-green-400 font-semibold text-sm">
                  {product.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Wear the Change. Support the Movement.
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us to place your order or inquire about custom merchandise for your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Contact Us to Order</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <ScrollArrows />
    </div>
  )
}

export default ShopPage
