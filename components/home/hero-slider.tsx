"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  {
    src: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Welcome to Shree Radhe",
    subtitle: "Your sacred home near Yamunotri Dham",
  },
  {
    src: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Himalayan Serenity",
    subtitle: "Where spirituality meets tranquility",
  },
  {
    src: "https://images.pexels.com/photos/31029367/pexels-photo-31029367.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Divine Himalayan Views",
    subtitle: "Experience peace in Devbhoomi",
  },
  {
    src: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Spiritual Journey Begins",
    subtitle: "Close to the sacred Yamunotri Temple",
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5500)
  }

  useEffect(() => {
    startAutoplay()
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [])

  const next = () => {
    setCurrent((prev) => (prev + 1) % heroImages.length)
    startAutoplay()
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    startAutoplay()
  }

  return (
    <div className="relative w-full h-screen min-h-[75vh] overflow-hidden">
      {/* Background */}
      {heroImages.map((image, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1500ms ease-out
            ${idx === current ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
        >
          <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
        </div>
      ))}

      {/* Text */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center text-center px-6
        justify-center -translate-y-10 sm:translate-y-0"
      >
        <div className="max-w-3xl">
          <h1
            key={current}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl
            font-bold text-white mb-3 drop-shadow-lg"
          >
            {heroImages[current].title}
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-white/90
            max-w-2xl mx-auto drop-shadow-md">
            {heroImages[current].subtitle}
          </p>

          {/* Desktop Button */}
          <div className="hidden sm:block mt-10">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground
              px-8 py-4 rounded-full font-medium text-lg
              transition-all hover:scale-105 shadow-lg">
              Book Your Stay
            </button>
          </div>
        </div>
      </div>

      {/* Arrows (moved slightly DOWN on mobile) */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-between px-4 sm:px-10
        translate-y-10 sm:translate-y-0"
      >
        <button
          onClick={prev}
          className="p-3 rounded-full bg-black/40 hover:bg-black/60
          backdrop-blur text-white transition"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={next}
          className="p-3 rounded-full bg-black/40 hover:bg-black/60
          backdrop-blur text-white transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Mobile Button */}
      <div
        className="absolute inset-0 z-20 flex justify-center items-center
        translate-y-10 sm:hidden"
      >
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground
          px-7 py-3 rounded-full font-medium text-base
          transition-all hover:scale-105 shadow-lg">
          Book Your Stay
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx)
              startAutoplay()
            }}
            className={`h-3 rounded-full transition-all ${
              idx === current ? "bg-white w-8" : "bg-white/50 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
