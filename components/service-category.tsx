"use client"

import { ChevronRight } from "lucide-react"

const serviceData: Record<
  string,
  {
    title: string
    description: string
    image: string
    details: string[]
  }[]
> = {
  stay: [
    {
      title: "Room Service",
      description: "24/7 in-room dining and comfort services",
      image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: ["In-room meals", "Laundry service", "Room maintenance", "Turndown service"],
    },
    {
      title: "Housekeeping",
      description: "Daily cleaning and maintenance",
      image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: ["Daily cleaning", "Fresh linens", "Toiletries", "Room tidying"],
    },
    {
      title: "Concierge",
      description: "Personal assistance and arrangements",
      image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: ["Information", "Reservations", "Travel planning", "Local advice"],
    },
  ],
  bhojan: [
    {
      title: "Vegetarian Cuisine",
      description: "Pure satvik meals prepared daily",
      image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: ["Organic ingredients", "Traditional recipes", "Fresh preparation", "Dietary accommodations"],
    },
    {
      title: "Room Dining",
      description: "Meals served in the comfort of your room",
      image: "https://images.pexels.com/photos/3570129/pexels-photo-3570129.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: ["Breakfast service", "Lunch options", "Dinner delivery", "Special requests"],
    },
    {
      title: "Wellness Menu",
      description: "Health-conscious food options",
      image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: ["Ayurvedic meals", "Low-calorie options", "Digestive foods", "Herbal beverages"],
    },
  ],
  pilgrim: [
    {
      title: "Temple Assistance",
      description: "Support for pilgrimage to Yamunotri",
      image: "https://images.pexels.com/photos/3614365/pexels-photo-3614365.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: ["Temple coordination", "Prayer arrangements", "Guides available", "Ritual support"],
    },
    {
      title: "Spiritual Guidance",
      description: "Meditation and wellness programs",
      image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: ["Yoga sessions", "Meditation classes", "Expert guidance", "Wellness programs"],
    },
    {
      title: "Sacred Ceremonies",
      description: "Traditional rituals and blessings",
      image: "https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: ["Prayer sessions", "Blessings", "Rituals", "Sacred practices"],
    },
  ],
  travel: [
    {
      title: "Transportation",
      description: "Comfortable vehicle arrangements",
      image: "https://images.pexels.com/photos/3849586/pexels-photo-3849586.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: ["Local travel", "Airport pickups", "Tour arrangements", "Group transport"],
    },
    {
      title: "Route Guidance",
      description: "Expert navigation and planning",
      image: "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: ["Map guidance", "Best routes", "Safety tips", "Local knowledge"],
    },
    {
      title: "Tour Packages",
      description: "Curated travel experiences",
      image: "https://images.pexels.com/photos/3935683/pexels-photo-3935683.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: ["Day trips", "Multi-day tours", "Adventure packages", "Cultural tours"],
    },
  ],
}

interface ServiceCategoryProps {
  category: string
  title: string
}

export default function ServiceCategory({ category, title }: ServiceCategoryProps) {
  const services = serviceData[category] || []

  return (
    <section className={`py-20 ${services === serviceData.bhojan ? "bg-muted/30" : "bg-background"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 id={category} className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          {title}
        </h2>
        <p className="text-foreground/60 mb-12 max-w-2xl">Dedicated support for every aspect of your stay with us</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-xl border border-border hover:border-primary transition-colors"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 bg-card">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-foreground/70 text-sm mb-6">{service.description}</p>

                {/* Details */}
                <ul className="space-y-2 text-sm text-foreground/60">
                  {service.details.map((detail, didx) => (
                    <li key={didx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
