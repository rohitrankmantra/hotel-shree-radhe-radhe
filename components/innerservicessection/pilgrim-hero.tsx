"use client"

import Image from "next/image"
import pilgrimHero from "@/public/services/pilgrim-hero.jpg"

export default function PilgrimHero() {
  return (
    <section className="relative h-screen pt-20 flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={pilgrimHero}
          alt="Pilgrim Service at Shree Radhe Radhe"
          className="w-full h-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 text-balance">
          Pilgrim Services
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Comprehensive support, guidance, and spiritual assistance for your Yamunotri pilgrimage
        </p>
      </div>
    </section>
  )
}
