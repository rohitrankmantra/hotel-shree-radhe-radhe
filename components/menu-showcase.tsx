"use client"

import { Check } from "lucide-react"

export default function MenuShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-xl overflow-hidden h-96 md:h-full">
            <img
              src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Vegetarian meal"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Philosophy of Satvik Food
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Satvik cuisine is rooted in Ayurvedic principles and focuses on foods that are pure, fresh, and
              nourishing. Our kitchen sources ingredients from local Himalayan farms to ensure authenticity and quality.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Every meal is prepared with mindfulness and care, honoring the nutritional and spiritual benefits of
              vegetarian food. We believe that good food nourishes not just the body, but the soul.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Organic & Fresh</p>
                  <p className="text-sm text-foreground/60">Locally sourced ingredients</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Traditional Methods</p>
                  <p className="text-sm text-foreground/60">Prepared using age-old recipes</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Mindfully Made</p>
                  <p className="text-sm text-foreground/60">With care and intention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
