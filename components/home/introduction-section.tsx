"use client"

import { motion } from "framer-motion"

const featureImages = [
  {
    src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Cozy hotel room with Himalayan view",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Traditional Indian restaurant seating",
  },
  {
    src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Pure satvik thali - vegetarian meal",
  },
]

export default function IntroductionSection() {
  return (
    <section className="relative py-12   bg-linear-to-b from-background via-background to-muted/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="space-y-6 lg:space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium tracking-wider uppercase">
                About Us
              </span>
              <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Peaceful Heaven<br className="hidden sm:block" />
                <span className="text-primary">Near Yamunotri</span>
              </h2>
            </div>

            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Situated on the sacred Yamunotri Yatra route, we offer more than just a stay — 
                a calm, spiritual retreat with clean rooms, soul-soothing views, and heartfelt hospitality.
              </p>

              <p className="font-medium text-foreground/90">
                Our restaurant serves only <span className="text-primary font-semibold">pure satvik vegetarian food</span> — 
                fresh, light, and prepared with love using traditional Himalayan ingredients.
              </p>

              <p>
                Wake up to misty mountains, breathe pure air, and feel closer to peace every single day.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-block pt-4"
            >
              <button className="px-7 py-3.5 bg-primary text-primary-foreground rounded-full text-base md:text-lg font-medium shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2.5 group">
                Explore Our World
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Image Collage */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative grid grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(160px,1fr)] lg:auto-rows-[minmax(200px,1fr)]"
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
                className={`relative rounded-2xl overflow-hidden shadow-2xl group ${image.className || ""}`}
              >
                <div className="w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                  <p className="text-xs md:text-sm font-medium drop-shadow-lg">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}