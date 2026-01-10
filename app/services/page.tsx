"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import ServiceCategory from "@/components/service-category"

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <ServiceHero />
      <ServiceCategory category="stay" title="Stay Services" />
      <ServiceCategory category="bhojan" title="Bhojan Services" />
      <ServiceCategory category="pilgrim" title="Pilgrim Services" />
      <ServiceCategory category="travel" title="Travel Assistance" />
      <Footer />
    </main>
  )
}
