"use client"

import { motion } from "framer-motion"

const featureImages = [
  {
    src: "/Rooms/hotel-room5.jpeg",
    alt: "Cozy hotel room with Himalayan view",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/Rooms/hotel-room3.jpeg",
    alt: "Traditional Indian restaurant seating",
  },
  {
    src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Pure satvik thali - vegetarian meal",
  },
]

export default function IntroductionSection() {
  return (
    <section className="relative py-10 sm:py-12 bg-linear-to-b from-background via-background to-muted/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT SIDE - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="space-y-5 sm:space-y-6 lg:space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">
                About Us
              </span>

              <h2 className="mt-4 sm:mt-5 font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Peaceful Heaven
                <br className="hidden sm:block" />
                <span className="text-primary">Near Yamunotri</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
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

            <motion.div whileHover={{ scale: 1.03 }} className="inline-block pt-3 sm:pt-4">
              <button className="px-6 sm:px-7 py-3 sm:py-3.5 bg-primary text-primary-foreground rounded-full text-sm sm:text-base md:text-lg font-medium shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2.5 group">
                Explore Our World
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - IMAGE COLLAGE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="
              relative grid 
              grid-cols-2 sm:grid-cols-3 
              gap-3 sm:gap-4 md:gap-6
              auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[220px]
            "
          >
            {featureImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12 + 0.3,
                  ease: "easeOut",
                }}
                className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-muted/40 group ${
                  image.className || ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover p-1.5 sm:p-2 transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  <p className="text-[10px] sm:text-xs md:text-sm font-medium drop-shadow-lg">
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
