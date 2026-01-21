"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

// TYPES
interface ServiceItem {
  title: string
  description: string
  image: string
  details: string[]
}

const serviceData: Record<string, ServiceItem[]> = {
  stay: [
    {
      title: "Room Service",
      description: "24/7 in-room dining and comfort services",
      image: "/services/room.jpg",
      details: ["In-room meals", "Laundry service", "Room maintenance", "Turndown service"],
    },
    {
      title: "Housekeeping",
      description: "Daily cleaning and maintenance",
      image: "/services/keeping.jpg",
      details: ["Daily cleaning", "Fresh linens", "Toiletries", "Room tidying"],
    },
    {
      title: "Concierge",
      description: "Personal assistance and arrangements",
      image: "/services/ring.jpg",
      details: ["Information", "Reservations", "Travel planning", "Local advice"],
    },
  ],

  bhojan: [
    {
      title: "Vegetarian Cuisine",
      description: "Pure satvik meals prepared daily",
      image: "/services/veg.jpg",
      details: ["Organic ingredients", "Traditional recipes", "Fresh preparation", "Dietary accommodations"],
    },
    {
      title: "Room Dining",
      description: "Meals served in the comfort of your room",
      image: "/services/dining.jpg",
      details: ["Breakfast service", "Lunch options", "Dinner delivery", "Special requests"],
    },
    {
      title: "Wellness Menu",
      description: "Health-conscious food options",
      image: "/services/menu.jpg",
      details: ["Ayurvedic meals", "Low-calorie options", "Digestive foods", "Herbal beverages"],
    },
  ],

  pilgrim: [
    {
      title: "Temple Assistance",
      description: "Support for pilgrimage to Yamunotri",
      image: "/services/temple1.jpeg",
      details: ["Temple coordination", "Prayer arrangements", "Guides available", "Ritual support"],
    },
    {
      title: "Spiritual Guidance",
      description: "Meditation and wellness programs",
      image: "/services/temple2.jpeg",
      details: ["Yoga sessions", "Meditation classes", "Expert guidance", "Wellness programs"],
    },
    {
      title: "Sacred Ceremonies",
      description: "Traditional rituals and blessings",
      image: "/services/temple.png",
      details: ["Prayer sessions", "Blessings", "Rituals", "Sacred practices"],
    },
  ],

  travel: [
    {
      title: "Transportation",
      description: "Comfortable vehicle arrangements",
      image: "/trek/trek3.jpeg",
      details: ["Local travel", "Airport pickups", "Tour arrangements", "Group transport"],
    },
    {
      title: "Route Guidance",
      description: "Expert navigation and planning",
      image: "/trek/trek6.jpeg",
      details: ["Best routes", "Safety tips", "Local knowledge"],
    },
    {
      title: "Tour Packages",
      description: "Curated travel experiences",
      image: "/trek/trek8.jpeg",
      details: ["Day trips", "Multi-day tours", "Adventure packages", "Cultural tours"],
    },
  ],
}

// PROPS
interface ServiceCategoryProps {
  category: "stay" | "bhojan" | "pilgrim" | "travel"
  title: string
}

export default function ServiceCategory({ category, title }: ServiceCategoryProps) {
  const services = serviceData[category]

  return (
    <section className={`py-20 ${category === "bhojan" ? "bg-muted/30" : "bg-background"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          {title}
        </h2>

        <p className="text-foreground/60 mb-12 max-w-2xl">
          Dedicated support for every aspect of your stay at Shree Radhe Radhe, Yamunotri
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-xl border border-border hover:border-primary transition-colors"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 bg-card">
                <h3 className="font-serif text-xl font-bold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-foreground/70 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm text-foreground/60">
                  {service.details.map((detail, didx) => (
                    <li key={didx} className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${category}`}
                  className="mt-6 block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
