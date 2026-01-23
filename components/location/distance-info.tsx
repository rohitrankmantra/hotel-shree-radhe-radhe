"use client"

export default function DistanceInfo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">
          Distances from Key Locations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { location: "Yamunotri Temple", distance: "40 km approx. (35 km by transport + 5 km walk)" },
            { location: "Dehradun", distance: "144 km approx." },
            { location: "Rishikesh", distance: "184 km approx." },
            { location: "Haridwar", distance: "198 km approx." },
            { location: "Delhi", distance: "420 km approx." },
            { location: "Triveni Ghat Gangani", distance: "400 m approx." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-8 hover:border-accent transition-colors text-center"
            >
              <p className="text-foreground/60 text-sm mb-2">Distance from</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{item.location}</h3>
              <p className="text-accent font-semibold text-lg mb-2">{item.distance}</p>
          
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
