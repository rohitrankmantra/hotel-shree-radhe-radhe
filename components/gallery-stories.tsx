"use client"

import { Heart } from "lucide-react"


import cozy from "../public/gallery/cozy.jpg"
import forest from "../public/gallery/forest.jpg"
import luxury from "../public/gallery/luxury.jpg"
import mountain from "../public/gallery/mountain.jpg"
import nourishment from "../public/gallery/nourish.jpg"
import spiritual from "../public/gallery/spritual.jpg"


export default function GalleryStories() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">
          Stories from Our Guests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image:
                mountain.src,
              title: "Mountain Serenity",
              description: "Waking up to the majesty of snow-capped peaks and mist-covered valleys.",
            },
            {
              image:
              cozy.src,
              title: "Cozy Comfort",
              description: "Finding warmth and peace in thoughtfully designed rooms.",
            },
            {
              image:
                nourishment.src,
              title: "Pure Nourishment",
              description: "Savoring satvik meals that nourish body and soul.",
            },
            {
              image:
                luxury.src,
              title: "Luxury & Nature",
              description: "Experiencing premium hospitality amidst pristine surroundings.",
            },
            {
              image:
                spiritual.src,
              title: "Spiritual Awakening",
              description: "Finding inner peace through pilgrimage and contemplation.",
            },
            {
              image:
                forest.src,
              title: "Forest Embrace",
              description: "Surrounded by the healing energy of pine forests.",
            },
          ].map((story, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-xl border border-border hover:border-primary transition-all hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <Heart className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{story.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
