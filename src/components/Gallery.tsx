'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: '/gallery/team.jpg',
      alt: 'Taka Kazi Africa team members',
      title: 'Our Dedicated Team',
      description: 'The passionate Taka Kazi Africa team members working together for environmental change.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.13_b96f45ee.jpg',
      alt: 'Taka Kazi Africa team photo',
      title: 'Team Photo',
      description: 'Our united team committed to environmental conservation and sustainable development.'
    },
    {
      src: '/gallery/best.jpg',
      alt: 'Best moments from our projects',
      title: 'Project Highlights',
      description: 'Capturing the best moments from our environmental conservation initiatives.'
    },
    {
      src: '/gallery/tree.jpg',
      alt: 'Tree planting initiative',
      title: 'Reforestation Project',
      description: 'Planting indigenous trees to restore forest ecosystems and combat climate change.'
    },
    {
      src: '/gallery/garbage.jpg',
      alt: 'Waste management project',
      title: 'Community Cleanup',
      description: 'Community-led waste management and cleanup initiatives for a cleaner environment.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 00.57.59_4728f51e.jpg',
      alt: 'Environmental conservation activity',
      title: 'Conservation Activity',
      description: 'Active participation in environmental conservation and restoration projects.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 00.57.59_9e6edf74.jpg',
      alt: 'Community engagement program',
      title: 'Community Engagement',
      description: 'Engaging local communities in environmental conservation efforts.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 00.58.00_46a1c06f.jpg',
      alt: 'Youth empowerment initiative',
      title: 'Youth Empowerment',
      description: 'Empowering young people to become environmental leaders in their communities.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 00.58.00_ca8096b4.jpg',
      alt: 'Environmental education workshop',
      title: 'Education Workshop',
      description: 'Teaching environmental awareness and sustainable practices to communities.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 00.58.01_eddcc0c0.jpg',
      alt: 'Sustainable development project',
      title: 'Sustainable Development',
      description: 'Implementing sustainable development solutions in local communities.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 00.58.02_0e4aca68.jpg',
      alt: 'Climate action initiative',
      title: 'Climate Action',
      description: 'Taking concrete action against climate change through community initiatives.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 00.58.02_897bf7c9.jpg',
      alt: 'Environmental project implementation',
      title: 'Project Implementation',
      description: 'Implementing environmental solutions for sustainable community development.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.04.03_148b7d35.jpg',
      alt: 'Community training session',
      title: 'Training Session',
      description: 'Capacity building through hands-on training in environmental practices.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.04.04_795703e0.jpg',
      alt: 'Green initiative implementation',
      title: 'Green Initiative',
      description: 'Promoting green practices and environmental consciousness in communities.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.04.05_f4e0ebb2.jpg',
      alt: 'Sustainability project execution',
      title: 'Sustainability Project',
      description: 'Creating sustainable solutions for environmental challenges.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.10.56_595a7b89.jpg',
      alt: 'Community outreach program',
      title: 'Community Outreach',
      description: 'Reaching out to communities with environmental conservation programs.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.10.57_c288b41b.jpg',
      alt: 'Environmental awareness campaign',
      title: 'Awareness Campaign',
      description: 'Spreading environmental awareness and promoting sustainable practices.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.10.58_06d1e4bb.jpg',
      alt: 'Conservation effort in action',
      title: 'Conservation Effort',
      description: 'Dedicated conservation efforts to protect and restore natural ecosystems.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.10.58_7fc17fbe.jpg',
      alt: 'Environmental training program',
      title: 'Training Program',
      description: 'Training programs to build capacity in environmental management.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.10.58_daa74609.jpg',
      alt: 'Eco-friendly project development',
      title: 'Eco-Friendly Development',
      description: 'Implementing eco-friendly solutions for sustainable development.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.10.59_b494f6f1.jpg',
      alt: 'Community participation in environmental activities',
      title: 'Community Participation',
      description: 'Active community participation in environmental conservation activities.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.10.59_b9944db8.jpg',
      alt: 'Environmental restoration project',
      title: 'Environmental Restoration',
      description: 'Restoring degraded environments through community-based initiatives.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.00_28ea3d64.jpg',
      alt: 'Sustainable agriculture training',
      title: 'Sustainable Agriculture',
      description: 'Training farmers in sustainable agricultural practices and techniques.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.00_370abd6f.jpg',
      alt: 'Water conservation initiative',
      title: 'Water Conservation',
      description: 'Implementing water conservation and management systems in communities.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.00_63bd9439.jpg',
      alt: 'Environmental protection program',
      title: 'Environmental Protection',
      description: 'Programs focused on protecting and preserving natural environments.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.00_af8bf30f.jpg',
      alt: 'Climate resilience building',
      title: 'Climate Resilience',
      description: 'Building community resilience to climate change impacts.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.01_9f2de589.jpg',
      alt: 'Renewable energy project',
      title: 'Renewable Energy',
      description: 'Promoting renewable energy solutions in rural communities.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.02_35b9565b.jpg',
      alt: 'Environmental education for youth',
      title: 'Youth Education',
      description: 'Educating young people about environmental conservation and sustainability.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.02_566e1d1f.jpg',
      alt: 'Waste management training',
      title: 'Waste Management',
      description: 'Training communities in proper waste management and recycling practices.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.02_baffdd20.jpg',
      alt: 'Biodiversity conservation effort',
      title: 'Biodiversity Conservation',
      description: 'Protecting and conserving biodiversity in local ecosystems.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.03_f2d6e42b.jpg',
      alt: 'Environmental monitoring activity',
      title: 'Environmental Monitoring',
      description: 'Monitoring environmental conditions and ecosystem health.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.04_20ea864f.jpg',
      alt: 'Community forest management',
      title: 'Forest Management',
      description: 'Community-based forest management and conservation initiatives.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.04_2f57954f.jpg',
      alt: 'Soil conservation project',
      title: 'Soil Conservation',
      description: 'Implementing soil conservation techniques to prevent erosion and degradation.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.04_d1ff2de7.jpg',
      alt: 'Green technology demonstration',
      title: 'Green Technology',
      description: 'Demonstrating and implementing green technologies for sustainability.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.05_25320799.jpg',
      alt: 'Environmental leadership development',
      title: 'Leadership Development',
      description: 'Developing environmental leaders in local communities.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.05_ca45e8e0.jpg',
      alt: 'Ecosystem restoration work',
      title: 'Ecosystem Restoration',
      description: 'Working to restore damaged ecosystems and natural habitats.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.06_39b7835f.jpg',
      alt: 'Sustainable livelihood project',
      title: 'Sustainable Livelihoods',
      description: 'Creating sustainable livelihood opportunities for communities.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.07_a1fa141f.jpg',
      alt: 'Environmental research activity',
      title: 'Environmental Research',
      description: 'Conducting research to understand and address environmental challenges.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.07_c231f12e.jpg',
      alt: 'Climate adaptation strategies',
      title: 'Climate Adaptation',
      description: 'Developing and implementing climate adaptation strategies for communities.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.08_9d3575a2.jpg',
      alt: 'Organic farming initiative',
      title: 'Organic Farming',
      description: 'Promoting organic farming practices for sustainable agriculture.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.09_29775ad2.jpg',
      alt: 'Environmental policy advocacy',
      title: 'Policy Advocacy',
      description: 'Advocating for environmental policies and sustainable development practices.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.11_a6da5fdc.jpg',
      alt: 'Community mobilization effort',
      title: 'Community Mobilization',
      description: 'Mobilizing communities for environmental conservation and action.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.12_1e2b1b42.jpg',
      alt: 'Environmental impact assessment',
      title: 'Impact Assessment',
      description: 'Assessing environmental impacts and developing mitigation strategies.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.13_08b52479.jpg',
      alt: 'Sustainable development goal implementation',
      title: 'SDG Implementation',
      description: 'Working towards achieving sustainable development goals in communities.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.13_b96f45ee.jpg',
      alt: 'Environmental innovation project',
      title: 'Environmental Innovation',
      description: 'Developing innovative solutions for environmental challenges.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.11.14_5f0110fa.jpg',
      alt: 'Green entrepreneurship program',
      title: 'Green Entrepreneurship',
      description: 'Supporting green entrepreneurship and sustainable business development.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.19.43_45609178.jpg',
      alt: 'Environmental partnership building',
      title: 'Partnership Building',
      description: 'Building partnerships for environmental conservation and sustainable development.'
    },
    {
      src: '/gallery/WhatsApp Image 2025-08-13 at 01.24.06_49850367.jpg',
      alt: 'Community environmental action',
      title: 'Environmental Action',
      description: 'Community-driven environmental action and conservation initiatives.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0, 
      scale: 0.95 
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Our Impact in{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Action
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Witness the transformation we&apos;re creating across Africa through environmental conservation, 
            community empowerment, and sustainable development initiatives that make a real difference.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-sm sm:text-base mb-1 line-clamp-1">
                    {image.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Modal for selected image */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-green-400 transition-colors p-2 rounded-full bg-black/30 hover:bg-black/50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-green-400 transition-colors p-2 rounded-full bg-black/30 hover:bg-black/50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 rounded-full bg-black/30 hover:bg-black/50"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-6xl max-h-[90vh] mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video max-h-[70vh] rounded-t-2xl overflow-hidden">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-b-2xl">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedImage + 1} of {galleryImages.length}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {galleryImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Gallery
