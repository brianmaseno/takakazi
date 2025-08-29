'use client'

export const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taka Kazi Africa",
    "alternateName": ["TKA", "Taka Kazi"],
    "description": "Environmental conservation and youth empowerment organization transforming waste into opportunity across Africa",
    "url": "https://takakaziafrica.org",
    "logo": {
      "@type": "ImageObject",
      "url": "https://takakaziafrica.org/logo.png",
      "width": 400,
      "height": 400
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://takakaziafrica.org/gallery/best.jpg",
      "width": 1200,
      "height": 630
    },
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "George Otieno Ogola",
      "jobTitle": "Founder & Environmental Leader",
      "image": "https://takakaziafrica.org/founder.jpg"
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
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Taka Kazi Africa",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does Taka Kazi Africa do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Taka Kazi Africa is an environmental conservation organization focused on transforming waste into opportunity while empowering communities across Africa to create a cleaner, greener, and more sustainable future."
        }
      },
      {
        "@type": "Question", 
        "name": "How can I get involved with Taka Kazi Africa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get involved by volunteering for our programs, participating in tree planting activities, supporting our waste management initiatives, or making a donation to support our environmental conservation efforts."
        }
      },
      {
        "@type": "Question",
        "name": "What is the impact of Taka Kazi Africa's work?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "We have planted over 50,000 trees, recycled more than 500 tons of waste, and empowered thousands of young people across Africa through our environmental conservation and youth empowerment programs."
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