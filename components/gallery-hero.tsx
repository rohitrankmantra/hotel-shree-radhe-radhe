"use client"

//HERO IMAGE

import heroImage from "../public/gallary-hero.jpg"

export default function GalleryHero() {
  return (
    <section className="relative h-screen pt-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
            src={heroImage.src}
          alt="Gallery hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 text-balance">Our Gallery</h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          Moments of serenity, warmth, and Himalayan beauty captured throughout our sanctuary
        </p>
      </div>
    </section>
  )
}
