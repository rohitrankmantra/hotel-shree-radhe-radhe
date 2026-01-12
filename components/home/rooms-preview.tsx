"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const rooms = [
  {
    id: 1,
    name: "Deluxe Mountain View Room",
    image: "/Rooms/hotel-room1.jpeg",
    description:
      "Spacious deluxe room with plush bedding, warm interiors, and a private window opening to serene Himalayan views.",
  },
  {
    id: 2,
    name: "Executive Valley Suite",
    image: "/Rooms/hotel-room5.jpeg",
    description:
      "An elegant suite designed for comfort, featuring a seating area, modern amenities, and panoramic valley scenery.",
  },
  {
    id: 3,
    name: "Premium Family Room",
    image: "/Rooms/hotel-room7.jpeg",
    description:
      "Perfect for families, this room offers ample space, cozy furnishings, and a relaxing ambiance for a peaceful stay.",
  },
]


export default function RoomsPreview() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % rooms.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + rooms.length) % rooms.length)
  }

  return (
    <section className="relative py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* SUBHEADING (ADDED – SAME STYLE AS OTHER SECTIONS) */}
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium tracking-wider uppercase">
          Stay With Comfort
        </span>

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Our Rooms & Suites
        </h2>

        <p className="text-foreground/60 mb-12 max-w-2xl">
          Each room is thoughtfully designed to provide comfort and tranquility
        </p>

        {/* SLIDER */}
        <div className="relative h-96 md:h-screen max-h-96 md:max-h-none group overflow-hidden rounded-2xl">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* ROOM INFO */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-3">
                  {room.name}
                </h3>
                <p className="text-lg text-white/90 max-w-2xl">
                  {room.description}
                </p>
              </div>
            </div>
          ))}

          {/* NAVIGATION */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 hover:bg-white/40 transition-all text-white"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 hover:bg-white/40 transition-all text-white"
          >
            <ChevronRight size={24} />
          </button>

          {/* INDICATORS */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {rooms.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all ${
                  idx === current
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>

        {/* VIEW ALL */}
        <div className="mt-12 flex justify-center">
          <a
            href="/rooms"
            className="font-serif text-lg text-accent hover:text-primary transition-colors underline underline-offset-4"
          >
            Explore All Rooms
          </a>
        </div>
      </div>
    </section>
  )
}
