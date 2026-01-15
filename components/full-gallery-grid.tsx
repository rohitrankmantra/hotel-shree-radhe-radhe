"use client";

import { useState } from "react";
import { Filter, X, ChevronLeft, ChevronRight } from "lucide-react";

// NATURE
import nature1 from "../public/nature/nature2.jpg";
import nature2 from "../public/nature/nature3.jpg";
import nature3 from "../public/nature/nature4.jpg";

// ROOMS
import room1 from "../public/Rooms/hotel-room1.jpeg";
import room2 from "../public/Rooms/hotel-room2.jpeg";
import room3 from "../public/Rooms/hotel-room3.jpeg";

// FOOD
import food1 from "../public/foods/food1.jpg";
import food2 from "../public/foods/food2.jpg";
import food3 from "../public/foods/food3.jpg";

// SURROUNDINGS
import surroundings1 from "../public/nature/surr.jpg";
import surroundings2 from "../public/nature/surr2.jpg";
import surroundings3 from "../public/nature/surrounding3.jpg";

const galleryImages = [
  { id: 1, category: "nature", src: nature3.src, alt: "Mountain landscape" },
  { id: 2, category: "rooms", src: room1.src, alt: "Room interior" },
  { id: 3, category: "food", src: food1.src, alt: "Food preparation" },
  { id: 4, category: "surroundings", src: surroundings1.src, alt: "Hotel surroundings" },
  { id: 5, category: "rooms", src: room2.src, alt: "Luxury room" },
  { id: 6, category: "nature", src: nature2.src, alt: "Mountain view" },
  { id: 7, category: "food", src: food2.src, alt: "Healthy food" },
  { id: 8, category: "surroundings", src: surroundings2.src, alt: "Hotel surroundings" },
  { id: 9, category: "rooms", src: room3.src, alt: "Room detail" },
  { id: 10, category: "nature", src: nature1.src, alt: "Nature landscape" },
  { id: 11, category: "food", src: food3.src, alt: "Meal presentation" },
  { id: 12, category: "surroundings", src: surroundings3.src, alt: "Hotel area" },
];

export default function FullGalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* SVG RADIAL BLUR MESH BACKGROUND */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur stdDeviation="90" />
          </filter>
        </defs>

        <circle cx="200" cy="200" r="220" fill="#000" opacity="0.12" filter="url(#blur)" />
        <circle cx="1000" cy="250" r="200" fill="#000" opacity="0.10" filter="url(#blur)" />
        <circle cx="600" cy="700" r="260" fill="#000" opacity="0.08" filter="url(#blur)" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {["all", "nature", "rooms", "food", "surroundings"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all capitalize flex items-center gap-2 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/90 backdrop-blur border border-black/15 hover:border-black/40"
              }`}
            >
              {activeFilter === filter && <Filter className="w-4 h-4" />}
              {filter}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 auto-rows-fr">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                idx % 7 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="aspect-square bg-neutral-100">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-5">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center">
          <img
            src={filteredImages[lightboxIndex].src}
            alt=""
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
          />

          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center hover:bg-white/20 transition"
          >
            <X className="text-white" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((i) =>
                i === null ? 0 : (i - 1 + filteredImages.length) % filteredImages.length
              )
            }
            className="absolute left-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center hover:bg-white/20 transition"
          >
            <ChevronLeft className="text-white" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((i) =>
                i === null ? 0 : (i + 1) % filteredImages.length
              )
            }
            className="absolute right-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center hover:bg-white/20 transition"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      )}
    </section>
  );
}
