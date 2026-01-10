"use client"

export default function LocationPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT : MAP / IMAGE */}
          <div className="relative rounded-2xl overflow-hidden h-80 sm:h-96 shadow-lg">
            <img
              src="https://images.pexels.com/photos/35185649/pexels-photo-35185649.png?auto=compress&cs=tinysrgb&w=1200"
              alt="Yamunotri Road Location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>

          {/* RIGHT : CONTENT */}
          <div className="space-y-6">

            {/* SUBHEADING */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium tracking-wider uppercase">
              Sacred Location
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
              Located on Sacred<br className="hidden sm:block" />
              <span className="text-primary">Yamunotri Road</span>
            </h2>

            <p className="text-foreground/70 leading-relaxed max-w-xl">
              Nestled in the heart of Devbhoomi Uttarakhand, Hotel Shree Radhe Radhe
              offers a peaceful halt for pilgrims and travelers, just minutes
              away from the sacred Yamunotri Yatra route.
            </p>

            {/* DISTANCE INFO */}
            <div className="space-y-4 pt-2">
              <div className="flex gap-4">
                <span className="text-primary font-serif text-2xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">From Dehradun</p>
                  <p className="text-sm text-foreground/60">
                    Approx. 250 km by road
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-primary font-serif text-2xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">From Rishikesh</p>
                  <p className="text-sm text-foreground/60">
                    Approx. 150 km by road
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-primary font-serif text-2xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">
                    Yamunotri Temple
                  </p>
                  <p className="text-sm text-foreground/60">
                    Only 6 km from hotel
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/location"
              className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium shadow-lg hover:opacity-90 transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
