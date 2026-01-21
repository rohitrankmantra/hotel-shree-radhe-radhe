"use client"

import TravelHero from "@/components/innerservicessection/travel-hero"
import Image from "next/image"
import Link from "next/link"

export default function TravelServicePage() {
  return (
    <>
      {/* HERO */}
      <TravelHero />

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Seamless Travel & Guided Tours
            </h2>

            <p className="text-foreground/75 leading-relaxed mb-6">
              Traveling in the high-altitude terrain of Yamunotri can be challenging. Our Travel Services ensure safe, organized, and comfortable movement for every pilgrim visiting Shree Radhe Radhe.
            </p>

            <p className="text-foreground/75 leading-relaxed mb-6">
              From transportation to route guidance and curated tour packages, we provide everything you need to explore Yamunotri without stress.
            </p>

            <p className="text-foreground/75 leading-relaxed">
              Our goal is to let you focus on your spiritual journey while we take care of logistics, safety, and convenience.
            </p>
          </div>

          <Image
            src="/trek/trek3.jpeg"
            alt="Travel and transportation services"
            className="rounded-2xl object-cover w-full h-[28rem]"
            width={1200}
            height={800}
            priority
          />
        </div>
      </section>

      {/* TRAVEL PHILOSOPHY */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
            Our Travel Service Philosophy
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Comfortable Transportation",
                desc: "Safe vehicles with trained drivers for local travel, airport transfers, and pilgrimage routes",
              },
              {
                title: "Expert Route Guidance",
                desc: "Our team plans the best routes considering safety, weather, and convenience",
              },
              {
                title: "Curated Tour Packages",
                desc: "Day trips, cultural tours, and adventure experiences designed for pilgrims",
              },
              {
                title: "Group & Individual Travel",
                desc: "Flexible arrangements for solo travelers, families, and groups",
              },
              {
                title: "Safety & Assistance",
                desc: "Medical assistance, guides, and support throughout your journey",
              },
              {
                title: "Convenience & Planning",
                desc: "We handle schedules, stops, and logistics so you can enjoy the journey stress-free",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-2xl p-8 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTE GUIDANCE & TOURS */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/trek/trek7.jpeg"
            alt="Route guidance for Yamunotri"
            className="rounded-2xl object-cover w-full h-[26rem]"
            width={1200}
            height={800}
          />

          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">
              Expert Route Guidance
            </h3>
            <p className="text-foreground/75 leading-relaxed mb-4">
              Navigating Yamunotri can be challenging. Our guides provide clear instructions, safety tips, and local insights to ensure every journey is smooth and secure.
            </p>

            <ul className="space-y-3 text-sm text-foreground/70">
              <li>• Best trekking and driving routes</li>
              <li>• Weather and terrain advisory</li>
              <li>• Safety check-ins and support</li>
              <li>• Assistance for elderly and first-time pilgrims</li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">
              Curated Tour Packages
            </h3>
            <p className="text-foreground/75 leading-relaxed mb-4">
              Explore Yamunotri and surrounding sacred sites through thoughtfully curated tours.
            </p>

            <ul className="space-y-3 text-sm text-foreground/70">
              <li>• Day trips to nearby temples</li>
              <li>• Multi-day spiritual journeys</li>
              <li>• Adventure and sightseeing options</li>
              <li>• Group or private tours</li>
            </ul>
          </div>

          <Image
            src="/trek/trek8.jpeg"
            alt="Tour packages for pilgrims"
            className="rounded-2xl object-cover w-full h-[26rem]"
            width={1200}
            height={800}
          />
        </div>
      </section>

{/* SYMMETRIC BENTO GALLERY */}
<section className="bg-muted/20 py-28">
  <div className="max-w-7xl mx-auto px-6">
    <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-20">
      Journey Through Yamunotri
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
      {/* Row 1 */}
      <div className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden">
        <Image src="/trek/trek1.jpeg" alt="Yamunotri landscape" fill className="object-cover" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/trek/trek4.jpeg" alt="Pilgrimage trail" fill className="object-cover" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/trek/trek6.jpeg" alt="Himalayan journey" fill className="object-cover" />
      </div>

      {/* Row 2 */}
      <div className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden">
        <Image src="/trek/trek11.jpeg" alt="Pilgrimage experience" fill className="object-cover" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/trek/trek9.jpeg" alt="Yamunotri view" fill className="object-cover" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/trek/trek10.jpeg" alt="Spiritual trek" fill className="object-cover" />
      </div>

      {/* Row 3 – BALANCED CLOSURE */}
      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/trek/trek4.jpeg" alt="Pilgrimage trail" fill className="object-cover" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/trek/trek6.jpeg" alt="Himalayan journey" fill className="object-cover" />
      </div>

      {/* Row 4 – NEW TWO IMAGES BELOW TREK11 */}
      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/trek/hero.jpeg" alt="Hero view" fill className="object-cover" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/trek/trek3.jpeg" alt="Travel and transportation services" fill className="object-cover" />
      </div>
    </div>
  </div>
</section>





      {/* CTA */}
      <section className="relative py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.png')" }}
        />
        <div className="absolute inset-0 backdrop-blur-[1px]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 text-sm tracking-widest uppercase text-primary/80">
            Guided • Safe • Memorable
          </span>

          <h3 className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight">
            Travel in Comfort & Safety with Shree Radhe Radhe
          </h3>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-black/70 leading-relaxed">
            Enjoy a <strong className="text-black">hassle-free journey</strong> with expert guidance and curated tours.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary/30 px-10 py-3.5 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
            >
              Enquire About Travel Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
