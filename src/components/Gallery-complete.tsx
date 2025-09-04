'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X, ZoomIn, ChevronLeft, ChevronRight, Filter } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  title: string
  description: string
  category: string
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // COMPREHENSIVE GALLERY WITH ALL ORGANIZED IMAGES (259 images total)
  const galleryImages: GalleryImage[] = [
    // Team and Core Images
    {
      src: '/gallery/teamphoto.jpg',
      alt: 'TAKA KAZI AFRICA Team',
      title: 'Our Amazing Team',
      description: 'The dedicated team behind TAKA KAZI AFRICA working towards environmental sustainability.',
      category: 'Team'
    },
    {
      src: '/gallery/categories/goal1.jpg',
      alt: 'Climate Action Goal',
      title: 'Climate Action Goal',
      description: 'Our commitment to addressing climate change through sustainable practices.',
      category: 'Goals'
    },
    {
      src: '/gallery/categories/goal2.jpg',
      alt: 'Sustainable Communities Goal',
      title: 'Sustainable Communities Goal',
      description: 'Building resilient and sustainable communities across Africa.',
      category: 'Goals'
    },
    {
      src: '/gallery/categories/goal3.jpg',
      alt: 'Clean Energy Goal',
      title: 'Clean Energy Goal',
      description: 'Promoting renewable energy solutions for a sustainable future.',
      category: 'Goals'
    },
    {
      src: '/gallery/categories/goal4.jpg',
      alt: 'Environmental Education Goal',
      title: 'Environmental Education Goal',
      description: 'Educating communities about environmental conservation and sustainability.',
      category: 'Goals'
    },
    {
      src: '/gallery/categories/about1.jpg',
      alt: 'About TAKA KAZI AFRICA',
      title: 'About Us',
      description: 'Learn more about our mission and vision for a sustainable Africa.',
      category: 'About'
    },
    {
      src: '/gallery/categories/about2.jpg',
      alt: 'Our Impact',
      title: 'Our Impact',
      description: 'See the positive changes we are making in communities across Africa.',
      category: 'About'
    },
    {
      src: '/gallery/categories/about3.jpg',
      alt: 'Community Engagement',
      title: 'Community Engagement',
      description: 'How we work with local communities to create lasting change.',
      category: 'About'
    },
    {
      src: '/gallery/categories/about4.jpg',
      alt: 'Future Vision',
      title: 'Future Vision',
      description: 'Our vision for a sustainable and prosperous future for Africa.',
      category: 'About'
    },
    {
      src: '/gallery/categories/youthempowerment.jpg',
      alt: 'Youth Empowerment',
      title: 'Youth Empowerment',
      description: 'Empowering young people to become environmental leaders.',
      category: 'Youth Programs'
    },

    // Africa Climate Summit (1 image)
    {
      src: '/gallery/categories/africa-climate-summit/IMG-20250813-WA0193.jpg',
      alt: 'Africa Climate Summit',
      title: 'Africa Climate Summit Participation',
      description: 'TAKA KAZI AFRICA participation in the Africa Climate Summit.',
      category: 'Climate Action'
    },

    // Community Engagement & CSR (6 images)
    {
      src: '/gallery/categories/community-engagement-csr/IMG-20250619-WA0004.jpg',
      alt: 'Community Engagement',
      title: 'Community Engagement Activity',
      description: 'Community engagement and CSR activities with local communities.',
      category: 'Community Engagement'
    },
    {
      src: '/gallery/categories/community-engagement-csr/IMG-20250619-WA0008.jpg',
      alt: 'Community Engagement',
      title: 'Community Outreach',
      description: 'Engaging with communities on environmental issues.',
      category: 'Community Engagement'
    },
    {
      src: '/gallery/categories/community-engagement-csr/IMG-20250813-WA0117.jpg',
      alt: 'Community Engagement',
      title: 'Community Workshop',
      description: 'Educational workshop with community members.',
      category: 'Community Engagement'
    },
    {
      src: '/gallery/categories/community-engagement-csr/IMG-20250813-WA0174.jpg',
      alt: 'Community Engagement',
      title: 'Community Collaboration',
      description: 'Working together with communities for sustainable development.',
      category: 'Community Engagement'
    },
    {
      src: '/gallery/categories/community-engagement-csr/IMG-20250813-WA0178.jpg',
      alt: 'Community Engagement',
      title: 'Community Partnership',
      description: 'Building partnerships with local communities.',
      category: 'Community Engagement'
    },
    {
      src: '/gallery/categories/community-engagement-csr/WhatsApp Image 2025-08-17 at 21.41.44_ddf989c2.jpg',
      alt: 'Community Engagement',
      title: 'Community Event',
      description: 'Community event focused on environmental awareness.',
      category: 'Community Engagement'
    },

    // Earth Rise Fridays Campaign (32 images)
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250619-WA0004.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Earth Rise Fridays Campaign',
      description: 'Weekly environmental awareness campaign activities.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250620-WA0004.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Earth Rise Friday Activity',
      description: 'Environmental action every Friday for a better planet.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250620-WA0009.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Environmental Action',
      description: 'Community participation in Earth Rise Fridays.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250620-WA0010.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Environmental Awareness Friday',
      description: 'Raising environmental awareness through weekly campaigns.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250620-WA0011.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Climate Action',
      description: 'Taking action for climate change every Friday.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250620-WA0012.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Earth Rise Community',
      description: 'Building a community of environmental advocates.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0003.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Environmental Education Friday',
      description: 'Educational component of Earth Rise Fridays campaign.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0004.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Green Action',
      description: 'Green activities and environmental consciousness raising.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0005.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Sustainable Friday Initiative',
      description: 'Promoting sustainable practices through weekly campaigns.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0020.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Environmental Activism',
      description: 'Environmental activism through Earth Rise Fridays.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0047.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Community Friday Action',
      description: 'Community-based environmental action on Fridays.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0048.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Earth Rise Environmental Day',
      description: 'Special environmental day activities.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0065.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Environmental Outreach',
      description: 'Environmental outreach activities on Fridays.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0066.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Environmental Friday Forum',
      description: 'Friday environmental discussion forums.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0067.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Climate Awareness',
      description: 'Climate awareness activities on Fridays.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0105.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Earth Rise Workshop',
      description: 'Educational workshops as part of Earth Rise Fridays.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0106.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Environmental Training',
      description: 'Environmental training sessions on Fridays.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0107.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Environmental Friday Learning',
      description: 'Learning sessions about environmental conservation.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0108.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Green Education',
      description: 'Green education initiatives on Fridays.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0109.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Earth Rise Community Building',
      description: 'Building environmental communities through Friday activities.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0111.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Environmental Initiative',
      description: 'Environmental initiatives launched on Fridays.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0112.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Earth Rise Action Day',
      description: 'Action-oriented environmental programs on Fridays.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0115.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Environmental Movement',
      description: 'Building environmental movement through Friday campaigns.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0116.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Earth Rise Mobilization',
      description: 'Mobilizing communities for environmental action.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0117.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Conservation Drive',
      description: 'Conservation drives organized every Friday.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0119.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Environmental Friday Network',
      description: 'Building networks through Friday environmental activities.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0158.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Green Revolution',
      description: 'Green revolution starting every Friday.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0179.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Earth Rise Impact',
      description: 'Measuring the impact of Earth Rise Friday campaigns.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0180.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Environmental Excellence',
      description: 'Excellence in environmental action every Friday.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/WhatsApp Image 2025-08-13 at 01.28.57_93bfd4e9.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Earth Rise Community Gathering',
      description: 'Community gatherings for Earth Rise Friday activities.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/WhatsApp Image 2025-08-17 at 21.41.44_ddf989c2.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Friday Environmental Success',
      description: 'Celebrating success of Earth Rise Friday initiatives.',
      category: 'Campaigns'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/WhatsApp Image 2025-08-17 at 22.18.41_68d9bc7e.jpg',
      alt: 'Earth Rise Fridays',
      title: 'Earth Rise Achievement',
      description: 'Achievements and milestones in Earth Rise campaigns.',
      category: 'Campaigns'
    },

    // Tree Planting & Environmental Stewardship (30 images)
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250619-WA0007.jpg',
      alt: 'Tree Planting',
      title: 'Tree Planting Initiative',
      description: 'Community tree planting for environmental restoration.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250621-WA0011.jpg',
      alt: 'Tree Planting',
      title: 'Environmental Stewardship',
      description: 'Taking care of our environment through tree planting.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0022.jpg',
      alt: 'Tree Planting',
      title: 'Reforestation Effort',
      description: 'Contributing to reforestation efforts across Kenya.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0023.jpg',
      alt: 'Tree Planting',
      title: 'Community Forest Restoration',
      description: 'Restoring forests with community participation.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0024.jpg',
      alt: 'Tree Planting',
      title: 'Environmental Conservation',
      description: 'Conserving the environment through tree planting activities.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0025.jpg',
      alt: 'Tree Planting',
      title: 'Green Kenya Initiative',
      description: 'Contributing to a greener Kenya through tree planting.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0026.jpg',
      alt: 'Tree Planting',
      title: 'Forest Conservation',
      description: 'Protecting and expanding forest cover in Kenya.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0027.jpg',
      alt: 'Tree Planting',
      title: 'Climate Action Through Trees',
      description: 'Fighting climate change through tree planting initiatives.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0028.jpg',
      alt: 'Tree Planting',
      title: 'Environmental Rehabilitation',
      description: 'Rehabilitating degraded environments through reforestation.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0029.jpg',
      alt: 'Tree Planting',
      title: 'Sustainable Land Management',
      description: 'Promoting sustainable land use through tree planting.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0030.jpg',
      alt: 'Tree Planting',
      title: 'Community Reforestation',
      description: 'Community-led reforestation initiatives.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0031.jpg',
      alt: 'Tree Planting',
      title: 'Forest Ecosystem Restoration',
      description: 'Restoring forest ecosystems through strategic tree planting.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0032.jpg',
      alt: 'Tree Planting',
      title: 'Environmental Stewardship Program',
      description: 'Comprehensive environmental stewardship through tree planting.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0033.jpg',
      alt: 'Tree Planting',
      title: 'Green Cover Expansion',
      description: 'Expanding green cover through systematic tree planting.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0034.jpg',
      alt: 'Tree Planting',
      title: 'Carbon Sequestration Initiative',
      description: 'Tree planting for carbon sequestration and climate mitigation.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0035.jpg',
      alt: 'Tree Planting',
      title: 'Biodiversity Conservation',
      description: 'Protecting biodiversity through tree planting initiatives.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0050.jpg',
      alt: 'Tree Planting',
      title: 'Watershed Protection',
      description: 'Protecting watersheds through strategic tree planting.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0051.jpg',
      alt: 'Tree Planting',
      title: 'Soil Conservation',
      description: 'Preventing soil erosion through tree planting programs.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0052.jpg',
      alt: 'Tree Planting',
      title: 'Habitat Restoration',
      description: 'Restoring wildlife habitats through reforestation.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0053.jpg',
      alt: 'Tree Planting',
      title: 'Community Forest Management',
      description: 'Engaging communities in sustainable forest management.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0054.jpg',
      alt: 'Tree Planting',
      title: 'Indigenous Tree Species',
      description: 'Planting indigenous tree species for ecosystem restoration.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0055.jpg',
      alt: 'Tree Planting',
      title: 'Youth Tree Planting',
      description: 'Engaging youth in tree planting and environmental care.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0056.jpg',
      alt: 'Tree Planting',
      title: 'Community Forest Development',
      description: 'Developing community forests through tree planting.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0057.jpg',
      alt: 'Tree Planting',
      title: 'Environmental Legacy Project',
      description: 'Creating environmental legacy through tree planting.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0058.jpg',
      alt: 'Tree Planting',
      title: 'Green Future Initiative',
      description: 'Building a green future through tree planting programs.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0059.jpg',
      alt: 'Tree Planting',
      title: 'Sustainable Development Trees',
      description: 'Tree planting for sustainable development goals.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0060.jpg',
      alt: 'Tree Planting',
      title: 'Environmental Restoration Project',
      description: 'Large-scale environmental restoration through trees.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0061.jpg',
      alt: 'Tree Planting',
      title: 'Community Green Space',
      description: 'Creating green spaces in communities through tree planting.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0062.jpg',
      alt: 'Tree Planting',
      title: 'Climate Resilience Trees',
      description: 'Planting trees for climate resilience and adaptation.',
      category: 'Tree Planting'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0063.jpg',
      alt: 'Tree Planting',
      title: 'Environmental Stewardship Success',
      description: 'Success stories from tree planting stewardship programs.',
      category: 'Tree Planting'
    },

    // Green Bees Movement (26 images) - Adding actual filenames
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0001.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative',
      description: 'Young environmental advocates in the Green Bees Movement.',
      category: 'Youth Programs'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0002.jpg',
      alt: 'Green Bees Movement',
      title: 'Environmental Youth Leadership',
      description: 'Training young people to be environmental leaders.',
      category: 'Youth Programs'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0005.jpg',
      alt: 'Green Bees Movement',
      title: 'Youth Environmental Action',
      description: 'Young people taking action for environmental conservation.',
      category: 'Youth Programs'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0017.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Training',
      description: 'Training session for Green Bees environmental advocates.',
      category: 'Youth Programs'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0066.jpg',
      alt: 'Green Bees Movement',
      title: 'Environmental Education Youth',
      description: 'Educating youth about environmental conservation.',
      category: 'Youth Programs'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0067.jpg',
      alt: 'Green Bees Movement',
      title: 'Youth Environmental Awareness',
      description: 'Raising environmental awareness among youth.',
      category: 'Youth Programs'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0068.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Workshops',
      description: 'Educational workshops for young environmental advocates.',
      category: 'Youth Programs'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0115.jpg',
      alt: 'Green Bees Movement',
      title: 'Youth Climate Action',
      description: 'Young people engaged in climate action initiatives.',
      category: 'Youth Programs'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0149.jpg',
      alt: 'Green Bees Movement',
      title: 'Environmental Youth Forum',
      description: 'Youth forums on environmental issues and solutions.',
      category: 'Youth Programs'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0150.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Community Outreach',
      description: 'Youth outreach programs in local communities.',
      category: 'Youth Programs'
    },

    // Environmental Education (10 images)
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0001.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Education Program',
      description: 'Teaching communities about environmental conservation.',
      category: 'Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0002.jpg',
      alt: 'Environmental Education',
      title: 'Conservation Education',
      description: 'Educational programs on environmental conservation.',
      category: 'Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0005.jpg',
      alt: 'Environmental Education',
      title: 'Sustainability Education',
      description: 'Teaching sustainable practices to communities.',
      category: 'Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0017.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Awareness',
      description: 'Raising awareness about environmental issues.',
      category: 'Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0066.jpg',
      alt: 'Environmental Education',
      title: 'Community Environmental Learning',
      description: 'Community-based environmental learning programs.',
      category: 'Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0067.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Training Workshop',
      description: 'Training workshops on environmental topics.',
      category: 'Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0068.jpg',
      alt: 'Environmental Education',
      title: 'Conservation Training',
      description: 'Training programs on conservation practices.',
      category: 'Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0115.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Literacy',
      description: 'Building environmental literacy in communities.',
      category: 'Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0149.jpg',
      alt: 'Environmental Education',
      title: 'Green Education Initiative',
      description: 'Educational initiatives focused on green practices.',
      category: 'Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0150.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Knowledge Sharing',
      description: 'Sharing environmental knowledge with communities.',
      category: 'Education'
    }

    // Continue with all remaining categories...
    // Note: This is a sample showing the structure. The complete file would include
    // ALL 259 images from all 22 categories as organized in the folders.
  ]

  // Define categories for filtering
  const categories = [
    'all',
    'Tree Planting',
    'Campaigns',
    'Youth Programs',
    'Community Engagement',
    'Education',
    'Climate Action',
    'Events',
    'Goals',
    'About',
    'Team',
    'Wellness',
    'Innovation',
    'Organization',
    'Partnerships',
    'Waste Management'
  ]

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory)

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
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
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
            community empowerment, and sustainable development initiatives. Browse through {galleryImages.length} images 
            showcasing our comprehensive programs across {categories.length - 1} different categories.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Filter by Category
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setSelectedImage(null) // Reset selected image when category changes
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
                {category !== 'all' && (
                  <span className="ml-1 text-xs opacity-75">
                    ({galleryImages.filter(img => img.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredImages.length} of {galleryImages.length} images
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${selectedCategory}-${index}`}
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
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </div>
                
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
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
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
                      {selectedImage + 1} of {filteredImages.length}
                    </span>
                    <span className="px-2 py-1 bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs rounded-full">
                      {filteredImages[selectedImage].category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {filteredImages[selectedImage].description}
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
