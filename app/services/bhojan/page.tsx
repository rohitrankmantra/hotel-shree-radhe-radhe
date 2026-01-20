"use client"

import BhojanHero from "@/components/innerservicessection/bhojan-hero"
import Image from "next/image"
import Link from "next/link"

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
              In Yamunotri, food is more than sustenance — it is part of the spiritual journey. At{" "}
              <strong>Shree Radhe Radhe</strong>, our Bhojan services are rooted in devotion, purity, and wellness.
            </p>

            <p className="text-foreground/75 leading-relaxed mb-6">
              Our meals are carefully prepared to meet the needs of pilgrims, elderly visitors, and families.
              Every dish is made with fresh, vegetarian, and satvik ingredients.
            </p>

            <p className="text-foreground/75 leading-relaxed">
              We aim to provide a dining experience that is peaceful, clean, and soul-enriching.
            </p>
          </div>

          <Image
            src="/services/veg.jpg"
            alt="Satvik vegetarian food"
            className="rounded-2xl object-cover w-full h-115"
            width={1200}
            height={800}
            priority
          />
        </div>
      </section>

      {/* DINING EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/services/dining.jpg"
            alt="Dining service at Shree Radhe Radhe"
            className="rounded-2xl object-cover w-full h-105"
            width={1200}
            height={800}
          />

          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">
              Peaceful Dining Experience
            </h3>

            <p className="text-foreground/75 leading-relaxed mb-4">
              Guests can enjoy meals in our serene dining hall or request in-room service for convenience.
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
            <h3 className="font-serif text-3xl font-bold mb-6">
              Menu Planning & Wellness
            </h3>

            <p className="text-foreground/75 leading-relaxed mb-4">
              Meals are planned to provide balanced nutrition, supporting stamina for the pilgrimage.
            </p>

            <ul className="space-y-3 text-sm text-foreground/70">
              <li>• Elder-friendly and low-spice meals</li>
              <li>• Easily digestible for high-altitude visitors</li>
              <li>• Flexible meal timings</li>
              <li>• Healthy beverages and snacks available</li>
            </ul>
          </div>

          <Image
            src="/services/menu.jpg"
            alt="Wellness food menu at Shree Radhe Radhe"
            className="rounded-2xl object-cover w-full h-105"
            width={1200}
            height={800}
          />
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
            Satvik • Pure • Devotional
          </span>

          <h3 className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight">
            Experience Pure & Devotional Bhojan
          </h3>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-black/70 leading-relaxed">
            Meals prepared with devotion, purity, and mindful care — served in the
            spirit of tradition at{" "}
            <strong className="text-black">Shree Radhe Radhe</strong>.
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
