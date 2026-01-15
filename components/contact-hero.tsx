"use client"
import hero from "../public/contact-hero.jpg"
export default function ContactHero() {
  return (
    <section className="relative h-166 pt-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
            src={hero.src}
            alt="Contact hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3 text-balance">Get in Touch</h1>
        <p className="text-lg md:text-xl text-white/90">We're here to assist with your booking and inquiries</p>
      </div>
    </section>
  )
}
