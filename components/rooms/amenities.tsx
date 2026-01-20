"use client"
import { Leaf, Droplet, Tv, Flame, Coffee, BookOpen, Activity, Headphones } from "lucide-react"
const amenities = [
  { icon: Leaf, name: "Organic Bedding", description: "Premium natural fabrics" },
  { icon: Droplet, name: "Mountain Water", description: "Natural spring water" },
  { icon: Tv, name: "Smart TV", description: "Entertainment system" },
  { icon: Flame, name: "Fireplace", description: "Cozy ambiance" },
  { icon: Coffee, name: "Tea Service", description: "24/7 beverages" },
  { icon: BookOpen, name: "Reading Corner", description: "Peaceful retreat" },
  { icon: Activity, name: "Yoga Space", description: "Meditation area" },
  { icon: Headphones, name: "Sound System", description: "Premium audio" },
]

export default function Amenities() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Room Amenities</h2>
        <p className="text-foreground/60 mb-12 max-w-2xl">
          Every detail is crafted for your comfort and spiritual journey
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, idx) => {
            const Icon = amenity.icon
            return (
              <div key={idx} className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full text-center hover:border-primary hover:bg-primary/5 transition-all hover:shadow-lg">
                  <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-serif text-sm font-semibold text-foreground mb-2">{amenity.name}</h3>
                  <p className="text-xs text-foreground/60">{amenity.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
