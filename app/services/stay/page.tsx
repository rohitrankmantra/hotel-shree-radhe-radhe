"use client"

import StayHero from "@/components/innerservicessection/stay-hero"
import Image from "next/image"
import Link from "next/link"

export default function StayServicePage() {
  return (
    <>
      {/* HERO */}
      <StayHero />

      {/* INTRO – BRAND STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A Thoughtfully Crafted Stay Experience in Yamunotri
            </h2>

            <p className="text-foreground/75 leading-relaxed mb-6">
              At <strong>Shree Radhe Radhe</strong>, we understand that a journey
              to Yamunotri is physically demanding and spiritually significant.
              Our stay services are designed to restore your energy, offer
              warmth in the Himalayan climate, and provide a peaceful
              environment for reflection and prayer.
            </p>

            <p className="text-foreground/75 leading-relaxed">
              We focus on simplicity, hygiene, and heartfelt hospitality —
              ensuring that every guest feels safe, comfortable, and cared for
              throughout their stay.
            </p>
          </div>

          <Image
            src="/rooms/hotel-room1.jpeg"
            alt="Rooms at Shree Radhe Radhe Yamunotri"
            className="rounded-2xl object-cover w-full h-115"
            width={1200}
            height={800}
            priority
          />
        </div>
      </section>

      {/* EXPERIENCE PILLARS */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
            Our Stay Philosophy
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Comfort After Long Journeys",
                desc: "Warm bedding, calm interiors, and a restful atmosphere designed for tired pilgrims",
              },
              {
                title: "Spiritual-Friendly Environment",
                desc: "Quiet surroundings ideal for prayer, meditation, and mental peace",
              },
              {
                title: "Pilgrim-Focused Design",
                desc: "Facilities thoughtfully arranged for elders, families, and devotees",
              },
              {
                title: "Cleanliness Without Compromise",
                desc: "High standards of hygiene essential in high-altitude locations",
              },
              {
                title: "Human-Centered Hospitality",
                desc: "Service driven by care, respect, and devotion",
              },
              {
                title: "Trust & Safety",
                desc: "A secure, well-managed environment for all guests",
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

      {/* SERVICE OPERATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/rooms/view3.jpeg"
            alt="Hygiene and housekeeping"
            className="rounded-2xl object-cover w-full h-105"
            width={1200}
            height={800}
          />

          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">
              Cleanliness & Daily Care
            </h3>

            <p className="text-foreground/75 leading-relaxed mb-4">
              Hygiene is especially important in cold mountain regions.
              Our housekeeping protocols ensure that rooms, bedding, and
              washrooms are cleaned regularly with attention to health and
              safety.
            </p>

            <ul className="space-y-3 text-foreground/70 text-sm">
              <li>• Daily room cleaning</li>
              <li>• Sanitized washrooms</li>
              <li>• Fresh linen on request</li>
              <li>• Waste management & ventilation</li>
            </ul>
          </div>
        </div>

       <div className="grid lg:grid-cols-2 gap-16 items-center">
  <div>
    <h3 className="font-serif text-3xl font-bold mb-6">
      Impeccable Washroom Hygiene
    </h3>

    <p className="text-foreground/75 leading-relaxed mb-4">
      We prioritize your comfort with spotless and well-maintained washrooms. Our team ensures cleanliness, hygiene, and freshness throughout your visit.
    </p>

    <ul className="space-y-3 text-foreground/70 text-sm">
      <li>• Daily deep cleaning & sanitization</li>
      <li>• Stocked hygiene essentials</li>
      <li>• Quick maintenance response</li>
      <li>• Safe & pleasant environment for all visitors</li>
    </ul>
  </div>

  <Image
    src="/rooms/washroom.jpeg"
    alt="Clean and well-maintained washroom"
    className="rounded-2xl object-cover w-full h-105"
    width={1200}
    height={800}
  />
</div>

      </section>

      {/* FINAL CTA */}
      <section className="relative py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.png')" }}
        />
        <div className="absolute inset-0 backdrop-blur-[1px]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 text-sm tracking-widest uppercase text-primary/80">
            Comfort • Peace • Care
          </span>

          <h3 className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight">
            A Stay That Respects Your Journey
          </h3>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-black/70 leading-relaxed">
            Choose a place that understands the spiritual and physical demands of
            Yamunotri. Experience{" "}
            <strong className="text-black">warmth, care, and peace</strong> at
            Shree Radhe Radhe.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center
                rounded-full border border-primary/30
                px-10 py-3.5 text-primary font-medium
                hover:bg-primary hover:text-white
                transition-all duration-300"
            >
              Enquire for Accommodation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
