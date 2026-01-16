"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/Rooms/hotel-room1.jpeg",
    alt: "Himalayan mountain view near Yamunotri",
  },
  {
    src: "/Rooms/hotel-room2.jpeg",
    alt: "Peaceful hotel room interior with natural light",
  },
  {
    src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Pure vegetarian satvik food thali",
  },
  {
    src: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Hotel surroundings with greenery and calm nature",
  },
  {
    src: "/Rooms/hotel-room3.jpeg",
    alt: "Hotel surroundings with greenery and calm nature",
  },
  {
    src: "/Rooms/hotel-room6.jpeg",
    alt: "Hotel surroundings with greenery and calm nature",
  },
  {
    src: "/Rooms/hotel-room5.jpeg",
    alt: "Hotel surroundings with greenery and calm nature",
  },
  {
    src: "/Rooms/hotel-room7.jpeg",
    alt: "Hotel surroundings with greenery and calm nature",
  },
];

export default function GalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {/* ===== GALLERY SECTION ===== */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">

          {/* SUBHEADING */}
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium tracking-wider uppercase">
            Visual Journey
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Gallery
          </h2>

          <p className="text-foreground/60 mb-12 max-w-2xl">
            Glimpses of serenity, comfort, and spiritual calm at Shree Radhe Radhe
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setLightboxIndex(idx);
                }}
                className="group relative cursor-zoom-in overflow-hidden rounded-2xl h-64 sm:h-72 lg:h-80 focus:outline-none"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  className="
                    w-full h-full object-cover
                    scale-105
                    transition-transform duration-700 ease-out
                    group-hover:scale-110
                  "
                />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <a
              href="/gallery"
              className="font-serif text-lg text-accent hover:text-primary transition-colors underline underline-offset-4"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* ===== CUSTOM LIGHTBOX ===== */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center">
          <img
            src={galleryImages[lightboxIndex].src}
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
                i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length
              )
            }
            className="absolute left-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center hover:bg-white/20 transition"
          >
            <ChevronLeft className="text-white" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((i) =>
                i === null ? 0 : (i + 1) % galleryImages.length
              )
            }
            className="absolute right-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center hover:bg-white/20 transition"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      )}
    </>
  );
}
