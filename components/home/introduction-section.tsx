"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const featureImages = [
  {
    src: "/Rooms/hotel-room1.jpeg",
    alt: "Cozy hotel room with Himalayan view",
  },
  {
    src: "/Rooms/hotel-room3.jpeg",
    alt: "Traditional Indian restaurant seating",
  },
  {
    src: "/Rooms/view8.jpeg",
    alt: "Dining Table with natural light",
  },
  {
    src: "/Rooms/hotel-room7.jpeg",
    alt: "Mountain view from the balcony",
  },
]

export default function IntroductionSection() {
  return (
    <section className="relative py-10 sm:py-12 bg-linear-to-b from-background via-background to-muted/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT SIDE - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">
                About Us
              </span>

              <h2 className="mt-3 sm:mt-4 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
                Your Peaceful Heaven
                <br className="hidden sm:block" />
                <span className="text-primary">Near Yamunotri</span>
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Situated on the sacred Yamunotri Yatra route, we offer more than just a stay —
                a calm, spiritual retreat with clean rooms, soul-soothing views, and heartfelt hospitality.
              </p>

              <p className="font-medium text-foreground/90">
                Our restaurant serves only{" "}
                <span className="text-primary font-semibold">
                  pure satvik vegetarian food
                </span>{" "}
                — fresh, light, and prepared with love using traditional Himalayan ingredients.
              </p>

              <p>
                Wake up to misty mountains, breathe pure air, and feel closer to peace every single day.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.03 }} className="inline-block pt-2 sm:pt-3">
              <Link href="/rooms" className="px-6 sm:px-7 py-3 sm:py-3.5 bg-primary text-primary-foreground rounded-full text-sm sm:text-base md:text-lg font-medium shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2.5 group">
                Explore Our services
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - 2x2 IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[260px] lg:auto-rows-[280px]"
          >
            {featureImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  <p className="text-xs sm:text-sm font-medium drop-shadow-lg">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
