"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LocationHero from "@/components/location/location-hero"
import LocationMap from "@/components/location/location-map"
import DistanceInfo from "@/components/location/distance-info"
import RouteGuidance from "@/components/location/route-guidance"

export default function LocationPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <LocationHero />
      
      {/* MAP SECTION - CENTERED & CONSTRAINED */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <LocationMap />
        </div>
      </section>
      
      <DistanceInfo />
      <RouteGuidance />
 
    </main>
  )
}
