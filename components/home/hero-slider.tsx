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
  const [isPaused, setIsPaused] = useState(false)
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

  // Pause on hover (optional - remove if not wanted)
  const pauseAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  const resumeAutoplay = () => {
    if (!autoplayRef.current) startAutoplay()
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % heroImages.length)
    startAutoplay() // reset timer
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    startAutoplay()
  }

  return (
    <div 
      className="relative w-full h-screen min-h-175 overflow-hidden"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Background Images */}
      {heroImages.map((image, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1500 ease-out
            ${idx === current 
              ? "opacity-100 scale-105" 
              : "opacity-0 scale-100"}`}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <div className="max-w-4xl">
          <h1 
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight drop-shadow-lg"
            key={current} // for animation trigger
          >
            {heroImages[current].title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
            {heroImages[current].subtitle}
          </p>

          {/* Optional CTA */}
          <div className="mt-8 md:mt-12">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-lg">
              Book Your Stay
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all text-white opacity-70 hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all text-white opacity-70 hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx)
              startAutoplay()
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current 
                ? "bg-white w-10" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}