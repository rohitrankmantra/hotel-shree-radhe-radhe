"use client"

import stayHero from "@/public/services/tour.png"

export default function StayHero() {
  return (
    <section className="relative h-screen pt-20 flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={stayHero.src}
          alt="Stay at Shree Radhe Radhe Yamunotri"
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
          Stay Services
        </h1>

        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Experience peaceful, comfortable, and spiritually enriching stays at
          <span className="font-medium"> Shree Radhe Radhe</span>, Yamunotri
        </p>
      </div>
    </section>
  )
}
