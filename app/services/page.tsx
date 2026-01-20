"use client"

import Navbar from "@/components/navbar"

import ServiceHero from "@/components/services/service-hero"
import ServiceCategory from "@/components/services/service-category"

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <ServiceHero />
      <ServiceCategory category="stay" title="Stay Services" />
      <ServiceCategory category="bhojan" title="Bhojan Services" />
      <ServiceCategory category="pilgrim" title="Pilgrim Services" />
      <ServiceCategory category="travel" title="Travel Assistance" />
    
    </main>
  )
}
