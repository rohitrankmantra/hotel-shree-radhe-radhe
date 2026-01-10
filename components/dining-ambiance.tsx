"use client"

export default function DiningAmbiance() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Warm & Welcoming Dining
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Our dining space reflects the warmth and hospitality of the mountains. Wooden furniture, soft lighting,
              and large windows create an intimate atmosphere where you can enjoy your meal while taking in the
              beautiful surroundings.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Whether you choose to dine in our restaurant or enjoy meals in your room, we ensure every bite is a
              memorable experience.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <span className="text-2xl">🏔️</span>
                <p className="text-foreground">Mountain views from dining area</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-2xl">🪟</span>
                <p className="text-foreground">Natural lighting & ventilation</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-2xl">🌿</span>
                <p className="text-foreground">Eco-friendly dining setup</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-2xl">👥</span>
                <p className="text-foreground">Intimate groups or private dining</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden h-96 md:h-full">
            <img
              src="https://images.pexels.com/photos/1144366/pexels-photo-1144366.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dining ambiance"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
