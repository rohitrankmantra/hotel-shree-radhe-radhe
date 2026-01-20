"use client"

export default function ContactHero() {
  return (
    <section className="relative h-screen pt-20 flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/contact/contact-hero.jpeg"
          alt="Contact Shree Radhe Radhe Yamunotri"
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
          Get in Touch
        </h1>

        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          We’re here to help you plan a peaceful and comfortable stay at
          <span className="font-medium"> Shree Radhe Radhe</span>, Yamunotri.
          Reach out anytime — we’re always available.
        </p>
      </div>
    </section>
  )
}
