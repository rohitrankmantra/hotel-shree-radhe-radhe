"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Room = {
  id: number
  name: string
  category: string
  image: string
  price: string
  features: string[]
}

const featuredRooms: Room[] = [
  {
    id: 1,
    name: "Standard Double Room",
    category: "Standard Double Room (Blue/Gold)",
    image: "/rooms/hotel-room1.jpeg",
    price: "₹2,500",
    features: ["Mountain View", "Private Balcony", "Attached Bath"],
  },
  {
    id: 2,
    name: "Quadruple / Family Room",
    category: "Quadruple / Family Room",
    image: "/rooms/hotel-room6.jpeg",
    price: "₹4,500",
    features: ["King/Queen Bed", "Padded Headboard", "Nightstand with Glassware"],
  },
  {
    id: 3,
    name: "Deluxe Double Room (Pink Wood)",
    category: "Deluxe Double Room (Pink Wood)",
    image: "/rooms/hotel-room3.jpeg",
    price: "₹3,200",
    features: ["Two Double Beds", "Shared Headboard Console", "Tiled Flooring"],
  },
  {
    id: 4,
    name: "Standard Double Room (Red)",
    category: "Standard Double Room (Pink)",
    image: "/rooms/hotel-room7.jpeg",
    price: "₹2,800",
    features: ["King/Queen Bed", "Integrated Power Outlets", "Coordinated Linens"],
  },
]

export default function RoomDetailSlider() {
  const [current, setCurrent] = useState(0)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredRooms.length)
    }, 6000)

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [])

  const next = () =>
    setCurrent((prev) => (prev + 1) % featuredRooms.length)

  const prev = () =>
    setCurrent((prev) => (prev - 1 + featuredRooms.length) % featuredRooms.length)

  return (
    <section className="relative min-h-screen md:h-screen flex items-center bg-background">
      <div className="w-full flex flex-col md:flex-row md:absolute md:inset-0">
        
        {/* Image Side */}
        <div className="w-full md:w-3/5 relative h-[40vh] md:h-full overflow-hidden">
          {featuredRooms.map((room, idx) => (
            <div
              key={room.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile Navigation (Below Image, Above Content) */}
        <div className="flex md:hidden justify-center gap-6 py-4 bg-background border-b border-border">
          <button
            onClick={prev}
            className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-2/5 bg-background flex flex-col justify-center p-8 md:p-12">
          <div className="space-y-6">
            <div>
              <p className="text-accent text-sm font-medium mb-2 uppercase tracking-widest">
                {featuredRooms[current].category}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#22441A] font-bold mb-4">
                {featuredRooms[current].name}
              </h2>
              <p className="text-3xl text-accent font-semibold">
                {featuredRooms[current].price}
              </p>
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

            {/* Desktop Navigation (Hidden on Mobile) */}
            <div className="hidden md:flex gap-4 pt-6">
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
            <div className="flex gap-2 pt-4 justify-center md:justify-start">
              {featuredRooms.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`transition-all rounded-full ${
                    idx === current
                      ? "w-8 h-1 bg-accent"
                      : "w-1 h-1 bg-border hover:bg-foreground/30"
                  }`}
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