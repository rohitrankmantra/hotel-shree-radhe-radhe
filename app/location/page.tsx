"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LocationHero from "@/components/location-hero"
import LocationMap from "@/components/location-map"
import DistanceInfo from "@/components/distance-info"
import RouteGuidance from "@/components/route-guidance"

export default function LocationPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <LocationHero />
      
      {/* MAP SECTION - CENTERED & CONSTRAINED */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <LocationMap />
        </div>
      </section>
      
      <DistanceInfo />
      <RouteGuidance />
 
    </main>
  )
}
