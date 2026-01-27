"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const rooms = [
  {
    id: 1,
    name: "Deluxe Mountain View Room",
    image: "/Rooms/hotel-room8.jpeg",
    description:
      "Spacious deluxe room with plush bedding, warm interiors, and a private window opening to serene Himalayan views.",
  },
  {
    id: 2,
    name: "Executive Valley Suite",
    image: "/Rooms/hotel-room6.jpeg",
    description:
      "An elegant suite designed for comfort, featuring a seating area, modern amenities, and panoramic valley scenery.",
  },
  {
    id: 3,
    name: "Premium Family Room",
    image: "/Rooms/hotel-room1.jpeg",
    description:
      "Perfect for families, this room offers ample space, cozy furnishings, and a relaxing ambiance for a peaceful stay.",
  },
]

export default function RoomsPreview() {
  const [current, setCurrent] = useState<number>(0)

  const next = () => setCurrent((prev) => (prev + 1) % rooms.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + rooms.length) % rooms.length)

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* SECTION HEADER */}
        <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm uppercase tracking-wider">
          Stay With Comfort
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Our Rooms & Suites
        </h2>

        <p className="text-sm sm:text-base text-foreground/60 mb-8 max-w-2xl">
          Each room is thoughtfully designed to provide comfort and tranquility
        </p>

        {/* SLIDER */}
        <div className="relative h-105 sm:h-120 md:h-155 rounded-2xl overflow-hidden">
          {rooms.map((room, idx) => {
            const isActive = idx === current

            return (
              <div
                key={room.id}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {/* IMAGE */}
                <img
                  src={room.image}
                  alt={room.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
                    isActive ? "scale-100" : "scale-100"
                  }`}
                />

                {/* GRADIENT FOR TEXT READABILITY */}
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-linear-to-t from-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="relative z-20 h-full flex items-end">
                  <div className="w-full px-5 sm:px-8 md:px-12 pb-10 sm:pb-14 text-white text-center">
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold mb-5 max-w-3xl mx-auto drop-shadow-lg">
                      {room.name}
                    </h3>

                    <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                      {room.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30
                       p-4 rounded-full bg-white/30 hover:bg-white/50 transition"
          >
            <ChevronLeft size={26} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30
                       p-4 rounded-full bg-white/30 hover:bg-white/50 transition"
          >
            <ChevronRight size={26} />
          </button>

          {/* INDICATORS */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {rooms.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`rounded-full transition-all ${
                  idx === current
                    ? "w-6 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* VIEW ALL */}
        <div className="mt-10 flex justify-center">
          <a
            href="/rooms-stays"
            className="font-serif text-base sm:text-lg text-accent hover:text-primary underline underline-offset-4"
          >
            Explore All Rooms
          </a>
        </div>
      </div>
    </section>
  )
}
