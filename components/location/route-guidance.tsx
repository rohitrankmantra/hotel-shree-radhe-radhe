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
              route: "Dehradun → Mussoorie → Chopta → Chouraari Ghat → Hanuman Chatti → Barkot",
              notes: "Scenic route with mountain views, recommended for first-time visitors",
            },
            {
              from: "From Rishikesh",
              route: "Rishikesh → Chopta → Chakrata → Hanuman Chatti → Barkot",
              notes: "Shorter route, passes through spiritual centers",
            },
            {
              from: "From Haridwar",
              route: "Haridwar → Yamuna Nagar → Chopata → Hanuman Chatti → Barkot",
              notes: "Direct route following the Yamuna River",
            },
          ].map((route, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-8 hover:border-accent transition-colors"
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{route.from}</h3>
              <p className="text-foreground/80 mb-4">
                <span className="text-accent font-semibold">Route: </span>
                {route.route}
              </p>
              <p className="text-foreground/70 text-sm bg-muted/50 rounded-lg p-4">{route.notes}</p>
            </div>
          ))}

          {/* Travel Tips */}
          <div className="mt-12 p-8 bg-accent/10 border border-accent rounded-xl">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Travel Tips</h3>
            <ul className="space-y-3">
              {[
                "Best time to visit: May to October (mild climate)",
                "Pack warm clothing even in summer months",
                "Road conditions vary; a 4x4 vehicle recommended during monsoon",
                "Allow 1-2 days for acclimatization before temple visit",
                "Local guides available for trekking and pilgrimage assistance",
                "Inform hotel in advance for pickup arrangements",
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
