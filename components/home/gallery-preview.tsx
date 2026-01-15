"use client";

import { useEffect, useState } from "react";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Keyboard controls
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, activeIndex]);

  const nextImage = () =>
    setActiveIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );

  const prevImage = () =>
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );

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
                  setActiveIndex(idx);
                  setLightboxOpen(true);
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
      {lightboxOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center">

          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-6xl w-full px-6">
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="mx-auto max-h-[85vh] w-auto rounded-xl shadow-2xl"
            />

            {/* CLOSE */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              ✕
            </button>

            {/* PREV */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
            >
              ‹
            </button>

            {/* NEXT */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
            >
              ›
            </button>

            {/* CAPTION */}
            <p className="mt-4 text-center text-white/80 text-sm">
              {galleryImages[activeIndex].alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
