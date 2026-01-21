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
        Experiencing the Serenity of Triveni Ghat Gangani
      </h2>

      <p className="text-foreground/75 leading-relaxed mb-6">
        Triveni Ghat Gangani is a sacred confluence of rivers, offering a tranquil
        and spiritually uplifting experience. At <strong>Shree Radhe Radhe</strong>,
        we ensure your visit is smooth, safe, and deeply fulfilling.
      </p>

      <p className="text-foreground/75 leading-relaxed mb-6">
        Whether it’s guidance along the ghats, assistance with rituals, or help in
        soaking in the peaceful surroundings, our team supports every pilgrim
        in connecting with the spiritual essence of the place.
      </p>

      <p className="text-foreground/75 leading-relaxed">
        From logistics to local insights, we take care of all arrangements so you
        can focus on devotion, reflection, and the serenity of Triveni Ghat.
      </p>
    </div>

    <Image
      src="/services/temple1.jpeg"
      alt="Triveni Ghat Gangani spiritual visit"
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
      src="/services/temple2.jpeg"
      alt="Meditation and spiritual guidance at Shri Jamtagnesh Ji Maharaj Mandir"
      className="rounded-2xl object-cover w-full h-105"
      width={1200}
      height={800}
    />

    <div>
      <h3 className="font-serif text-3xl font-bold mb-6">
        Meditation & Spiritual Support
      </h3>

      <p className="text-foreground/75 leading-relaxed mb-4">
        At Shri Jamtagnesh Ji Maharaj Mandir, meditation, yoga, and spiritual guidance
        create a serene atmosphere where pilgrims can align their body, mind, and soul.
      </p>

      <ul className="space-y-3 text-sm text-foreground/70">
        <li>• Daily guided meditation sessions at the temple premises</li>
        <li>• Gentle yoga practices to enhance focus and energy</li>
        <li>• Devotional chanting and kirtan for inner peace</li>
        <li>• Personalized spiritual reflection & counseling</li>
      </ul>
    </div>
  </div>

  <div className="grid lg:grid-cols-2 gap-16 items-center">
    <div>
      <h3 className="font-serif text-3xl font-bold mb-6">
        Ritual Assistance & Blessings
      </h3>

      <p className="text-foreground/75 leading-relaxed mb-4">
        Our team assists you in performing rituals, poojas, and offerings with devotion
        and clarity, ensuring a meaningful connection with Shri Jamtagnesh Ji Maharaj.
      </p>

      <ul className="space-y-3 text-sm text-foreground/70">
        <li>• Temple coordination and pooja guidance</li>
        <li>• Assistance with offerings and ceremonial practices</li>
        <li>• Blessings and guidance from senior temple priests</li>
        <li>• Support for special rituals and festivals</li>
      </ul>
    </div>

    <Image
      src="/temple/temple4.jpeg"
      alt="Rituals and blessings at Shri Jamtagnesh Ji Maharaj Mandir"
      className="rounded-2xl object-cover w-full h-105"
      width={1200}
      height={800}
    />
  </div>

{/* SYMMETRIC BENTO GALLERY */}
<section className="bg-muted/20 py-28">
  <div className="max-w-7xl mx-auto px-6">
    <h3 className="font-serif text-4xl md:text-5xl font-bold text-center mb-20">
      Sacred Moments Captured
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
      {/* Row 1 */}
      <div className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden">
        <Image src="/temple/temple.jpeg" alt="Yamunotri landscape" fill className="object-cover" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/temple/temple1.jpeg" alt="Pilgrimage trail" fill className="object-cover" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/temple/temple2.jpeg" alt="Himalayan journey" fill className="object-cover" />
      </div>

      {/* Row 2 */}
      <div className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden">
        <Image src="/temple/temple3.jpeg" alt="Pilgrimage experience" fill className="object-cover" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/temple/temple4.jpeg" alt="Yamunotri view" fill className="object-cover" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/temple/temple3.jpeg" alt="Spiritual trek" fill className="object-cover" />
      </div>

      {/* Row 3 – BALANCED CLOSURE */}
      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/temple/temple9.jpeg" alt="Pilgrimage trail" fill className="object-cover" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/temple/temple5.jpeg" alt="Himalayan journey" fill className="object-cover" />
      </div>

      {/* Row 4 – NEW TWO IMAGES BELOW TREK11 */}
      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/temple/temple6.jpeg" alt="Hero view" fill className="object-cover" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
        <Image src="/temple/temple7.jpeg" alt="Travel and transportation services" fill className="object-cover" />
      </div>
    </div>
  </div>
</section>

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
