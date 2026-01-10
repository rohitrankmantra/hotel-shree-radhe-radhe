"use client"

import { Mountain, Leaf, Zap, Sparkles } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Mountain Stay",
    description: "Comfortable rooms with breathtaking Himalayan views",
    icon: Mountain,
  },
  {
    id: 2,
    title: "Pure Vegetarian Bhojan",
    description: "Satvik cuisine prepared with devotion & purity",
    icon: Leaf,
  },
  {
    id: 3,
    title: "Pilgrim Friendly",
    description: "Sacred, calm spaces for worship & reflection",
    icon: Zap,
  },
  {
    id: 4,
    title: "Peaceful Surroundings",
    description: "Surrounded by untouched nature & silence",
    icon: Sparkles,
  },
]

export default function ExperienceStrip() {
  return (
    <section className="relative py-12 bg-linear-to-b from-background via-muted/30 to-background">
      
      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <div className="max-w-3xl space-y-5">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium tracking-wider uppercase">
            Shree Radhe Radhe
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Experiences That
            <br className="hidden sm:block" />
            <span className="text-primary">Nourish Body & Soul</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            More than just a stay — a spiritually calm retreat offering pure food,
            peaceful surroundings, and heartfelt hospitality near Yamunotri.
          </p>
        </div>
      </div>

      {/* GRID → ONE ROW ON DESKTOP */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            grid gap-6 md:gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {experiences.map((exp) => {
            const Icon = exp.icon

            return (
              <div
                key={exp.id}
                className="group transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col hover:shadow-xl hover:border-primary/40 transition-all">
                  
                  {/* ICON */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition">
                      <Icon className="w-7 h-7 text-primary drop-shadow" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* HOVER LINE */}
                  <div className="mt-6 h-1 w-12 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
