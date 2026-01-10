"use client"

import { useState } from "react"
import { Filter } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    category: "nature",
    src: "https://images.pexels.com/photos/3370037/pexels-photo-3370037.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Mountain landscape",
  },
  {
    id: 2,
    category: "rooms",
    src: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Room interior",
  },
  {
    id: 3,
    category: "food",
    src: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Food preparation",
  },
  {
    id: 4,
    category: "surroundings",
    src: "https://images.pexels.com/photos/3489972/pexels-photo-3489972.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Hotel surroundings",
  },
  {
    id: 5,
    category: "rooms",
    src: "https://images.pexels.com/photos/3195656/pexels-photo-3195656.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Luxury room",
  },
  {
    id: 6,
    category: "nature",
    src: "https://images.pexels.com/photos/3025517/pexels-photo-3025517.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Mountain view",
  },
  {
    id: 7,
    category: "food",
    src: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Healthy food",
  },
  {
    id: 8,
    category: "surroundings",
    src: "https://images.pexels.com/photos/3488998/pexels-photo-3488998.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Hotel surroundings",
  },
  {
    id: 9,
    category: "rooms",
    src: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Room detail",
  },
  {
    id: 10,
    category: "nature",
    src: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Nature landscape",
  },
  {
    id: 11,
    category: "food",
    src: "https://images.pexels.com/photos/3570129/pexels-photo-3570129.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Meal presentation",
  },
  {
    id: 12,
    category: "surroundings",
    src: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Hotel area",
  },
]

export default function FullGalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {["all", "nature", "rooms", "food", "surroundings"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all capitalize flex items-center gap-2 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {activeFilter === filter && <Filter className="w-4 h-4" />}
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              className={`group overflow-hidden rounded-xl cursor-pointer ${idx % 6 === 0 || idx % 6 === 5 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div className="relative h-64 md:h-full overflow-hidden bg-muted">
                <img
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <p className="text-white font-serif text-lg">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
