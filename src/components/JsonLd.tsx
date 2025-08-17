'use client'

export const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taka Kazi Africa",
    "description": "Environmental conservation and youth empowerment organization transforming waste into opportunity across Africa",
    "url": "https://takakazi.africa",
    "logo": "https://takakazi.africa/logo.png",
    "image": "https://takakazi.africa/gallery/best.jpg",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "George Otieno Ogola",
      "jobTitle": "Founder & Environmental Leader"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-XXX-XXXX",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Swahili"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Kenya",
      "addressRegion": "Africa"
    },
    "areaServed": "Africa",
    "sameAs": [
      "https://facebook.com/takakazi",
      "https://twitter.com/takakazi",
      "https://instagram.com/takakazi",
      "https://linkedin.com/company/takakazi"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "United Nations Global Compact"
    },
    "knowsAbout": [
      "Environmental Conservation",
      "Youth Empowerment",
      "Sustainable Development",
      "Climate Action",
      "Waste Management",
      "Tree Planting",
      "Community Development"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Environmental Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tree Planting Programs",
            "description": "Community-led tree planting initiatives across Africa"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Waste Management Solutions",
            "description": "Innovative waste recycling and management programs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Youth Leadership Training",
            "description": "Empowering young environmental leaders across communities"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Taka Kazi Africa",
    "url": "https://takakazi.africa",
    "description": "Official website of Taka Kazi Africa - Environmental conservation and youth empowerment organization",
    "publisher": {
      "@type": "Organization",
      "name": "Taka Kazi Africa"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://takakazi.africa/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const nonprofitSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Taka Kazi Africa",
    "alternateName": "TKA",
    "description": "Non-profit organization focused on environmental conservation and youth empowerment across Africa",
    "mission": "To transform waste into opportunity while empowering communities to create a cleaner, greener, and more sustainable future",
    "url": "https://takakazi.africa",
    "logo": "https://takakazi.africa/logo.png",
    "nonprofitStatus": "NonprofitANBI",
    "seeks": {
      "@type": "Grant",
      "name": "Environmental Conservation Funding",
      "description": "Seeking funding for tree planting, waste management, and youth empowerment programs"
    },
    "actionableFeedbackPolicy": "https://takakazi.africa/feedback",
    "diversityPolicy": "https://takakazi.africa/diversity",
    "ethicsPolicy": "https://takakazi.africa/ethics"
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
    </>
  )
}