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
            { location: "Yamunotri Temple", distance: "6 km", time: "15 mins" },
            { location: "Dehradun", distance: "250 km", time: "6-7 hours" },
            { location: "Rishikesh", distance: "150 km", time: "4 hours" },
            { location: "Haridwar", distance: "170 km", time: "4-5 hours" },
            { location: "Delhi", distance: "350 km", time: "8-9 hours" },
            { location: "Chandigarh", distance: "280 km", time: "6-7 hours" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-8 hover:border-accent transition-colors text-center"
            >
              <p className="text-foreground/60 text-sm mb-2">Distance from</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{item.location}</h3>
              <p className="text-accent font-semibold text-lg mb-2">{item.distance}</p>
              <p className="text-foreground/70 text-sm">Approximately {item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
