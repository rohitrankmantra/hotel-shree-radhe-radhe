"use client"

export default function RouteGuidance() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">
          Route Guidance for Pilgrims
        </h2>

        <div className="space-y-8">
          {[
            {
              from: "From Dehradun",
              route:
                "Dehradun → Mussoorie → Naugaon → Purola → Barkot → Hanuman Chatti → Yamunotri",
              notes:
                "Most preferred and well-maintained route with scenic mountain views. Ideal for first-time pilgrims.",
            },
            {
              from: "From Rishikesh",
              route:
                "Rishikesh → Dehradun → Mussoorie → Purola → Barkot → Hanuman Chatti → Yamunotri",
              notes:
                "Popular spiritual route; slightly longer but better road conditions and facilities.",
            },
            {
              from: "From Haridwar",
              route:
                "Haridwar → Dehradun → Vikasnagar → Jamunapur → Damda →   naugaon → Barkot → Gangnani → Janki Jatti  → Yamunotri",
              notes:
                "Traditional pilgrimage route followed by Char Dham yatris.",
            },
          ].map((route, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-8 hover:border-accent transition-colors"
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {route.from}
              </h3>
              <p className="text-foreground/80 mb-4">
                <span className="text-accent font-semibold">Route: </span>
                {route.route}
              </p>
              <p className="text-foreground/70 text-sm bg-muted/50 rounded-lg p-4">
                {route.notes}
              </p>
            </div>
          ))}

          {/* Travel Tips */}
          <div className="mt-12 p-8 bg-accent/10 border border-accent rounded-xl">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Travel Tips
            </h3>
            <ul className="space-y-3">
              {[
                "Best time to visit: May to October (Char Dham Yatra season)",
                "Carry warm clothing; temperatures drop sharply at night",
                "Barkot is the main stay location before Yamunotri trek",
                "Hanuman Chatti is the last motorable point before Yamunotri",
                "Road conditions may be affected during monsoon (July–August)",
                "Start early morning for a smooth and safe journey",
              ].map((tip, idx) => (
                <li key={idx} className="flex gap-3 items-start text-foreground/80">
                  <span className="text-accent mt-1">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
