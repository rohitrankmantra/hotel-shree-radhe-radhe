"use client"

import PilgrimHero from "@/components/innerservicessection/pilgrim-hero"
import Image from "next/image"
import Link from "next/link"

export default function PilgrimServicePage() {
  return (
    <>
      {/* HERO */}
      <PilgrimHero />

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Supporting Your Spiritual Journey in Yamunotri
            </h2>

            <p className="text-foreground/75 leading-relaxed mb-6">
              Pilgrimage to Yamunotri is a sacred and physically demanding journey.
              At <strong>Shree Radhe Radhe</strong>, our Pilgrim Services ensure a
              seamless, safe, and spiritually enriching experience.
            </p>

            <p className="text-foreground/75 leading-relaxed mb-6">
              From temple guidance to meditation support, we provide personalized
              assistance so every pilgrim can focus on devotion and reflection.
            </p>

            <p className="text-foreground/75 leading-relaxed">
              We handle logistics, guidance, and spiritual needs for a peaceful
              and fulfilling pilgrimage.
            </p>
          </div>

          <Image
            src="/services/temple.png"
            alt="Temple guidance at Shree Radhe Radhe"
            className="rounded-2xl object-cover w-full h-115"
            width={1200}
            height={800}
            priority
          />
        </div>
      </section>

      {/* SPIRITUAL GUIDANCE */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/services/sprituality.jpg"
            alt="Meditation and spiritual guidance"
            className="rounded-2xl object-cover w-full h-105"
            width={1200}
            height={800}
          />

          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">
              Meditation & Spiritual Support
            </h3>

            <p className="text-foreground/75 leading-relaxed mb-4">
              Meditation sessions, yoga guidance, and spiritual counseling help
              align body, mind, and soul during your pilgrimage.
            </p>

            <ul className="space-y-3 text-sm text-foreground/70">
              <li>• Daily guided meditation sessions</li>
              <li>• Yoga practices for stamina and flexibility</li>
              <li>• Devotional chanting & kirtan</li>
              <li>• Spiritual counseling & reflection</li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">
              Ritual Assistance & Blessings
            </h3>

            <p className="text-foreground/75 leading-relaxed mb-4">
              Our team guides you through rituals, offerings, and ceremonies so
              that all practices are performed with clarity and devotion.
            </p>

            <ul className="space-y-3 text-sm text-foreground/70">
              <li>• Temple coordination & pooja guidance</li>
              <li>• Assistance with offerings</li>
              <li>• Blessings from senior guides</li>
              <li>• Ritual support for special occasions</li>
            </ul>
          </div>

          <Image
            src="/services/spritual.jpg"
            alt="Blessings and rituals at Shree Radhe Radhe"
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
            Guided • Sacred • Devotional
          </span>

          <h3 className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight">
            Complete Your Yamunotri Pilgrimage with Ease
          </h3>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-black/70 leading-relaxed">
            Let <strong className="text-black">Shree Radhe Radhe</strong> assist
            you at every step — so you can focus solely on devotion.
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
              Enquire About Pilgrim Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
