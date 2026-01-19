"use client"

import BhojanHero from "@/components/bhojan-hero"
import Image from "next/image"
import Link from "next/link"

// Images
import veg from "@/public/services/veg.jpg"
import dining from "@/public/services/dining.jpg"
import menu from "@/public/services/menu.jpg"

export default function BhojanServicePage() {
  return (
    <>
      {/* HERO */}
      <BhojanHero />

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Nourishment for Body, Mind & Soul
            </h2>

            <p className="text-foreground/75 leading-relaxed mb-6">
              In Yamunotri, food is more than sustenance — it is part of the spiritual journey. At <strong>Shree Radhe Radhe</strong>, our Bhojan services are rooted in devotion, purity, and wellness.
            </p>

            <p className="text-foreground/75 leading-relaxed mb-6">
              Our meals are carefully prepared to meet the needs of pilgrims, elderly visitors, and families. Every dish is made with fresh, vegetarian, and satvik ingredients to support energy, digestion, and spiritual focus.
            </p>

            <p className="text-foreground/75 leading-relaxed">
              We aim to provide a dining experience that is peaceful, clean, and soul-enriching — allowing you to focus on devotion and rejuvenation.
            </p>
          </div>

          <Image
            src={veg}
            alt="Satvik vegetarian food"
            className="rounded-2xl object-cover w-full h-115"
            priority
          />
        </div>
      </section>

      {/* FOOD PHILOSOPHY */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
            Our Bhojan Philosophy
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Pure Satvik Ingredients",
                desc: "Prepared without onion, garlic, or preservatives to maintain spiritual purity",
              },
              {
                title: "Freshly Cooked Daily",
                desc: "Every meal is freshly made, no reheated leftovers, ensuring taste and health",
              },
              {
                title: "Digestive-Friendly",
                desc: "Light meals suitable for high-altitude pilgrims and travelers",
              },
              {
                title: "Hygienic Practices",
                desc: "Sanitized kitchens, clean utensils, and careful food handling",
              },
              {
                title: "Simple & Nourishing",
                desc: "Balanced meals that provide energy without feeling heavy",
              },
              {
                title: "Prepared With Devotion",
                desc: "Each dish is cooked as a form of seva to uplift both body and spirit",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-2xl p-8 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DINING EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src={dining}
            alt="Dining service at Shree Radhe Radhe"
            className="rounded-2xl object-cover w-full h-105"
          />

          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">Peaceful Dining Experience</h3>

            <p className="text-foreground/75 leading-relaxed mb-4">
              Guests can enjoy meals in our serene dining hall or request in-room service for convenience. The environment is quiet, hygienic, and ideal for reflection and recovery.
            </p>

            <ul className="space-y-3 text-sm text-foreground/70">
              <li>• Dedicated calm dining spaces</li>
              <li>• Timely meal schedules</li>
              <li>• Room dining on request</li>
              <li>• Assistance for elderly and pilgrims</li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">Menu Planning & Wellness</h3>

            <p className="text-foreground/75 leading-relaxed mb-4">
              Meals are planned to provide balanced nutrition, supporting stamina for the pilgrimage. Seasonal vegetables, dals, and whole grains are the core, with optional Ayurvedic herbs and light beverages.
            </p>

            <ul className="space-y-3 text-sm text-foreground/70">
              <li>• Elder-friendly and low-spice meals</li>
              <li>• Easily digestible for high-altitude visitors</li>
              <li>• Flexible meal timings</li>
              <li>• Healthy beverages and snacks available</li>
            </ul>
          </div>

          <Image
            src={menu}
            alt="Wellness food menu at Shree Radhe Radhe"
            className="rounded-2xl object-cover w-full h-105"
          />
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-background border-t py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-8">Who Benefits Most from Bhojan Seva?</h3>

          <p className="text-foreground/70 max-w-3xl mx-auto mb-14">
            Ideal for those who seek nourishment that aligns with spiritual practice, comfort, and high-altitude wellness.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Char Dham Pilgrims",
              "Senior Citizens",
              "Spiritual Seekers",
              "Families",
              "Health-Conscious Travelers",
              "Devotees Observing Vrat",
            ].map((item, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full border border-border text-sm bg-muted/40"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
    {/* CTA */}
<section className="relative py-28">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/bg.png')" }}
  />
  <div className="absolute inset-0  backdrop-blur-[1px]" />

  {/* Content */}
  <div className="relative max-w-5xl mx-auto px-6 text-center">
    <span className="inline-block mb-4 text-sm tracking-widest uppercase text-primary/80">
      Satvik • Pure • Devotional
    </span>

    <h3 className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight">
      Experience Pure & Devotional Bhojan
    </h3>

    <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-black/70 leading-relaxed">
      Meals prepared with devotion, purity, and mindful care — served in the
      spirit of tradition at <strong className="text-black">Shree Radhe Radhe</strong>.
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
        Enquire About Bhojan Service
      </Link>
    </div>
  </div>
</section>

    </>
  )
}
