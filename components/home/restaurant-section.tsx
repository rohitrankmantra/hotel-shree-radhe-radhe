"use client"

export default function RestaurantSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Food preparation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Satvik Bhojan</h2>
        <p className="text-lg text-foreground/80 leading-relaxed mb-6 max-w-2xl">
          Our vegetarian kitchen celebrates the principles of Satvik cuisine—pure, nourishing, and prepared with
          spiritual intention. Every meal is a journey into authentic taste and wellness.
        </p>
        <p className="text-base text-foreground/70 leading-relaxed max-w-2xl mb-8">
          From traditional Pahari delicacies to contemporary wellness dishes, our menu honors local traditions while
          catering to diverse dietary needs.
        </p>
        <a
          href="/restaurant"
          className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Explore Menu
        </a>
      </div>
    </section>
  )
}
