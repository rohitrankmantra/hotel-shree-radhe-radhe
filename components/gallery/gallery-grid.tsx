"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImagesData = [
  { src: "/contact/contact-hero.jpeg", category: "rooms" },
  { src: "/trek/trek1.jpeg", category: "nature" },
  { src: "/Rooms/coridoor1.jpeg", category: "rooms" },
  { src: "/trek/nature1.jpeg", category: "nature" },
  { src: "/foods/food1.jpg", category: "food" },
  { src: "/services/temple2.jpeg", category: "spiritual" },
  { src: "/Rooms/coridoor.jpeg", category: "rooms" },
  { src: "/trek/nature2.jpeg", category: "nature" },
  { src: "/Rooms/hotel-room7.jpeg", category: "rooms" },
  { src: "/trek/nature3.jpeg", category: "nature" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "rooms", label: "Facilities" },
  { id: "nature", label: "Nature" },
  { id: "food", label: "Food" },
  { id: "spiritual", label: "Spiritual" },
];

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages = activeFilter === "all" 
    ? galleryImagesData 
    : galleryImagesData.filter(img => img.category === activeFilter);

  // Find the actual index in the full gallery for lightbox navigation
  const getFullIndex = (filteredIndex: number) => {
    let count = 0;
    for (let i = 0; i < galleryImagesData.length; i++) {
      if (activeFilter === "all" || galleryImagesData[i].category === activeFilter) {
        if (count === filteredIndex) return i;
        count++;
      }
    }
    return filteredIndex;
  };

  return (
    <>
      {/* SYMMETRIC BENTO GALLERY WITH LIGHTBOX */}
      <section className="bg-muted/20 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Gallery
          </h3>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === cat.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-muted hover:bg-muted/80 text-foreground border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
            {filteredImages.map((img, index) => (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group`}
                style={{
                  gridColumn: index === 0 ? "span 2" : index === 3 ? "span 2" : undefined,
                  gridRow: index === 0 ? "span 2" : index === 3 ? "span 2" : undefined,
                }}
              >
                <img 
                  src={img.src} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-full object-cover hover:scale-105 transition duration-700 cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                />
              </div>
            ))}
          </div>

          {/* LIGHTBOX */}
          {lightboxIndex !== null && (
            <div 
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
              onClick={() => setLightboxIndex(null)}
            >
              <img
                src={filteredImages[lightboxIndex].src}
                alt=""
                className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center hover:bg-white/20 transition"
              >
                <X className="text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((i) => (i === null ? 0 : (i - 1 + filteredImages.length) % filteredImages.length));
                }}
                className="absolute left-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center hover:bg-white/20 transition"
              >
                <ChevronLeft className="text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filteredImages.length));
                }}
                className="absolute right-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center hover:bg-white/20 transition"
              >
                <ChevronRight className="text-white" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
