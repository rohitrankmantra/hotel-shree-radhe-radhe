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
      <LocationMap />
      <DistanceInfo />
      <RouteGuidance />
 
    </main>
  )
}
