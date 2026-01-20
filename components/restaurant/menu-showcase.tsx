"use client"

import { Leaf, CookingPot, Sparkles } from "lucide-react"

export default function MenuShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden h-96 md:h-115 group">
            <img
              src="/foods/satvik.jpg"
              alt="Satvik vegetarian meal"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          {/* CONTENT */}
          <div>
            <span className="inline-block mb-3 text-sm tracking-widest uppercase text-primary/80">
              Satvik Philosophy
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Philosophy of Satvik Food
            </h2>

            <p className="text-foreground/70 leading-relaxed mb-6">
              Satvik cuisine is rooted in Ayurvedic wisdom and emphasizes purity,
              freshness, and balance. Our kitchen sources ingredients from local
              Himalayan farms to preserve authenticity and nutritional value.
            </p>

            <p className="text-foreground/70 leading-relaxed mb-10">
              Each meal is prepared with mindfulness and devotion, respecting the
              spiritual and physical benefits of vegetarian food — nourishing not
              just the body, but also the soul.
            </p>

            {/* POINTS */}
            <div className="space-y-6">

              {/* Organic */}
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Organic & Fresh
                  </p>
                  <p className="text-sm text-foreground/60">
                    Locally sourced, chemical-free Himalayan ingredients
                  </p>
                </div>
              </div>

              {/* Traditional */}
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CookingPot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Traditional Cooking Methods
                  </p>
                  <p className="text-sm text-foreground/60">
                    Prepared using age-old recipes and slow-cooking techniques
                  </p>
                </div>
              </div>

              {/* Mindful */}
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Mindfully Prepared
                  </p>
                  <p className="text-sm text-foreground/60">
                    Cooked with care, devotion, and positive intention
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
