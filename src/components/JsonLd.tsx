'use client'

export const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taka Kazi Africa",
    "alternateName": ["TKA", "Taka Kazi", "Takakazi Africa", "taka kazi africa", "TAKA KAZI AFRICA"],
    "description": "Environmental conservation and youth empowerment organization founded by George Ofunja, transforming waste into opportunity across Africa with over 50,000 trees planted and 500+ tons of waste recycled",
    "slogan": "Clean. Conserve. Recycle. Empower.",
    "url": "https://takakaziafrica.org",
    "logo": {
      "@type": "ImageObject",
      "url": "https://takakaziafrica.org/logo.png",
      "width": 400,
      "height": 400,
      "caption": "Taka Kazi Africa Logo - Environmental Conservation Organization founded by George Ofunja"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://takakaziafrica.org/gallery/best.jpg",
      "width": 1200,
      "height": 630,
      "caption": "Taka Kazi Africa environmental conservation activities led by founder George Ofunja"
    },
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "George Ofunja",
      "givenName": "George",
      "familyName": "Ofunja",
      "jobTitle": "Founder & Environmental Leader",
      "description": "Environmental conservation leader and founder of Taka Kazi Africa, dedicated to transforming waste into opportunity and empowering communities across Africa through sustainable development initiatives",
      "image": "https://takakaziafrica.org/founder.jpg",
      "nationality": "Kenyan",
      "worksFor": {
        "@type": "Organization",
        "name": "Taka Kazi Africa"
      },
      "knowsAbout": [
        "Environmental Conservation",
        "Youth Empowerment",
        "Sustainable Development",
        "Climate Action",
        "Waste Management",
        "Community Development",
        "African Environmental Issues"
      ]
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+254-XXX-XXXX",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Swahili"],
        "areaServed": "Africa"
      },
      {
        "@type": "ContactPoint",
        "email": "info@takakaziafrica.org",
        "contactType": "General Inquiries",
        "availableLanguage": ["English", "Swahili"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Kenya",
      "addressRegion": "Africa",
      "addressLocality": "Nairobi"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Kenya"
      },
      {
        "@type": "Place", 
        "name": "Africa"
      }
    ],
    "sameAs": [
      "https://facebook.com/takakazi",
      "https://twitter.com/takakazi",
      "https://instagram.com/takakazi",
      "https://linkedin.com/company/takakazi",
      "https://youtube.com/@takakazi"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "United Nations Global Compact"
      },
      {
        "@type": "Organization",
        "name": "African Development Bank"
      }
    ],
    "knowsAbout": [
      "Environmental Conservation",
      "Youth Empowerment", 
      "Sustainable Development",
      "Climate Action",
      "Waste Management",
      "Tree Planting",
      "Community Development",
      "Circular Economy",
      "SDG Implementation",
      "Carbon Footprint Reduction"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tree Planting Programs",
          "description": "Community-led tree planting initiatives across Africa",
          "provider": {
            "@type": "Organization",
            "name": "Taka Kazi Africa"
          }
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Waste Management Solutions",
          "description": "Innovative waste recycling and management programs",
          "provider": {
            "@type": "Organization",
            "name": "Taka Kazi Africa"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Youth Leadership Training",
          "description": "Empowering young environmental leaders across communities",
          "provider": {
            "@type": "Organization",
            "name": "Taka Kazi Africa"
          }
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "award": [
      "Environmental Conservation Excellence Award",
      "Youth Empowerment Recognition",
      "Sustainable Development Impact Award"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Environmental Conservation Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tree Planting Programs",
            "description": "Over 50,000 trees planted across Africa through community-led initiatives"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Waste Management Solutions",
            "description": "500+ tons of waste recycled through innovative circular economy programs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Youth Leadership Training",
            "description": "Empowering thousands of young environmental leaders across African communities"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Taka Kazi Africa",
    "alternateName": ["taka kazi africa", "TAKA KAZI AFRICA", "Takakazi Africa"],
    "url": "https://takakaziafrica.org",
    "description": "Official website of Taka Kazi Africa - Environmental conservation and youth empowerment organization",
    "publisher": {
      "@type": "Organization",
      "name": "Taka Kazi Africa"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://takakaziafrica.org/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Taka Kazi Africa"
    }
  }

  const nonprofitSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Taka Kazi Africa",
    "alternateName": "TKA",
    "description": "Non-profit organization focused on environmental conservation and youth empowerment across Africa",
    "mission": "To transform waste into opportunity while empowering communities to create a cleaner, greener, and more sustainable future",
    "url": "https://takakaziafrica.org",
    "logo": "https://takakaziafrica.org/logo.png",
    "nonprofitStatus": "Nonprofit501c3",
    "seeks": {
      "@type": "Grant",
      "name": "Environmental Conservation Funding",
      "description": "Seeking funding for tree planting, waste management, and youth empowerment programs",
      "amount": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "50000"
      }
    },
    "actionableFeedbackPolicy": "https://takakazi.africa/feedback",
    "diversityPolicy": "https://takakazi.africa/diversity", 
    "ethicsPolicy": "https://takakazi.africa/ethics",
    "ownershipFundingInfo": "https://takakazi.africa/funding"
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://takakaziafrica.org"
      }
    ]
  }

  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "George Ofunja",
    "givenName": "George",
    "familyName": "Ofunja",
    "description": "Environmental conservation leader, founder of Taka Kazi Africa, and champion of sustainable development across Africa. George has led initiatives that planted over 50,000 trees and recycled 500+ tons of waste while empowering thousands of young people in environmental stewardship.",
    "jobTitle": "Founder & CEO, Environmental Conservation Leader",
    "worksFor": {
      "@type": "Organization",
      "name": "Taka Kazi Africa",
      "url": "https://takakaziafrica.org"
    },
    "foundingOrganization": {
      "@type": "Organization",
      "name": "Taka Kazi Africa"
    },
    "nationality": "Kenyan",
    "birthPlace": "Kenya",
    "image": "https://takakaziafrica.org/founder.jpg",
    "url": "https://takakaziafrica.org/about/founder",
    "knowsAbout": [
      "Environmental Conservation",
      "Youth Empowerment",
      "Sustainable Development",
      "Climate Action",
      "Waste Management",
      "Tree Planting",
      "Community Development",
      "Circular Economy",
      "African Environmental Issues",
      "NGO Leadership",
      "Environmental Education"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Environmental Conservation Leader",
      "occupationLocation": {
        "@type": "Place",
        "name": "Africa"
      },
      "skills": [
        "Environmental Leadership",
        "Youth Mentoring",
        "Sustainable Development",
        "Community Organizing",
        "Project Management"
      ]
    },
    "award": [
      "Environmental Leadership Award",
      "Youth Empowerment Recognition",
      "Sustainable Development Impact Award"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Environmental Leaders Network Africa"
      },
      {
        "@type": "Organization",
        "name": "Global Youth Climate Action"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who founded Taka Kazi Africa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Taka Kazi Africa was founded by George Ofunja, an environmental conservation leader dedicated to transforming waste into opportunity and empowering communities across Africa through sustainable development initiatives."
        }
      },
      {
        "@type": "Question",
        "name": "What is Taka Kazi Africa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Taka Kazi Africa is an environmental conservation organization founded by George Ofunja. Taka Kazi Africa focuses on transforming waste into opportunity while empowering communities across Africa to create a cleaner, greener, and more sustainable future. Taka Kazi Africa has planted over 50,000 trees and recycled more than 500 tons of waste."
        }
      },
      {
        "@type": "Question", 
        "name": "How can I get involved with Taka Kazi Africa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get involved by volunteering for our programs, participating in tree planting activities, supporting our waste management initiatives, or making a donation to support our environmental conservation efforts led by founder George Ofunja."
        }
      },
      {
        "@type": "Question",
        "name": "What is the impact of Taka Kazi Africa's work?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Under the leadership of founder George Ofunja, we have planted over 50,000 trees, recycled more than 500 tons of waste, and empowered thousands of young people across Africa through our environmental conservation and youth empowerment programs."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Taka Kazi Africa based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Taka Kazi Africa, founded by George Ofunja, is based in Kenya but operates across Africa, focusing on environmental conservation, youth empowerment, and sustainable development initiatives throughout the continent."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nonprofitSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}