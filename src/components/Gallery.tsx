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

  // COMPREHENSIVE GALLERY WITH ALL ORGANIZED IMAGES FROM CATEGORIES - EVERY IMAGE INCLUDED
  const galleryImages: GalleryImage[] = [
    // Core standalone images
    {
      src: '/gallery/teamphoto.jpg',
      alt: 'TAKA KAZI AFRICA Team',
      title: 'Our Amazing Team',
      description: 'The dedicated team behind TAKA KAZI AFRICA working towards environmental sustainability.',
      category: 'Team Photos'
    },
    {
      src: '/gallery/categories/goal1.jpg',
      alt: 'Climate Action Goal',
      title: 'Goal 1: Climate Action',
      description: 'Our commitment to addressing climate change through sustainable practices.',
      category: 'Goals'
    },
    {
      src: '/gallery/categories/goal2.jpg',
      alt: 'Sustainable Communities Goal',
      title: 'Goal 2: Sustainable Communities',
      description: 'Building resilient and sustainable communities across Africa.',
      category: 'Goals'
    },
    {
      src: '/gallery/categories/goal3.jpg',
      alt: 'Clean Energy Goal',
      title: 'Goal 3: Clean Energy',
      description: 'Promoting renewable energy solutions for a sustainable future.',
      category: 'Goals'
    },
    {
      src: '/gallery/categories/goal4.jpg',
      alt: 'Environmental Education Goal',
      title: 'Goal 4: Environmental Education',
      description: 'Educating communities about environmental conservation and sustainability.',
      category: 'Goals'
    },

    // Africa Climate Summit (1 image)
    {
      src: '/gallery/categories/africa-climate-summit/IMG-20250813-WA0193.jpg',
      alt: 'Africa Climate Summit',
      title: 'Africa Climate Summit Participation',
      description: 'TAKA KAZI AFRICA participation in the Africa Climate Summit.',
      category: 'Africa Climate Summit'
    },

    // Community Engagement & CSR (6 images) - ALL
    {
      src: '/gallery/categories/community-engagement-csr/IMG-20250619-WA0004.jpg',
      alt: 'Community Engagement CSR',
      title: 'Community Engagement Activity 1',
      description: 'Community engagement and CSR activities with local communities.',
      category: 'Community Engagement CSR'
    },
    {
      src: '/gallery/categories/community-engagement-csr/IMG-20250619-WA0008.jpg',
      alt: 'Community Engagement CSR',
      title: 'Community Engagement Activity 2',
      description: 'Engaging with communities on environmental issues.',
      category: 'Community Engagement CSR'
    },
    {
      src: '/gallery/categories/community-engagement-csr/IMG-20250813-WA0117.jpg',
      alt: 'Community Engagement CSR',
      title: 'Community Workshop',
      description: 'Educational workshop with community members.',
      category: 'Community Engagement CSR'
    },
    {
      src: '/gallery/categories/community-engagement-csr/IMG-20250813-WA0174.jpg',
      alt: 'Community Engagement CSR',
      title: 'Community Collaboration',
      description: 'Working together with communities for sustainable development.',
      category: 'Community Engagement CSR'
    },
    {
      src: '/gallery/categories/community-engagement-csr/IMG-20250813-WA0178.jpg',
      alt: 'Community Engagement CSR',
      title: 'Community Partnership',
      description: 'Building partnerships with local communities.',
      category: 'Community Engagement CSR'
    },
    {
      src: '/gallery/categories/community-engagement-csr/WhatsApp Image 2025-08-17 at 21.41.44_ddf989c2.jpg',
      alt: 'Community Engagement CSR',
      title: 'Community Event',
      description: 'Community event focused on environmental awareness.',
      category: 'Community Engagement CSR'
    },

    // Environmental Education (10 images) - ALL
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0001.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Education Program 1',
      description: 'Teaching communities about environmental conservation.',
      category: 'Environmental Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0002.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Education Program 2',
      description: 'Community environmental awareness training.',
      category: 'Environmental Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0005.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Education Program 3',
      description: 'Sustainable practices education for communities.',
      category: 'Environmental Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0017.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Education Program 4',
      description: 'Environmental conservation training sessions.',
      category: 'Environmental Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0066.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Education Program 5',
      description: 'Community environmental education workshops.',
      category: 'Environmental Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0067.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Education Program 6',
      description: 'Environmental awareness and education activities.',
      category: 'Environmental Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0068.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Education Program 7',
      description: 'Teaching sustainable development practices.',
      category: 'Environmental Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0115.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Education Program 8',
      description: 'Community environmental conservation education.',
      category: 'Environmental Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0149.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Education Program 9',
      description: 'Environmental education and awareness campaigns.',
      category: 'Environmental Education'
    },
    {
      src: '/gallery/categories/environmental-education/IMG-20250813-WA0150.jpg',
      alt: 'Environmental Education',
      title: 'Environmental Education Program 10',
      description: 'Community environmental education initiatives.',
      category: 'Environmental Education'
    },

    // Green Bees Movement (26 images) - ALL
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250619-WA0006.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 1',
      description: 'Youth-led environmental conservation and awareness movement.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0005.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 2',
      description: 'Engaging young people in environmental conservation.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0009.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 3',
      description: 'Youth environmental awareness activities.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0021.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 4',
      description: 'Green Bees environmental education programs.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0044.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 5',
      description: 'Youth environmental conservation activities.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0049.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 6',
      description: 'Green Bees community engagement programs.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0064.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 7',
      description: 'Environmental awareness through Green Bees.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0066.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 8',
      description: 'Youth environmental leadership development.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0067.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 9',
      description: 'Green Bees environmental action programs.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0103.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 10',
      description: 'Community-based Green Bees activities.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0115.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 11',
      description: 'Green Bees environmental conservation efforts.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0116.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 12',
      description: 'Youth engagement through Green Bees programs.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0117.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 13',
      description: 'Green Bees environmental education workshops.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0119.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 14',
      description: 'Environmental awareness campaigns by Green Bees.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0131.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 15',
      description: 'Green Bees community outreach programs.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0132.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 16',
      description: 'Youth environmental action through Green Bees.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0152.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 17',
      description: 'Green Bees environmental conservation projects.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0153.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 18',
      description: 'Community environmental programs by Green Bees.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0159.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 19',
      description: 'Green Bees youth leadership activities.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0186.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 20',
      description: 'Environmental conservation through Green Bees.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0187.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 21',
      description: 'Green Bees environmental awareness programs.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0188.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 22',
      description: 'Youth environmental engagement activities.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0189.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 23',
      description: 'Green Bees community environmental projects.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0190.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 24',
      description: 'Environmental action programs by Green Bees.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/IMG-20250813-WA0191.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 25',
      description: 'Green Bees environmental conservation efforts.',
      category: 'Green Bees Movement'
    },
    {
      src: '/gallery/categories/green-bees-movement/WhatsApp Image 2025-08-17 at 21.41.44_ddf989c2.jpg',
      alt: 'Green Bees Movement',
      title: 'Green Bees Initiative 26',
      description: 'Green Bees movement impact and achievements.',
      category: 'Green Bees Movement'
    },

    // Youth Empowerment Green Leadership (13 images) - ALL
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/IMG-20250813-WA0005.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 1',
      description: 'Empowering young people to become environmental leaders.',
      category: 'Youth Empowerment Green Leadership'
    },
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/IMG-20250813-WA0006.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 2',
      description: 'Green leadership development for youth.',
      category: 'Youth Empowerment Green Leadership'
    },
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/IMG-20250813-WA0039.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 3',
      description: 'Environmental leadership training for young people.',
      category: 'Youth Empowerment Green Leadership'
    },
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/IMG-20250813-WA0040.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 4',
      description: 'Youth empowerment through environmental leadership.',
      category: 'Youth Empowerment Green Leadership'
    },
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/IMG-20250813-WA0041.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 5',
      description: 'Green leadership capacity building for youth.',
      category: 'Youth Empowerment Green Leadership'
    },
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/IMG-20250813-WA0042.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 6',
      description: 'Environmental leadership development programs.',
      category: 'Youth Empowerment Green Leadership'
    },
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/IMG-20250813-WA0043.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 7',
      description: 'Youth environmental leadership initiatives.',
      category: 'Youth Empowerment Green Leadership'
    },
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/IMG-20250813-WA0046.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 8',
      description: 'Empowering youth for environmental conservation leadership.',
      category: 'Youth Empowerment Green Leadership'
    },
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/IMG-20250813-WA0066.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 9',
      description: 'Green leadership training and development.',
      category: 'Youth Empowerment Green Leadership'
    },
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/IMG-20250813-WA0067.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 10',
      description: 'Environmental leadership skills development.',
      category: 'Youth Empowerment Green Leadership'
    },
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/IMG-20250813-WA0115.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 11',
      description: 'Youth empowerment through green leadership.',
      category: 'Youth Empowerment Green Leadership'
    },
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/IMG-20250813-WA0116.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 12',
      description: 'Environmental leadership capacity building.',
      category: 'Youth Empowerment Green Leadership'
    },
    {
      src: '/gallery/categories/youth-empowerment-green-leadership/WhatsApp Image 2025-08-17 at 21.41.44_ddf989c2.jpg',
      alt: 'Youth Empowerment Green Leadership',
      title: 'Youth Leadership Program 13',
      description: 'Impact of youth environmental leadership programs.',
      category: 'Youth Empowerment Green Leadership'
    },

    // Rusinga Speaks (24 images) - ALL
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0122.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 1',
      description: 'Community dialogue and environmental advocacy through Rusinga Speaks.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0123.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 2',
      description: 'Environmental discussions and community engagement.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0126.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 3',
      description: 'Community voices on environmental conservation.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0127.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 4',
      description: 'Environmental advocacy through community dialogue.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0128.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 5',
      description: 'Community engagement and environmental awareness.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0129.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 6',
      description: 'Local voices advocating for environmental change.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0130.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 7',
      description: 'Community leadership in environmental conservation.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0169.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 8',
      description: 'Environmental education through community dialogue.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0181.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 9',
      description: 'Community-driven environmental initiatives.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0182.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 10',
      description: 'Environmental advocacy through local engagement.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0185.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 11',
      description: 'Community environmental leadership development.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0186.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 12',
      description: 'Environmental conservation dialogue programs.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0187.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 13',
      description: 'Community voices for environmental sustainability.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0188.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 14',
      description: 'Local environmental advocacy initiatives.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0189.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 15',
      description: 'Environmental awareness through community speaking.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0190.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 16',
      description: 'Community environmental discussion forums.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0191.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 17',
      description: 'Environmental advocacy through community platforms.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/IMG-20250813-WA0192.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 18',
      description: 'Community environmental education dialogues.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/WhatsApp Image 2025-08-13 at 02.45.13_1a57c96e.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 19',
      description: 'Environmental conservation community meetings.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/WhatsApp Image 2025-08-13 at 02.47.04_499aa141.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 20',
      description: 'Community environmental advocacy sessions.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/WhatsApp Image 2025-08-13 at 02.50.01_cf55cbf4.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 21',
      description: 'Local voices for environmental change.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/WhatsApp Image 2025-08-13 at 02.53.11_78f19db2.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 22',
      description: 'Community engagement for environmental sustainability.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/WhatsApp Image 2025-08-13 at 02.53.12_1512dc8e.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 23',
      description: 'Environmental education through community dialogue.',
      category: 'Rusinga Speaks'
    },
    {
      src: '/gallery/categories/rusinga-speaks/WhatsApp Image 2025-08-13 at 03.39.09_25b1abb9.jpg',
      alt: 'Rusinga Speaks',
      title: 'Rusinga Speaks Program 24',
      description: 'Impact of Rusinga Speaks environmental programs.',
      category: 'Rusinga Speaks'
    },

    // Tree Planting Environmental Stewardship (30 images) - ALL
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250619-WA0007.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 1',
      description: 'Community tree planting for environmental restoration.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250621-WA0011.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 2',
      description: 'Environmental stewardship through tree planting.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0022.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 3',
      description: 'Reforestation efforts for climate action.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0023.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 4',
      description: 'Community involvement in tree planting.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0024.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 5',
      description: 'Environmental restoration through tree planting.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0025.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 6',
      description: 'Sustainable forestry and tree care programs.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0026.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 7',
      description: 'Community-based reforestation projects.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0027.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 8',
      description: 'Environmental stewardship and conservation.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0028.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 9',
      description: 'Tree planting for ecosystem restoration.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0029.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 10',
      description: 'Climate action through tree planting.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0030.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 11',
      description: 'Environmental conservation tree programs.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0031.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 12',
      description: 'Sustainable development through tree planting.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0032.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 13',
      description: 'Community forestry and environmental care.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0033.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 14',
      description: 'Reforestation for environmental sustainability.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0034.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 15',
      description: 'Environmental stewardship education.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0035.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 16',
      description: 'Tree planting community engagement.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0050.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 17',
      description: 'Environmental restoration programs.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0051.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 18',
      description: 'Community tree care and maintenance.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0052.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 19',
      description: 'Sustainable forestry practices.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0053.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 20',
      description: 'Environmental conservation through trees.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0054.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 21',
      description: 'Climate resilience through reforestation.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0055.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 22',
      description: 'Community-led environmental stewardship.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0056.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 23',
      description: 'Tree planting for biodiversity conservation.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0057.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 24',
      description: 'Environmental education through tree planting.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0058.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 25',
      description: 'Ecosystem restoration through tree programs.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0059.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 26',
      description: 'Community tree planting workshops.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0060.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 27',
      description: 'Environmental stewardship training programs.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0061.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 28',
      description: 'Sustainable tree management practices.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0062.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 29',
      description: 'Community environmental conservation efforts.',
      category: 'Tree Planting Environmental Stewardship'
    },
    {
      src: '/gallery/categories/tree-planting-environmental-stewardship/IMG-20250813-WA0063.jpg',
      alt: 'Tree Planting Environmental Stewardship',
      title: 'Tree Planting Initiative 30',
      description: 'Impact of tree planting environmental programs.',
      category: 'Tree Planting Environmental Stewardship'
    },

    // Earth Rise Fridays Campaign (32 images) - ALL
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250619-WA0004.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 1',
      description: 'Weekly environmental awareness campaign activities.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250620-WA0004.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 2',
      description: 'Environmental action every Friday for a better planet.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250620-WA0009.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 3',
      description: 'Community participation in Earth Rise Fridays.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250620-WA0010.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 4',
      description: 'Raising environmental awareness through weekly campaigns.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250620-WA0011.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 5',
      description: 'Taking action for climate change every Friday.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250620-WA0012.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 6',
      description: 'Building a community of environmental advocates.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0003.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 7',
      description: 'Environmental education activities on Fridays.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0004.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 8',
      description: 'Green activities and environmental consciousness raising.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0005.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 9',
      description: 'Promoting sustainable practices through weekly campaigns.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0020.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 10',
      description: 'Environmental activism through Earth Rise Fridays.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0047.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 11',
      description: 'Community-based environmental action on Fridays.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0048.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 12',
      description: 'Special environmental day activities.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0065.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 13',
      description: 'Environmental outreach activities on Fridays.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0066.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 14',
      description: 'Friday environmental discussion forums.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0067.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 15',
      description: 'Climate awareness activities on Fridays.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0105.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 16',
      description: 'Educational workshops as part of Earth Rise Fridays.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0106.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 17',
      description: 'Environmental training sessions on Fridays.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0107.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 18',
      description: 'Learning sessions about environmental conservation.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0108.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 19',
      description: 'Green education initiatives on Fridays.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0109.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 20',
      description: 'Building environmental communities through Friday activities.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0111.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 21',
      description: 'Environmental initiatives launched on Fridays.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0112.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 22',
      description: 'Action-oriented environmental programs on Fridays.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0115.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 23',
      description: 'Building environmental movement through Friday campaigns.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0116.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 24',
      description: 'Mobilizing communities for environmental action.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0117.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 25',
      description: 'Conservation drives organized every Friday.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0119.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 26',
      description: 'Building networks through Friday environmental activities.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0158.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 27',
      description: 'Green revolution starting every Friday.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0179.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 28',
      description: 'Measuring the impact of Earth Rise Friday campaigns.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/IMG-20250813-WA0180.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 29',
      description: 'Excellence in environmental action every Friday.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/WhatsApp Image 2025-08-13 at 01.28.57_93eb499a.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 30',
      description: 'Community gatherings for Earth Rise Friday activities.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/WhatsApp Image 2025-08-17 at 21.41.44_ddf989c2.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 31',
      description: 'Celebrating success of Earth Rise Friday initiatives.',
      category: 'Earth Rise Fridays Campaign'
    },
    {
      src: '/gallery/categories/earth-rise-fridays-campaign/WhatsApp Image 2025-08-17 at 22.18.41_68de7a69.jpg',
      alt: 'Earth Rise Fridays Campaign',
      title: 'Earth Rise Fridays Campaign 32',
      description: 'Achievements and milestones in Earth Rise campaigns.',
      category: 'Earth Rise Fridays Campaign'
    },

    // Green Talks Workshops Conferences (13 images) - ALL
    {
      src: '/gallery/categories/green-talks-workshops-conferences/IMG-20250813-WA0133.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 1',
      description: 'Environmental workshops and educational conferences.',
      category: 'Green Talks Workshops Conferences'
    },
    {
      src: '/gallery/categories/green-talks-workshops-conferences/IMG-20250813-WA0135.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 2',
      description: 'Professional development in environmental leadership.',
      category: 'Green Talks Workshops Conferences'
    },
    {
      src: '/gallery/categories/green-talks-workshops-conferences/IMG-20250813-WA0158.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 3',
      description: 'Green talks on environmental sustainability.',
      category: 'Green Talks Workshops Conferences'
    },
    {
      src: '/gallery/categories/green-talks-workshops-conferences/IMG-20250813-WA0164.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 4',
      description: 'Educational conferences on environmental issues.',
      category: 'Green Talks Workshops Conferences'
    },
    {
      src: '/gallery/categories/green-talks-workshops-conferences/IMG-20250813-WA0167.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 5',
      description: 'Environmental awareness workshops.',
      category: 'Green Talks Workshops Conferences'
    },
    {
      src: '/gallery/categories/green-talks-workshops-conferences/IMG-20250813-WA0168.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 6',
      description: 'Professional green talks and training.',
      category: 'Green Talks Workshops Conferences'
    },
    {
      src: '/gallery/categories/green-talks-workshops-conferences/IMG-20250813-WA0170.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 7',
      description: 'Conference sessions on environmental conservation.',
      category: 'Green Talks Workshops Conferences'
    },
    {
      src: '/gallery/categories/green-talks-workshops-conferences/IMG-20250813-WA0171.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 8',
      description: 'Environmental education conferences.',
      category: 'Green Talks Workshops Conferences'
    },
    {
      src: '/gallery/categories/green-talks-workshops-conferences/IMG-20250813-WA0172.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 9',
      description: 'Workshops on sustainable development.',
      category: 'Green Talks Workshops Conferences'
    },
    {
      src: '/gallery/categories/green-talks-workshops-conferences/IMG-20250813-WA0173.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 10',
      description: 'Green technology and innovation talks.',
      category: 'Green Talks Workshops Conferences'
    },
    {
      src: '/gallery/categories/green-talks-workshops-conferences/IMG-20250813-WA0176.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 11',
      description: 'Environmental policy and action workshops.',
      category: 'Green Talks Workshops Conferences'
    },
    {
      src: '/gallery/categories/green-talks-workshops-conferences/IMG-20250813-WA0177.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 12',
      description: 'Climate action workshops and training.',
      category: 'Green Talks Workshops Conferences'
    },
    {
      src: '/gallery/categories/green-talks-workshops-conferences/Participants Group Photo Non-Profit & Social Entrepreneurs Training SBS.jpg',
      alt: 'Green Talks Workshops Conferences',
      title: 'Green Talks Workshop 13',
      description: 'Non-profit and social entrepreneurs training program.',
      category: 'Green Talks Workshops Conferences'
    },

    // TAKA Plastic Collection Challenge WED (3 images) - ALL
    {
      src: '/gallery/categories/taka-plastic-collection-challenge-wed/IMG-20250813-WA0071.jpg',
      alt: 'TAKA Plastic Collection Challenge WED',
      title: 'Plastic Collection Challenge 1',
      description: 'Weekly plastic waste collection and recycling challenge.',
      category: 'TAKA Plastic Collection Challenge WED'
    },
    {
      src: '/gallery/categories/taka-plastic-collection-challenge-wed/IMG-20250813-WA0156.jpg',
      alt: 'TAKA Plastic Collection Challenge WED',
      title: 'Plastic Collection Challenge 2',
      description: 'Environmental action through plastic waste management.',
      category: 'TAKA Plastic Collection Challenge WED'
    },
    {
      src: '/gallery/categories/taka-plastic-collection-challenge-wed/WhatsApp Image 2025-08-17 at 21.41.44_ddf989c2.jpg',
      alt: 'TAKA Plastic Collection Challenge WED',
      title: 'Plastic Collection Challenge 3',
      description: 'Community plastic waste collection initiatives.',
      category: 'TAKA Plastic Collection Challenge WED'
    },

    // World Environment Day 2023 (13 images) - ALL
    {
      src: '/gallery/categories/world-environment-day-2023/IMG-20250813-WA0005.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 1',
      description: 'Celebrating World Environment Day 2023 with community activities.',
      category: 'World Environment Day 2023'
    },
    {
      src: '/gallery/categories/world-environment-day-2023/IMG-20250813-WA0082.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 2',
      description: 'Environmental awareness activities on World Environment Day.',
      category: 'World Environment Day 2023'
    },
    {
      src: '/gallery/categories/world-environment-day-2023/IMG-20250813-WA0083.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 3',
      description: 'Community participation in World Environment Day.',
      category: 'World Environment Day 2023'
    },
    {
      src: '/gallery/categories/world-environment-day-2023/IMG-20250813-WA0084.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 4',
      description: 'Environmental conservation celebrations.',
      category: 'World Environment Day 2023'
    },
    {
      src: '/gallery/categories/world-environment-day-2023/IMG-20250813-WA0085.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 5',
      description: 'Global environmental action day activities.',
      category: 'World Environment Day 2023'
    },
    {
      src: '/gallery/categories/world-environment-day-2023/IMG-20250813-WA0086.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 6',
      description: 'Environmental education on World Environment Day.',
      category: 'World Environment Day 2023'
    },
    {
      src: '/gallery/categories/world-environment-day-2023/IMG-20250813-WA0087.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 7',
      description: 'Community environmental initiatives.',
      category: 'World Environment Day 2023'
    },
    {
      src: '/gallery/categories/world-environment-day-2023/IMG-20250813-WA0088.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 8',
      description: 'Climate action activities on World Environment Day.',
      category: 'World Environment Day 2023'
    },
    {
      src: '/gallery/categories/world-environment-day-2023/IMG-20250813-WA0089.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 9',
      description: 'Environmental stewardship celebrations.',
      category: 'World Environment Day 2023'
    },
    {
      src: '/gallery/categories/world-environment-day-2023/IMG-20250813-WA0090.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 10',
      description: 'Global environmental awareness day.',
      category: 'World Environment Day 2023'
    },
    {
      src: '/gallery/categories/world-environment-day-2023/IMG-20250813-WA0092.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 11',
      description: 'Environmental conservation day activities.',
      category: 'World Environment Day 2023'
    },
    {
      src: '/gallery/categories/world-environment-day-2023/IMG-20250813-WA0093.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 12',
      description: 'Community environmental action day.',
      category: 'World Environment Day 2023'
    },
    {
      src: '/gallery/categories/world-environment-day-2023/WhatsApp Image 2025-08-13 at 01.28.58_c0e9a260.jpg',
      alt: 'World Environment Day 2023',
      title: 'World Environment Day 2023 - 13',
      description: 'Impact of World Environment Day 2023 activities.',
      category: 'World Environment Day 2023'
    },

    // TAKA 47 Campaign (11 images) - ALL
    {
      src: '/gallery/categories/taka-47-campaign/IMG-20250813-WA0005.jpg',
      alt: 'TAKA 47 Campaign',
      title: 'TAKA 47 Campaign 1',
      description: 'TAKA 47 environmental action campaign.',
      category: 'TAKA 47 Campaign'
    },
    {
      src: '/gallery/categories/taka-47-campaign/IMG-20250813-WA0066.jpg',
      alt: 'TAKA 47 Campaign',
      title: 'TAKA 47 Campaign 2',
      description: 'Environmental advocacy through TAKA 47.',
      category: 'TAKA 47 Campaign'
    },
    {
      src: '/gallery/categories/taka-47-campaign/IMG-20250813-WA0067.jpg',
      alt: 'TAKA 47 Campaign',
      title: 'TAKA 47 Campaign 3',
      description: 'Community mobilization for environmental action.',
      category: 'TAKA 47 Campaign'
    },
    {
      src: '/gallery/categories/taka-47-campaign/IMG-20250813-WA0105.jpg',
      alt: 'TAKA 47 Campaign',
      title: 'TAKA 47 Campaign 4',
      description: 'TAKA 47 environmental awareness activities.',
      category: 'TAKA 47 Campaign'
    },
    {
      src: '/gallery/categories/taka-47-campaign/IMG-20250813-WA0106.jpg',
      alt: 'TAKA 47 Campaign',
      title: 'TAKA 47 Campaign 5',
      description: 'Environmental conservation through TAKA 47.',
      category: 'TAKA 47 Campaign'
    },
    {
      src: '/gallery/categories/taka-47-campaign/IMG-20250813-WA0110.jpg',
      alt: 'TAKA 47 Campaign',
      title: 'TAKA 47 Campaign 6',
      description: 'Community environmental action initiatives.',
      category: 'TAKA 47 Campaign'
    },
    {
      src: '/gallery/categories/taka-47-campaign/IMG-20250813-WA0113.jpg',
      alt: 'TAKA 47 Campaign',
      title: 'TAKA 47 Campaign 7',
      description: 'Climate action through TAKA 47 campaign.',
      category: 'TAKA 47 Campaign'
    },
    {
      src: '/gallery/categories/taka-47-campaign/IMG-20250813-WA0115.jpg',
      alt: 'TAKA 47 Campaign',
      title: 'TAKA 47 Campaign 8',
      description: 'Environmental stewardship promotion.',
      category: 'TAKA 47 Campaign'
    },
    {
      src: '/gallery/categories/taka-47-campaign/WhatsApp Image 2025-08-13 at 01.44.44_1e681a01.jpg',
      alt: 'TAKA 47 Campaign',
      title: 'TAKA 47 Campaign 9',
      description: 'TAKA 47 environmental movement activities.',
      category: 'TAKA 47 Campaign'
    },
    {
      src: '/gallery/categories/taka-47-campaign/WhatsApp Image 2025-08-13 at 01.44.45_3c24d837.jpg',
      alt: 'TAKA 47 Campaign',
      title: 'TAKA 47 Campaign 10',
      description: 'Community participation in TAKA 47.',
      category: 'TAKA 47 Campaign'
    },
    {
      src: '/gallery/categories/taka-47-campaign/WhatsApp Image 2025-08-17 at 21.41.44_ddf989c2.jpg',
      alt: 'TAKA 47 Campaign',
      title: 'TAKA 47 Campaign 11',
      description: 'Impact and success of TAKA 47 campaign.',
      category: 'TAKA 47 Campaign'
    },

    // Innovation Eco Entrepreneurship (6 images) - ALL
    {
      src: '/gallery/categories/innovation-eco-entrepreneurship/IMG-20250706-WA0001.jpg',
      alt: 'Innovation Eco Entrepreneurship',
      title: 'Innovation Eco Entrepreneurship 1',
      description: 'Environmental innovation and eco-entrepreneurship initiatives.',
      category: 'Innovation Eco Entrepreneurship'
    },
    {
      src: '/gallery/categories/innovation-eco-entrepreneurship/IMG-20250813-WA0036.jpg',
      alt: 'Innovation Eco Entrepreneurship',
      title: 'Innovation Eco Entrepreneurship 2',
      description: 'Sustainable business innovation programs.',
      category: 'Innovation Eco Entrepreneurship'
    },
    {
      src: '/gallery/categories/innovation-eco-entrepreneurship/IMG-20250813-WA0091.jpg',
      alt: 'Innovation Eco Entrepreneurship',
      title: 'Innovation Eco Entrepreneurship 3',
      description: 'Green technology and environmental entrepreneurship.',
      category: 'Innovation Eco Entrepreneurship'
    },
    {
      src: '/gallery/categories/innovation-eco-entrepreneurship/IMG-20250813-WA0154.jpg',
      alt: 'Innovation Eco Entrepreneurship',
      title: 'Innovation Eco Entrepreneurship 4',
      description: 'Eco-innovation and sustainable entrepreneurship.',
      category: 'Innovation Eco Entrepreneurship'
    },
    {
      src: '/gallery/categories/innovation-eco-entrepreneurship/IMG-20250813-WA0155.jpg',
      alt: 'Innovation Eco Entrepreneurship',
      title: 'Innovation Eco Entrepreneurship 5',
      description: 'Environmental innovation incubation programs.',
      category: 'Innovation Eco Entrepreneurship'
    },
    {
      src: '/gallery/categories/innovation-eco-entrepreneurship/WhatsApp Image 2025-08-13 at 01.44.44_0baae825.jpg',
      alt: 'Innovation Eco Entrepreneurship',
      title: 'Innovation Eco Entrepreneurship 6',
      description: 'Impact of innovation and eco-entrepreneurship programs.',
      category: 'Innovation Eco Entrepreneurship'
    },

    // Mental Health Nature Walks (11 images) - ALL
    {
      src: '/gallery/categories/mental-health-nature-walks/IMG-20250619-WA0004.jpg',
      alt: 'Mental Health Nature Walks',
      title: 'Mental Health Nature Walk 1',
      description: 'Mental health wellness through nature walks and environmental therapy.',
      category: 'Mental Health Nature Walks'
    },
    {
      src: '/gallery/categories/mental-health-nature-walks/IMG-20250813-WA0014.jpg',
      alt: 'Mental Health Nature Walks',
      title: 'Mental Health Nature Walk 2',
      description: 'Therapeutic nature walks for mental wellness.',
      category: 'Mental Health Nature Walks'
    },
    {
      src: '/gallery/categories/mental-health-nature-walks/IMG-20250813-WA0015.jpg',
      alt: 'Mental Health Nature Walks',
      title: 'Mental Health Nature Walk 3',
      description: 'Connecting with nature for mental health benefits.',
      category: 'Mental Health Nature Walks'
    },
    {
      src: '/gallery/categories/mental-health-nature-walks/IMG-20250813-WA0016.jpg',
      alt: 'Mental Health Nature Walks',
      title: 'Mental Health Nature Walk 4',
      description: 'Environmental therapy and mental wellness programs.',
      category: 'Mental Health Nature Walks'
    },
    {
      src: '/gallery/categories/mental-health-nature-walks/IMG-20250813-WA0018.jpg',
      alt: 'Mental Health Nature Walks',
      title: 'Mental Health Nature Walk 5',
      description: 'Nature-based mental health support initiatives.',
      category: 'Mental Health Nature Walks'
    },
    {
      src: '/gallery/categories/mental-health-nature-walks/IMG-20250813-WA0019.jpg',
      alt: 'Mental Health Nature Walks',
      title: 'Mental Health Nature Walk 6',
      description: 'Outdoor therapy and environmental wellness.',
      category: 'Mental Health Nature Walks'
    },
    {
      src: '/gallery/categories/mental-health-nature-walks/IMG-20250813-WA0037.jpg',
      alt: 'Mental Health Nature Walks',
      title: 'Mental Health Nature Walk 7',
      description: 'Mental health awareness through nature activities.',
      category: 'Mental Health Nature Walks'
    },
    {
      src: '/gallery/categories/mental-health-nature-walks/IMG-20250813-WA0038.jpg',
      alt: 'Mental Health Nature Walks',
      title: 'Mental Health Nature Walk 8',
      description: 'Healing through nature and environmental connection.',
      category: 'Mental Health Nature Walks'
    },
    {
      src: '/gallery/categories/mental-health-nature-walks/IMG-20250813-WA0045.jpg',
      alt: 'Mental Health Nature Walks',
      title: 'Mental Health Nature Walk 9',
      description: 'Community mental health through nature programs.',
      category: 'Mental Health Nature Walks'
    },
    {
      src: '/gallery/categories/mental-health-nature-walks/IMG-20250813-WA0072.jpg',
      alt: 'Mental Health Nature Walks',
      title: 'Mental Health Nature Walk 10',
      description: 'Therapeutic environmental activities.',
      category: 'Mental Health Nature Walks'
    },
    {
      src: '/gallery/categories/mental-health-nature-walks/WhatsApp Image 2025-08-17 at 21.41.44_ddf989c2.jpg',
      alt: 'Mental Health Nature Walks',
      title: 'Mental Health Nature Walk 11',
      description: 'Impact of nature walks on mental health and wellness.',
      category: 'Mental Health Nature Walks'
    },

    // Public Speaking Journalism Club (2 images) - ALL
    {
      src: '/gallery/categories/public-speaking-journalism-club/WhatsApp Image 2025-08-13 at 01.53.04_3fe9453e.jpg',
      alt: 'Public Speaking Journalism Club',
      title: 'Public Speaking Journalism Club 1',
      description: 'Environmental journalism and communication skills development.',
      category: 'Public Speaking Journalism Club'
    },
    {
      src: '/gallery/categories/public-speaking-journalism-club/WhatsApp Image 2025-08-13 at 01.53.04_57411752.jpg',
      alt: 'Public Speaking Journalism Club',
      title: 'Public Speaking Journalism Club 2',
      description: 'Building communication skills for environmental advocacy.',
      category: 'Public Speaking Journalism Club'
    },

    // Speaker Series (9 images) - ALL
    {
      src: '/gallery/categories/speaker-series/IMG-20250813-WA0133.jpg',
      alt: 'Speaker Series',
      title: 'Speaker Series 1',
      description: 'Environmental speaker series and expert talks.',
      category: 'Speaker Series'
    },
    {
      src: '/gallery/categories/speaker-series/IMG-20250813-WA0134.jpg',
      alt: 'Speaker Series',
      title: 'Speaker Series 2',
      description: 'Expert speakers on environmental conservation.',
      category: 'Speaker Series'
    },
    {
      src: '/gallery/categories/speaker-series/IMG-20250813-WA0146.jpg',
      alt: 'Speaker Series',
      title: 'Speaker Series 3',
      description: 'Environmental leadership speaker sessions.',
      category: 'Speaker Series'
    },
    {
      src: '/gallery/categories/speaker-series/IMG-20250813-WA0147.jpg',
      alt: 'Speaker Series',
      title: 'Speaker Series 4',
      description: 'Knowledge sharing through speaker series.',
      category: 'Speaker Series'
    },
    {
      src: '/gallery/categories/speaker-series/IMG-20250813-WA0148.jpg',
      alt: 'Speaker Series',
      title: 'Speaker Series 5',
      description: 'Environmental expert talks and presentations.',
      category: 'Speaker Series'
    },
    {
      src: '/gallery/categories/speaker-series/IMG-20250813-WA0151.jpg',
      alt: 'Speaker Series',
      title: 'Speaker Series 6',
      description: 'Speaker series on sustainability and conservation.',
      category: 'Speaker Series'
    },
    {
      src: '/gallery/categories/speaker-series/IMG-20250813-WA0164.jpg',
      alt: 'Speaker Series',
      title: 'Speaker Series 7',
      description: 'Educational speaker sessions on environmental issues.',
      category: 'Speaker Series'
    },
    {
      src: '/gallery/categories/speaker-series/IMG-20250813-WA0165.jpg',
      alt: 'Speaker Series',
      title: 'Speaker Series 8',
      description: 'Professional speaker series on green topics.',
      category: 'Speaker Series'
    },
    {
      src: '/gallery/categories/speaker-series/IMG-20250813-WA0166.jpg',
      alt: 'Speaker Series',
      title: 'Speaker Series 9',
      description: 'Impact of environmental speaker series programs.',
      category: 'Speaker Series'
    },

    // SESC Pre World Environment Day 2025 (4 images) - ALL
    {
      src: '/gallery/categories/sesc-pre-world-environment-day-2025/IMG-20250603-WA0007 (1).jpg',
      alt: 'SESC Pre World Environment Day 2025',
      title: 'SESC Pre WED 2025 - 1',
      description: 'SESC preparations for World Environment Day 2025.',
      category: 'SESC Pre World Environment Day 2025'
    },
    {
      src: '/gallery/categories/sesc-pre-world-environment-day-2025/IMG_0013.JPG',
      alt: 'SESC Pre World Environment Day 2025',
      title: 'SESC Pre WED 2025 - 2',
      description: 'Pre-World Environment Day activities and preparations.',
      category: 'SESC Pre World Environment Day 2025'
    },
    {
      src: '/gallery/categories/sesc-pre-world-environment-day-2025/WhatsApp Image 2025-08-13 at 02.35.33_89fcaa98.jpg',
      alt: 'SESC Pre World Environment Day 2025',
      title: 'SESC Pre WED 2025 - 3',
      description: 'Environmental day preparation activities.',
      category: 'SESC Pre World Environment Day 2025'
    },
    {
      src: '/gallery/categories/sesc-pre-world-environment-day-2025/WhatsApp Image 2025-08-13 at 02.35.34_58003515.jpg',
      alt: 'SESC Pre World Environment Day 2025',
      title: 'SESC Pre WED 2025 - 4',
      description: 'Community engagement for World Environment Day 2025.',
      category: 'SESC Pre World Environment Day 2025'
    },

    // TAKA Green Project Schools (10 images) - ALL
    {
      src: '/gallery/categories/taka-green-project-schools/IMG-20250619-WA0005.jpg',
      alt: 'TAKA Green Project Schools',
      title: 'TAKA Green Schools 1',
      description: 'Environmental education and green projects in schools.',
      category: 'TAKA Green Project Schools'
    },
    {
      src: '/gallery/categories/taka-green-project-schools/IMG-20250619-WA0012.jpg',
      alt: 'TAKA Green Project Schools',
      title: 'TAKA Green Schools 2',
      description: 'School-based environmental conservation programs.',
      category: 'TAKA Green Project Schools'
    },
    {
      src: '/gallery/categories/taka-green-project-schools/IMG-20250813-WA0005.jpg',
      alt: 'TAKA Green Project Schools',
      title: 'TAKA Green Schools 3',
      description: 'Green initiatives and sustainability in schools.',
      category: 'TAKA Green Project Schools'
    },
    {
      src: '/gallery/categories/taka-green-project-schools/IMG-20250813-WA0114.jpg',
      alt: 'TAKA Green Project Schools',
      title: 'TAKA Green Schools 4',
      description: 'Educational environmental projects in schools.',
      category: 'TAKA Green Project Schools'
    },
    {
      src: '/gallery/categories/taka-green-project-schools/IMG-20250813-WA0115.jpg',
      alt: 'TAKA Green Project Schools',
      title: 'TAKA Green Schools 5',
      description: 'School environmental awareness programs.',
      category: 'TAKA Green Project Schools'
    },
    {
      src: '/gallery/categories/taka-green-project-schools/IMG-20250813-WA0116.jpg',
      alt: 'TAKA Green Project Schools',
      title: 'TAKA Green Schools 6',
      description: 'Green school projects and initiatives.',
      category: 'TAKA Green Project Schools'
    },
    {
      src: '/gallery/categories/taka-green-project-schools/IMG-20250813-WA0117.jpg',
      alt: 'TAKA Green Project Schools',
      title: 'TAKA Green Schools 7',
      description: 'Environmental education in school settings.',
      category: 'TAKA Green Project Schools'
    },
    {
      src: '/gallery/categories/taka-green-project-schools/IMG-20250813-WA0118.jpg',
      alt: 'TAKA Green Project Schools',
      title: 'TAKA Green Schools 8',
      description: 'School-based environmental conservation activities.',
      category: 'TAKA Green Project Schools'
    },
    {
      src: '/gallery/categories/taka-green-project-schools/IMG-20250813-WA0119.jpg',
      alt: 'TAKA Green Project Schools',
      title: 'TAKA Green Schools 9',
      description: 'Student environmental engagement programs.',
      category: 'TAKA Green Project Schools'
    },
    {
      src: '/gallery/categories/taka-green-project-schools/IMG-20250813-WA0120.jpg',
      alt: 'TAKA Green Project Schools',
      title: 'TAKA Green Schools 10',
      description: 'Impact of green projects in educational institutions.',
      category: 'TAKA Green Project Schools'
    },

    // TAKA Kazi Africa Merchandise (5 images) - ALL
    {
      src: '/gallery/categories/taka-kazi-africa-merchandise/IMG-20250813-WA0005.jpg',
      alt: 'TAKA Kazi Africa Merchandise',
      title: 'TAKA Merchandise 1',
      description: 'TAKA KAZI AFRICA branded merchandise and promotional materials.',
      category: 'TAKA Kazi Africa Merchandise'
    },
    {
      src: '/gallery/categories/taka-kazi-africa-merchandise/IMG-20250813-WA0008.jpg',
      alt: 'TAKA Kazi Africa Merchandise',
      title: 'TAKA Merchandise 2',
      description: 'Environmental awareness merchandise and materials.',
      category: 'TAKA Kazi Africa Merchandise'
    },
    {
      src: '/gallery/categories/taka-kazi-africa-merchandise/IMG-20250813-WA0010.jpg',
      alt: 'TAKA Kazi Africa Merchandise',
      title: 'TAKA Merchandise 3',
      description: 'Branded environmental conservation materials.',
      category: 'TAKA Kazi Africa Merchandise'
    },
    {
      src: '/gallery/categories/taka-kazi-africa-merchandise/IMG-20250813-WA0012.jpg',
      alt: 'TAKA Kazi Africa Merchandise',
      title: 'TAKA Merchandise 4',
      description: 'Promotional merchandise for environmental campaigns.',
      category: 'TAKA Kazi Africa Merchandise'
    },
    {
      src: '/gallery/categories/taka-kazi-africa-merchandise/IMG-20250813-WA0013.jpg',
      alt: 'TAKA Kazi Africa Merchandise',
      title: 'TAKA Merchandise 5',
      description: 'TAKA KAZI AFRICA organizational merchandise.',
      category: 'TAKA Kazi Africa Merchandise'
    },

    // TAKA Management Project (11 images) - ALL
    {
      src: '/gallery/categories/taka-management-project/IMG-20250728-WA0002.jpg',
      alt: 'TAKA Management Project',
      title: 'TAKA Management Project 1',
      description: 'TAKA KAZI AFRICA management and organizational projects.',
      category: 'TAKA Management Project'
    },
    {
      src: '/gallery/categories/taka-management-project/IMG-20250813-WA0005.jpg',
      alt: 'TAKA Management Project',
      title: 'TAKA Management Project 2',
      description: 'Organizational management and project coordination.',
      category: 'TAKA Management Project'
    },
    {
      src: '/gallery/categories/taka-management-project/IMG-20250813-WA0069.jpg',
      alt: 'TAKA Management Project',
      title: 'TAKA Management Project 3',
      description: 'Project management and organizational development.',
      category: 'TAKA Management Project'
    },
    {
      src: '/gallery/categories/taka-management-project/IMG-20250813-WA0070.jpg',
      alt: 'TAKA Management Project',
      title: 'TAKA Management Project 4',
      description: 'Management systems and project implementation.',
      category: 'TAKA Management Project'
    },
    {
      src: '/gallery/categories/taka-management-project/IMG-20250813-WA0071.jpg',
      alt: 'TAKA Management Project',
      title: 'TAKA Management Project 5',
      description: 'Organizational capacity building and management.',
      category: 'TAKA Management Project'
    },
    {
      src: '/gallery/categories/taka-management-project/IMG-20250813-WA0073.jpg',
      alt: 'TAKA Management Project',
      title: 'TAKA Management Project 6',
      description: 'Strategic management and project planning.',
      category: 'TAKA Management Project'
    },
    {
      src: '/gallery/categories/taka-management-project/IMG-20250813-WA0074.jpg',
      alt: 'TAKA Management Project',
      title: 'TAKA Management Project 7',
      description: 'Management training and organizational development.',
      category: 'TAKA Management Project'
    },
    {
      src: '/gallery/categories/taka-management-project/IMG-20250813-WA0075.jpg',
      alt: 'TAKA Management Project',
      title: 'TAKA Management Project 8',
      description: 'Project coordination and management activities.',
      category: 'TAKA Management Project'
    },
    {
      src: '/gallery/categories/taka-management-project/IMG-20250813-WA0105.jpg',
      alt: 'TAKA Management Project',
      title: 'TAKA Management Project 9',
      description: 'Management excellence and project success.',
      category: 'TAKA Management Project'
    },
    {
      src: '/gallery/categories/taka-management-project/IMG-20250813-WA0106.jpg',
      alt: 'TAKA Management Project',
      title: 'TAKA Management Project 10',
      description: 'Organizational management and leadership.',
      category: 'TAKA Management Project'
    },
    {
      src: '/gallery/categories/taka-management-project/IMG-20250813-WA0180.jpg',
      alt: 'TAKA Management Project',
      title: 'TAKA Management Project 11',
      description: 'Impact of management projects and organizational growth.',
      category: 'TAKA Management Project'
    },

    // Tree Planting Nairobi National Park 15 Billion Push (11 images) - ALL
    {
      src: '/gallery/categories/tree-planting-nairobi-national-park-15-billion-push/IMG-20250619-WA0013.jpg',
      alt: 'Tree Planting Nairobi National Park 15 Billion Push',
      title: 'Nairobi National Park Tree Planting 1',
      description: 'Tree planting initiative at Nairobi National Park - 15 Billion Trees Push.',
      category: 'Tree Planting Nairobi National Park 15 Billion Push'
    },
    {
      src: '/gallery/categories/tree-planting-nairobi-national-park-15-billion-push/IMG-20250813-WA0005.jpg',
      alt: 'Tree Planting Nairobi National Park 15 Billion Push',
      title: 'Nairobi National Park Tree Planting 2',
      description: 'National tree planting campaign at Nairobi National Park.',
      category: 'Tree Planting Nairobi National Park 15 Billion Push'
    },
    {
      src: '/gallery/categories/tree-planting-nairobi-national-park-15-billion-push/IMG-20250813-WA0096.jpg',
      alt: 'Tree Planting Nairobi National Park 15 Billion Push',
      title: 'Nairobi National Park Tree Planting 3',
      description: 'Reforestation efforts in Nairobi National Park.',
      category: 'Tree Planting Nairobi National Park 15 Billion Push'
    },
    {
      src: '/gallery/categories/tree-planting-nairobi-national-park-15-billion-push/IMG-20250813-WA0097.jpg',
      alt: 'Tree Planting Nairobi National Park 15 Billion Push',
      title: 'Nairobi National Park Tree Planting 4',
      description: 'Environmental restoration at Nairobi National Park.',
      category: 'Tree Planting Nairobi National Park 15 Billion Push'
    },
    {
      src: '/gallery/categories/tree-planting-nairobi-national-park-15-billion-push/IMG-20250813-WA0098.jpg',
      alt: 'Tree Planting Nairobi National Park 15 Billion Push',
      title: 'Nairobi National Park Tree Planting 5',
      description: 'Contributing to the 15 billion trees initiative.',
      category: 'Tree Planting Nairobi National Park 15 Billion Push'
    },
    {
      src: '/gallery/categories/tree-planting-nairobi-national-park-15-billion-push/IMG-20250813-WA0099.jpg',
      alt: 'Tree Planting Nairobi National Park 15 Billion Push',
      title: 'Nairobi National Park Tree Planting 6',
      description: 'National park conservation through tree planting.',
      category: 'Tree Planting Nairobi National Park 15 Billion Push'
    },
    {
      src: '/gallery/categories/tree-planting-nairobi-national-park-15-billion-push/IMG-20250813-WA0102.jpg',
      alt: 'Tree Planting Nairobi National Park 15 Billion Push',
      title: 'Nairobi National Park Tree Planting 7',
      description: 'Ecosystem restoration in Nairobi National Park.',
      category: 'Tree Planting Nairobi National Park 15 Billion Push'
    },
    {
      src: '/gallery/categories/tree-planting-nairobi-national-park-15-billion-push/IMG-20250813-WA0104.jpg',
      alt: 'Tree Planting Nairobi National Park 15 Billion Push',
      title: 'Nairobi National Park Tree Planting 8',
      description: 'Conservation activities in Nairobi National Park.',
      category: 'Tree Planting Nairobi National Park 15 Billion Push'
    },
    {
      src: '/gallery/categories/tree-planting-nairobi-national-park-15-billion-push/WhatsApp Image 2025-08-13 at 01.28.58_a86a1610.jpg',
      alt: 'Tree Planting Nairobi National Park 15 Billion Push',
      title: 'Nairobi National Park Tree Planting 9',
      description: 'Community participation in national park tree planting.',
      category: 'Tree Planting Nairobi National Park 15 Billion Push'
    },
    {
      src: '/gallery/categories/tree-planting-nairobi-national-park-15-billion-push/WhatsApp Image 2025-08-13 at 02.14.15_195d53dc.jpg',
      alt: 'Tree Planting Nairobi National Park 15 Billion Push',
      title: 'Nairobi National Park Tree Planting 10',
      description: 'Environmental conservation at Nairobi National Park.',
      category: 'Tree Planting Nairobi National Park 15 Billion Push'
    },
    {
      src: '/gallery/categories/tree-planting-nairobi-national-park-15-billion-push/WhatsApp Image 2025-08-13 at 02.14.15_ba5733e5.jpg',
      alt: 'Tree Planting Nairobi National Park 15 Billion Push',
      title: 'Nairobi National Park Tree Planting 11',
      description: 'Impact of tree planting efforts in Nairobi National Park.',
      category: 'Tree Planting Nairobi National Park 15 Billion Push'
    },

    // Tropical Heat Sponsorship In Kind (8 images) - ALL
    {
      src: '/gallery/categories/tropical-heat-sponsorship-in-kind/IMG-20250813-WA0136.jpg',
      alt: 'Tropical Heat Sponsorship In Kind',
      title: 'Tropical Heat Sponsorship 1',
      description: 'Tropical Heat sponsorship and partnership activities.',
      category: 'Tropical Heat Sponsorship In Kind'
    },
    {
      src: '/gallery/categories/tropical-heat-sponsorship-in-kind/IMG-20250813-WA0137.jpg',
      alt: 'Tropical Heat Sponsorship In Kind',
      title: 'Tropical Heat Sponsorship 2',
      description: 'In-kind sponsorship and environmental partnerships.',
      category: 'Tropical Heat Sponsorship In Kind'
    },
    {
      src: '/gallery/categories/tropical-heat-sponsorship-in-kind/IMG-20250813-WA0138.jpg',
      alt: 'Tropical Heat Sponsorship In Kind',
      title: 'Tropical Heat Sponsorship 3',
      description: 'Corporate partnerships for environmental initiatives.',
      category: 'Tropical Heat Sponsorship In Kind'
    },
    {
      src: '/gallery/categories/tropical-heat-sponsorship-in-kind/IMG-20250813-WA0139.jpg',
      alt: 'Tropical Heat Sponsorship In Kind',
      title: 'Tropical Heat Sponsorship 4',
      description: 'Sponsorship activities and environmental collaboration.',
      category: 'Tropical Heat Sponsorship In Kind'
    },
    {
      src: '/gallery/categories/tropical-heat-sponsorship-in-kind/IMG-20250813-WA0140.jpg',
      alt: 'Tropical Heat Sponsorship In Kind',
      title: 'Tropical Heat Sponsorship 5',
      description: 'Partnership events and sponsorship activities.',
      category: 'Tropical Heat Sponsorship In Kind'
    },
    {
      src: '/gallery/categories/tropical-heat-sponsorship-in-kind/IMG-20250813-WA0141.jpg',
      alt: 'Tropical Heat Sponsorship In Kind',
      title: 'Tropical Heat Sponsorship 6',
      description: 'Environmental sponsorship and support programs.',
      category: 'Tropical Heat Sponsorship In Kind'
    },
    {
      src: '/gallery/categories/tropical-heat-sponsorship-in-kind/IMG-20250813-WA0143.jpg',
      alt: 'Tropical Heat Sponsorship In Kind',
      title: 'Tropical Heat Sponsorship 7',
      description: 'In-kind support for environmental conservation.',
      category: 'Tropical Heat Sponsorship In Kind'
    },
    {
      src: '/gallery/categories/tropical-heat-sponsorship-in-kind/IMG-20250813-WA0144.jpg',
      alt: 'Tropical Heat Sponsorship In Kind',
      title: 'Tropical Heat Sponsorship 8',
      description: 'Impact of sponsorship partnerships on environmental projects.',
      category: 'Tropical Heat Sponsorship In Kind'
    },

    // Additional standalone category images from categories folder
    {
      src: '/gallery/categories/ab.jpg',
      alt: 'Environmental Activity',
      title: 'Environmental Activity',
      description: 'TAKA KAZI AFRICA environmental conservation activity.',
      category: 'Environmental Activities'
    },
    {
      src: '/gallery/categories/about1.jpg',
      alt: 'About TAKA KAZI AFRICA',
      title: 'About Us 1',
      description: 'Learn about TAKA KAZI AFRICA and our mission.',
      category: 'About Us'
    },
    {
      src: '/gallery/categories/about2.jpg',
      alt: 'About TAKA KAZI AFRICA',
      title: 'About Us 2',
      description: 'Our journey in environmental conservation.',
      category: 'About Us'
    },
    {
      src: '/gallery/categories/about3.jpg',
      alt: 'About TAKA KAZI AFRICA',
      title: 'About Us 3',
      description: 'Our commitment to environmental sustainability.',
      category: 'About Us'
    },
    {
      src: '/gallery/categories/about4.jpg',
      alt: 'About TAKA KAZI AFRICA',
      title: 'About Us 4',
      description: 'Building a sustainable future together.',
      category: 'About Us'
    },
    {
      src: '/gallery/categories/bee.jpg',
      alt: 'Environmental Conservation',
      title: 'Environmental Conservation',
      description: 'Protecting nature and biodiversity.',
      category: 'Environmental Conservation'
    },
    {
      src: '/gallery/categories/biz.jpg',
      alt: 'Environmental Business',
      title: 'Environmental Business',
      description: 'Sustainable business practices and environmental entrepreneurship.',
      category: 'Environmental Business'
    },
    {
      src: '/gallery/categories/circulareconomy.jpg',
      alt: 'Circular Economy',
      title: 'Circular Economy',
      description: 'Promoting circular economy principles for sustainability.',
      category: 'Circular Economy'
    },
    {
      src: '/gallery/categories/climateaction.jpg',
      alt: 'Climate Action',
      title: 'Climate Action',
      description: 'Taking action against climate change.',
      category: 'Climate Action'
    },
    {
      src: '/gallery/categories/Dr.Faith Rialem1685190321806.jpeg.jpg',
      alt: 'Dr. Faith Rialem',
      title: 'Dr. Faith Rialem',
      description: 'Environmental leadership and expertise.',
      category: 'Leadership'
    },
    {
      src: '/gallery/categories/George Scarf photo.jpg',
      alt: 'George Scarf',
      title: 'George Scarf',
      description: 'Environmental conservation leadership.',
      category: 'Leadership'
    },
    {
      src: '/gallery/categories/lee.JPG',
      alt: 'Environmental Leader',
      title: 'Environmental Leader',
      description: 'Leadership in environmental conservation.',
      category: 'Leadership'
    },
    {
      src: '/gallery/categories/rusinga.jpg',
      alt: 'Rusinga Environmental Project',
      title: 'Rusinga Environmental Project',
      description: 'Environmental conservation efforts in Rusinga.',
      category: 'Rusinga Projects'
    },
    {
      src: '/gallery/categories/rusingapeaks.jpg',
      alt: 'Rusinga Peaks',
      title: 'Rusinga Peaks',
      description: 'Environmental conservation in Rusinga region.',
      category: 'Rusinga Projects'
    },
    {
      src: '/gallery/categories/youthempowerment.jpg',
      alt: 'Youth Empowerment',
      title: 'Youth Empowerment',
      description: 'Empowering youth for environmental leadership.',
      category: 'Youth Empowerment'
    }
  ]

  // Define categories based on actual folder names
  const categories = [
    'all',
    'About Us',
    'Africa Climate Summit',
    'Circular Economy',
    'Climate Action',
    'Community Engagement CSR', 
    'Earth Rise Fridays Campaign',
    'Environmental Activities',
    'Environmental Business',
    'Environmental Conservation',
    'Environmental Education',
    'Goals',
    'Green Bees Movement',
    'Green Talks Workshops Conferences',
    'Innovation Eco Entrepreneurship',
    'Leadership',
    'Mental Health Nature Walks',
    'Project Highlights',
    'Public Speaking Journalism Club',
    'Rusinga Projects',
    'Rusinga Speaks',
    'SESC Pre World Environment Day 2025',
    'Speaker Series',
    'TAKA 47 Campaign',
    'TAKA Green Project Schools',
    'TAKA Kazi Africa Merchandise',
    'TAKA Management Project',
    'TAKA Plastic Collection Challenge WED',
    'Team Photos',
    'Tree Planting Environmental Stewardship',
    'Tree Planting Nairobi National Park 15 Billion Push',
    'Tropical Heat Sponsorship In Kind',
    'Waste Management',
    'World Environment Day 2023',
    'Youth Empowerment',
    'Youth Empowerment Green Leadership'
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
            community empowerment, and sustainable development initiatives. Browse through <strong>{galleryImages.length}</strong> images 
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
                  setSelectedImage(null)
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
