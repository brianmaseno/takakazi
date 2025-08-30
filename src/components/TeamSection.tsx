'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'
import ScrollArrows from '@/components/ScrollArrows'

const TeamSection = () => {
  const teamMembers = [
    {
      name: "George Ofunja",
      position: "Founder & Director",
      image: "/gallery/categories/George Scarf photo.jpg",
      bio: "Environmental conservation enthusiast and youth advocate driving transformative change across Africa through innovative waste-to-opportunity initiatives.",
      expertise: ["Environmental Stewardship", "Youth Mentorship", "Climate Advocacy", "Community Development"]
    },
    {
      name: "Brian Maseno",
      position: "Software Developer",
      image: "/team/IMG_7265-min.jpg",
      bio: "Full-stack developer passionate about building digital solutions that amplify environmental impact and community engagement.",
      expertise: ["Web Development", "Digital Solutions", "Tech Innovation", "UI/UX Design"]
    },
    {
      name: "Leeroy Kagwa",
      position: "Management Trainee",
      image: "/gallery/categories/lee.JPG",
      bio: "Emerging leader developing expertise in organizational management and sustainable business practices under expert mentorship.",
      expertise: ["Management Training", "Business Operations", "Strategic Planning", "Team Coordination"]
    },
    {
      name: "Dr. Faith Rialem",
      position: "Strategic Advisor",
      image: "/gallery/categories/Dr.Faith Rialem1685190321806.jpeg.jpg",
      bio: "Experienced advisor providing strategic guidance on organizational development, research initiatives, and sustainable impact measurement.",
      expertise: ["Strategic Planning", "Research & Development", "Impact Assessment", "Organizational Leadership"]
    },
    {
      name: "Sarah Wanjiku",
      position: "Community Outreach Coordinator",
      image: "/team/sarah.jpg",
      bio: "Community mobilization expert dedicated to building bridges between local communities and sustainable development programs.",
      expertise: ["Community Engagement", "Program Coordination", "Stakeholder Relations", "Training & Workshops"]
    },
    {
      name: "David Kimani",
      position: "Environmental Project Manager",
      image: "/team/david.jpg",
      bio: "Project management specialist with expertise in implementing large-scale environmental conservation and restoration projects.",
      expertise: ["Project Management", "Environmental Planning", "Resource Coordination", "Impact Assessment"]
    },
    {
      name: "Grace Achieng",
      position: "Youth Programs Manager",
      image: "/team/grace.jpg",
      bio: "Youth development advocate empowering the next generation of environmental leaders through education and hands-on experience.",
      expertise: ["Youth Development", "Educational Programs", "Leadership Training", "Mentorship"]
    },
    {
      name: "Michael Odhiambo",
      position: "Sustainability Consultant",
      image: "/team/michael.jpg",
      bio: "Sustainability expert developing innovative solutions for circular economy implementation and sustainable business practices.",
      expertise: ["Sustainability Strategy", "Circular Economy", "Business Development", "Policy Analysis"]
    },
    {
      name: "Lincoln Ogweno",
      position: "Technical Advisor",
      image: "/team/michael.jpg",
      bio: "Technology advisor focused on implementing digital solutions and IT infrastructure to support environmental initiatives and operational efficiency.",
      expertise: ["IT Strategy", "Digital Transformation", "System Architecture", "Technology Consulting"]
    },
    {
      name: "Dennis Omollo",
      position: "Operations Advisor",
      image: "/team/michael.jpg",
      bio: "Operations advisor specializing in process optimization, quality management, and sustainable operational frameworks for environmental programs.",
      expertise: ["Operations Management", "Process Optimization", "Quality Assurance", "Operational Strategy"]
    }
  ]

  return (
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
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate professionals united by a shared vision of creating sustainable environmental 
            solutions and empowering communities across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 z-10"></div>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.slice(0, 2).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                    <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                    <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                    <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll Arrows */}
      <ScrollArrows />
    </section>
  )
}

export default TeamSection
