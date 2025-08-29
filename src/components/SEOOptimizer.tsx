'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface SEOOptimizerProps {
  title?: string
  description?: string
  image?: string
  article?: boolean
  published?: string
  modified?: string
  author?: string
}

export default function SEOOptimizer({
  title,
  description,
  image,
  article = false,
  published,
  modified,
  author
}: SEOOptimizerProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views for analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-expect-error - gtag is loaded externally
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pathname,
      })
    }

    // Add breadcrumb structured data
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": generateBreadcrumbs(pathname)
    }

    // Add article structured data if it's an article
    if (article && title && description) {
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image || "https://takakazi.africa/logo.png",
        "author": {
          "@type": "Organization",
          "name": author || "Taka Kazi Africa"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Taka Kazi Africa",
          "logo": {
            "@type": "ImageObject",
            "url": "https://takakazi.africa/logo.png"
          }
        },
        "datePublished": published || new Date().toISOString(),
        "dateModified": modified || new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://takakaziafrica.org${pathname}`
        }
      }

      addStructuredData('article-schema', articleSchema)
    }

    addStructuredData('breadcrumb-schema', breadcrumbSchema)

    return () => {
      // Cleanup structured data on unmount
      removeStructuredData('breadcrumb-schema')
      if (article) {
        removeStructuredData('article-schema')
      }
    }
  }, [pathname, title, description, image, article, published, modified, author])

  return null
}

function generateBreadcrumbs(pathname: string) {
  const paths = pathname.split('/').filter(Boolean)
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://takakaziafrica.org"
    }
  ]

  let currentPath = ''
  paths.forEach((path, index) => {
    currentPath += `/${path}`
    const name = path.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
    
    breadcrumbs.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": `https://takakaziafrica.org${currentPath}`
    })
  })

  return breadcrumbs
}

function addStructuredData(id: string, data: Record<string, unknown>) {
  // Remove existing script if it exists
  removeStructuredData(id)
  
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = id
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

function removeStructuredData(id: string) {
  const existingScript = document.getElementById(id)
  if (existingScript) {
    existingScript.remove()
  }
}