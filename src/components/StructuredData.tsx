'use client'

interface EventSchemaProps {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: {
    name: string
    address: string
  }
  organizer?: string
  image?: string
  url?: string
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  organizer = "Taka Kazi Africa",
  image = "https://takakazi.africa/logo.png",
  url = "https://takakazi.africa"
}: EventSchemaProps) {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "startDate": startDate,
    "endDate": endDate || startDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": location.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": location.address,
        "addressCountry": "Kenya"
      }
    },
    "image": image,
    "organizer": {
      "@type": "Organization",
      "name": organizer,
      "url": "https://takakazi.africa"
    },
    "url": url
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
    />
  )
}

interface ProjectSchemaProps {
  name: string
  description: string
  url?: string
  image?: string
  fundingGoal?: number
  currency?: string
  dateCreated?: string
}

export function ProjectSchema({
  name,
  description,
  url = "https://takakaziafrica.org",
  image = "https://takakaziafrica.org/logo.png",
  fundingGoal,
  currency = "USD",
  dateCreated
}: ProjectSchemaProps) {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": name,
    "description": description,
    "url": url,
    "image": image,
    "creator": {
      "@type": "Organization",
      "name": "Taka Kazi Africa",
      "url": "https://takakaziafrica.org"
    },
    "dateCreated": dateCreated || new Date().toISOString(),
    "category": "Environmental Conservation",
    "keywords": [
      "environmental conservation",
      "sustainability",
      "climate action",
      "community development",
      "Africa"
    ],
    ...(fundingGoal && {
      "funding": {
        "@type": "Grant",
        "amount": {
          "@type": "MonetaryAmount",
          "currency": currency,
          "value": fundingGoal
        }
      }
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
    />
  )
}