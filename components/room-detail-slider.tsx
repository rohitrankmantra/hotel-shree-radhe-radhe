"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const featuredRooms = [
  {
    id: 1,
    name: "Serenity Room",
    category: "Standard Room",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: "₹2,500",
    features: ["Mountain View", "Private Balcony", "Attached Bath"],
  },
  {
    id: 2,
    name: "Peak Suite",
    category: "Luxury Suite",
    image: "https://images.pexels.com/photos/3195656/pexels-photo-3195656.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: "₹4,500",
    features: ["Valley View", "Living Area", "Premium Amenities"],
  },
  {
    id: 3,
    name: "Forest Nest",
    category: "Deluxe Room",
    image: "https://images.pexels.com/photos/3488998/pexels-photo-3488998.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: "₹3,200",
    features: ["Forest View", "Natural Light", "Cozy Ambiance"],
  },
  {
    id: 4,
    name: "Dawn Room",
    category: "Standard Room",
    image: "https://images.pexels.com/photos/3025517/pexels-photo-3025517.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: "₹2,800",
    features: ["East Facing", "Sunrise View", "Modern Furnishing"],
  },
]

export default function RoomDetailSlider() {
  const [current, setCurrent] = useState<number>(0)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredRooms.length)
    }, 6000)
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % featuredRooms.length)
  const prev = () => setCurrent((prev) => (prev - 1 + featuredRooms.length) % featuredRooms.length)

  return (
    <section className="relative h-screen flex items-center bg-background">
      <div className="absolute inset-0 flex">
        {/* Image Side */}
        <div className="w-full md:w-3/5 relative overflow-hidden">
          {featuredRooms.map((room, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? "opacity-100" : "opacity-0"}`}
            >
              <img src={room.image || "/placeholder.svg"} alt={room.name} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Content Side */}
        <div className="w-full md:w-2/5 bg-background flex flex-col justify-center p-8 md:p-12">
          <div className="space-y-6">
            <div>
              <p className="text-accent text-sm font-medium mb-2 uppercase tracking-widest">
                {featuredRooms[current].category}
              </p>
              <h2 className="font-serif text-5xl font-bold text-foreground mb-4">{featuredRooms[current].name}</h2>
              <p className="text-3xl text-accent font-semibold">{featuredRooms[current].price}</p>
              <p className="text-foreground/60 text-sm mt-2">per night</p>
            </div>

            <div className="space-y-3">
              {featuredRooms[current].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <p className="text-foreground/70">{feature}</p>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex gap-4 pt-6">
              <button
                onClick={prev}
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 pt-4">
              {featuredRooms.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`transition-all ${idx === current ? "w-8 h-1 bg-accent" : "w-1 h-1 bg-border hover:bg-foreground/30"}`}
                />
              ))}
            </div>

            <button className="mt-8 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity w-full md:w-auto">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
