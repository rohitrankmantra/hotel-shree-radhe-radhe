"use client"

import PilgrimHero from "@/components/pilgrim-hero"
import Image from "next/image"
import Link from "next/link"

// Images
import temple from "@/public/services/temple.png"
import sprituality from "@/public/services/sprituality.jpg"
import spritual from "@/public/services/spritual.jpg"

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
              Pilgrimage to Yamunotri is a sacred and physically demanding journey. At <strong>Shree Radhe Radhe</strong>, our Pilgrim Services are designed to ensure that devotees experience a seamless, safe, and spiritually enriching trip.
            </p>

            <p className="text-foreground/75 leading-relaxed mb-6">
              From temple guidance to meditation support, we provide personalized assistance to help every pilgrim focus on devotion, reflection, and well-being.
            </p>

            <p className="text-foreground/75 leading-relaxed">
              Our goal is to take care of logistics, guidance, and spiritual needs so that your pilgrimage is peaceful and fulfilling.
            </p>
          </div>

          <Image
            src={temple}
            alt="Temple guidance at Shree Radhe Radhe"
            className="rounded-2xl object-cover w-full h-115"
            priority
          />
        </div>
      </section>

      {/* PILGRIM PHILOSOPHY */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
            Our Pilgrim Service Philosophy
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Temple Guidance & Coordination",
                desc: "Assistance with timings, rituals, and offerings for Yamunotri temples",
              },
              {
                title: "Spiritual Wellness Programs",
                desc: "Yoga, meditation, and devotional practices to enrich your spiritual journey",
              },
              {
                title: "Ritual Support & Blessings",
                desc: "Help with performing ceremonies correctly and receiving blessings",
              },
              {
                title: "Safe & Accessible Travel",
                desc: "Ensuring that every pilgrim, including elders, can navigate safely",
              },
              {
                title: "Personal Assistance",
                desc: "Dedicated staff to assist with questions, arrangements, and guidance",
              },
              {
                title: "Respect & Care",
                desc: "Services delivered with devotion, empathy, and attention to individual needs",
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

      {/* SPIRITUAL GUIDANCE */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src={sprituality}
            alt="Meditation and spiritual guidance"
            className="rounded-2xl object-cover w-full h-105"
          />

          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">Meditation & Spiritual Support</h3>

            <p className="text-foreground/75 leading-relaxed mb-4">
              We offer meditation sessions, yoga guidance, and spiritual counseling to help you align your body, mind, and soul during your pilgrimage. Our programs are gentle, restorative, and suitable for all ages.
            </p>

            <ul className="space-y-3 text-sm text-foreground/70">
              <li>• Daily guided meditation sessions</li>
              <li>• Yoga practices for flexibility and stamina</li>
              <li>• Devotional chanting & kirtan sessions</li>
              <li>• Spiritual counseling & reflection guidance</li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">Ritual Assistance & Blessings</h3>

            <p className="text-foreground/75 leading-relaxed mb-4">
              We ensure that all religious practices and offerings are performed correctly. Our team guides you through rituals, helps with ceremonial items, and provides blessings to make your pilgrimage spiritually complete.
            </p>

            <ul className="space-y-3 text-sm text-foreground/70">
              <li>• Temple coordination & prayer guidance</li>
              <li>• Assistance with offerings & poojas</li>
              <li>• Blessings from senior priests and guides</li>
              <li>• Ritual guidance for special occasions</li>
            </ul>
          </div>

          <Image
            src={spritual}
            alt="Blessings and rituals at Shree Radhe Radhe"
            className="rounded-2xl object-cover w-full h-105"
          />
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-background border-t py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-8">
            Who Benefits Most from Pilgrim Services?
          </h3>

          <p className="text-foreground/70 max-w-3xl mx-auto mb-14">
            Our Pilgrim services are tailored for those seeking spiritual depth, safe navigation, and support during their journey to Yamunotri.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Char Dham Pilgrims",
              "Elderly Devotees",
              "Families with Children",
              "Spiritual Seekers",
              "Group Tours",
              "First-time Pilgrims",
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
      Guided • Sacred • Devotional
    </span>

    <h3 className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight">
      Complete Your Yamunotri Pilgrimage with Ease
    </h3>

    <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-black/70 leading-relaxed">
      Let Shree Radhe Radhe assist you in every step of your pilgrimage — from
      guidance to rituals — so you can focus solely on <strong className="text-black">devotion</strong>.
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
